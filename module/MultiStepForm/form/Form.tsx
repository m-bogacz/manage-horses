import { Box, Button, ButtonGroup, Divider } from '@chakra-ui/react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { FormButton } from '@/shared/button/FormButton';
import { FirstStepHorseDetails } from '../components/FirstStepHorseDetails';
import { SecondStepMotherDetails } from '../components/SecondStepMotherDetails';
import { ThirdStepFatherDetails } from '../components/ThirdStepFatherDetails';
import { useMultiStepFormContext } from '../context/MultiStepFormContext';

export const Form = () => {
  const { active, handlePrev, handleNext } = useMultiStepFormContext();

  const methods = useForm();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: '',
    },
  });
  const switchStep = () => {
    switch (active) {
      case 1:
        return <FirstStepHorseDetails />;
      case 2:
        return <SecondStepMotherDetails />;
      case 3:
        return <ThirdStepFatherDetails />;
      default:
        return <FirstStepHorseDetails />;
    }
  };

  const onSubmit: SubmitHandler<any> = (data) => console.log(data);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box mt={5}>{switchStep()}</Box>
        <Divider m={5} ml={0} />

        <ButtonGroup width={'100%'} variant="outline" spacing="6">
          <Button isDisabled={active === 1} width={'100%'} onClick={handlePrev} bg={'step.100'}>
            Back
          </Button>
          {active === 3 ? (
            <FormButton type={'submit'} text={'Submit'} />
          ) : (
            <FormButton text="Next" onClick={handleNext} />
          )}
        </ButtonGroup>
      </form>
    </FormProvider>
  );
};
