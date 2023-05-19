import { Box, Button, ButtonGroup, Center, Divider, Spinner } from '@chakra-ui/react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { FormButton } from '@/shared/button/FormButton';
import { switchResolver } from './validationSchemas';
import { defaultValues } from './helpers';
import { useAddHorse } from './hooks/useAddHorse';
import { HorseEntity } from '@/utils/types';
import { useMultiStepFormContext } from '../../context/MultiStepFormContext';
import { useRouter } from 'next/navigation';
import { handleAddImageToSupBase } from '@/module/uploader/helpers';
import { useState } from 'react';

export const Form = () => {
  const [pending, setPending] = useState(false);
  const router = useRouter();
  const { currentStep, handleNextStep, handlePrevStep, currentStepIndex } = useMultiStepFormContext();

  const resolver = switchResolver(currentStepIndex);
  const { mutate } = useAddHorse();

  const methods = useForm<HorseEntity>({ resolver, defaultValues });
  const formData = methods.getValues();

  const onSubmit: SubmitHandler<HorseEntity> = async (data) => {
    if (['Horse Information', 'Mother Information'].includes(currentStep.name)) {
      handleNextStep();
    }
    try {
      if (currentStep.name === 'Father Information') {
        setPending(true);
        const fileBlob = await fetch(formData?.profileImage).then((res) => res.blob());

        const path = await handleAddImageToSupBase(fileBlob);
        formData.profileImage = '';

        const { name, birthday, place, sex, mother, images } = formData;
        const { father } = data;

        await mutate({
          name: name,
          birthday: birthday,
          sex: sex,
          profileImageUrl: path,
          place: place,
          mother: mother.value,
          father: father.value,
          images: images,
        });
        setPending(false);
        handleNextStep();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handelNavigateToDashBoard = () => {
    const horseName = formData.name;
    const path = `/horse/${horseName}`;
    router.push(path);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box mt={5}>{currentStep.component}</Box>

        <Divider m={5} ml={0} />

        {currentStep.name === 'Summary' ? (
          <Center>
            <FormButton
              width={{ base: '100%', md: '50%' }}
              onClick={handelNavigateToDashBoard}
              text="Go to Dashboard"
            />
          </Center>
        ) : (
          <ButtonGroup width="100%" variant="outline" spacing="6">
            <Button
              isDisabled={currentStep.name === 'Horse Information' || pending}
              width="100%"
              onClick={handlePrevStep}
              bg="step.100"
            >
              Back
            </Button>

            <FormButton isDisabled={pending} type="submit">
              {pending ? <Spinner /> : 'Next'}
            </FormButton>
          </ButtonGroup>
        )}
      </form>
    </FormProvider>
  );
};
