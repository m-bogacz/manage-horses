import { Divider, Flex, Heading, Box } from '@chakra-ui/react';
import { AddHorseFormProvider } from './context/AddHorseFormContext';
import { Form } from './components/form/Form';
import { StepBar } from './components/stepBar/StepBar';

export const AddHorseForm = () => {
  return (
    <AddHorseFormProvider>
      <Box m={{ base: 3, md: 10 }}>
        <Flex flexDir={'column'} width={{ md: '100vw', lg: '50vw' }} m={'0 auto'}>
          <Heading>Adding a Horse</Heading>
          <Divider mt={2} mb={5} />
          <StepBar />
          <Form />
        </Flex>
      </Box>
    </AddHorseFormProvider>
  );
};
