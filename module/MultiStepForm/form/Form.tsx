import { Box, Button, ButtonGroup, Divider } from '@chakra-ui/react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { FormButton } from '@/shared/button/FormButton';

import { useMultiStepFormContext } from '../context/MultiStepFormContext';
import { switchResolver } from './validationSchemas';

import { defaultValues, switchStep } from './helpers';
import { useAddHorse } from './hooks/useAddHorse';
import { HorseEntity } from '@/utils/types';

export const Form = () => {
  const { activeStep, handlePrev, handleNext } = useMultiStepFormContext();
  const resolver = switchResolver(activeStep);
  const { mutation } = useAddHorse();
  const methods = useForm<HorseEntity>({ resolver, defaultValues });

  const onSubmit: SubmitHandler<HorseEntity> = (data) => {
    if (activeStep === 1 || activeStep === 2) {
      handleNext();
    }
    if (activeStep === 3) {
      const formData = methods.getValues();
      mutation.mutate(formData);
    }
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box mt={5}>{switchStep(activeStep)}</Box>
        <Divider m={5} ml={0} />

        <ButtonGroup width={'100%'} variant="outline" spacing="6">
          <Button isDisabled={activeStep === 1} width={'100%'} onClick={handlePrev} bg={'step.100'}>
            Back
          </Button>

          <FormButton type={'submit'} text={activeStep === 3 ? 'Submit' : 'Next'} />
        </ButtonGroup>
      </form>
    </FormProvider>
  );
};
