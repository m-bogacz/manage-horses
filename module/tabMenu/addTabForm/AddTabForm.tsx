import {
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';
import { TabForm } from './components/TabForm';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { FormFields } from '../utils/types';
import { tabFormFields } from './tabFormFields';
import { useHorseContext } from '@/apps/context/HorseContext';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Tab } from '@/utils/types';

interface AddTabFormProps {
  title: string;
  nameForm: string;
  formFields?: FormFields;
  add: (data: Tab) => void;
}

export const AddTabForm = ({ title, nameForm, add, formFields = tabFormFields }: AddTabFormProps) => {
  const router = useRouter();
  const { name, news } = useHorseContext();

  const methods = useForm();
  const { handleSubmit } = methods;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmit = async (data: any) => {
    try {
      add(data);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <Button onClick={onOpen}>Add</Button>

      <Modal isOpen={isOpen} onClose={onClose} size={'4xl'}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TabForm formFields={formFields} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button type="submit" variant="ghost">
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </FormProvider>
  );
};
