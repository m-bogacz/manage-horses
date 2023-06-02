import { Divider, Flex, Heading } from '@chakra-ui/react';
import { AddHorseFormProvider } from './context/AddHorseFormContext';
import { Form } from './components/form/Form';
import { StepBar } from './components/stepBar/StepBar';

export const AddHorseForm = () => {
  return (
    <AddHorseFormProvider>
      <Flex flexDir={'column'} width={{ md: '100vw', lg: '50vw' }} m={10}>
        <Heading>Adding a Horse</Heading>
        <Divider mt={2} mb={5} />
        <StepBar />
        <Form />
      </Flex>
    </AddHorseFormProvider>
  );
};
