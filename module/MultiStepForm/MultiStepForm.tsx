import { Divider, Flex, Heading } from '@chakra-ui/react';
import { MultiStepFormProvider } from './context/MultiStepFormContext';
import { Form } from './components/form/Form';
import { StepBar } from './components/stepBar/StepBar';

export const MultiStepForm = () => {
  return (
    <MultiStepFormProvider>
      <Flex flexDir={'column'} width={{ md: '100vw', lg: '50vw' }} m={10}>
        <Heading>Adding a Horse</Heading>
        <Divider mt={2} mb={5} />
        <StepBar />
        <Form />
      </Flex>
    </MultiStepFormProvider>
  );
};
