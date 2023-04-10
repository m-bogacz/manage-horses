import { Flex } from '@chakra-ui/react';
import { StepBar } from './stepBar/StepBar';
import { useSteps } from './useMultiStepForm';
import { Form } from './form/Form';
import { MultiStepFormProvider } from './context/MultiStepFormContext';

export const MultiStepForm = () => {
  return (
    <MultiStepFormProvider>
      <Flex flexDir={'column'} width={{ md: '100vw', lg: '50vw' }} m={10}>
        <StepBar />
        <Form />
      </Flex>
    </MultiStepFormProvider>
  );
};
