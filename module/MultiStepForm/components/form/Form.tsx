import { Box, Button, ButtonGroup, Center, Divider } from '@chakra-ui/react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { FormButton } from '@/shared/button/FormButton';
import { switchResolver } from './validationSchemas';
import { defaultValues } from './helpers';
import { useAddHorse } from './hooks/useAddHorse';
import { HorseEntity } from '@/utils/types';
import { useMultiStepFormContext } from '../../context/MultiStepFormContext';
import { useRouter } from 'next/navigation';

export const Form = () => {
  const router = useRouter();
  const { currentStep, handleNextStep, handlePrevStep, currentStepIndex } = useMultiStepFormContext();
  const resolver = switchResolver(currentStepIndex);

  const { mutation } = useAddHorse();
  const methods = useForm<HorseEntity>({ resolver, defaultValues });
  const formData = methods.getValues();

  const onSubmit: SubmitHandler<HorseEntity> = (data) => {
    if (['Horse Information', 'Dam Information'].includes(currentStep.name)) {
      handleNextStep();
    }
    if (currentStep.name === 'Sire Information') {
      mutation.mutate(formData);
      handleNextStep();
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
          <ButtonGroup width={'100%'} variant="outline" spacing="6">
            <Button
              isDisabled={currentStep.name === 'Horse Information'}
              width={'100%'}
              onClick={handlePrevStep}
              bg={'step.100'}
            >
              Back
            </Button>
            <FormButton type={'submit'} text={'Next'} />
          </ButtonGroup>
        )}
      </form>
    </FormProvider>
  );
};
