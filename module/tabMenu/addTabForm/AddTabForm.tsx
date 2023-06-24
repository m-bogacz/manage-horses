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
  ButtonGroup,
} from '@chakra-ui/react';
import React from 'react';
import { TabForm } from './components/TabForm';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { DefaultValuesTabFormType, FormFields } from '../utils/types';
import { defaultValuesTabForm, tabFormFields } from './utils/tabFormFields';
import { Tab } from '@/utils/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { addTabFormValidationSchema } from './utils/validationSchema';
import { CloseButton } from '@/shared/button/CloseButton';
import { FormButton } from '@/shared/button/FormButton';

interface AddTabFormProps {
  title: string;
  nameForm: string;
  formFields?: FormFields;
  add: (data: Tab) => void;
  isEditing?: boolean;
  handleCloseEditing?: () => void;
  isHiddenOpenBtn?: boolean;
  defaultValuesTab?: DefaultValuesTabFormType;
}

export const AddTabForm = ({
  title,
  formFields = tabFormFields,
  isEditing = false,
  isHiddenOpenBtn = false,
  defaultValuesTab = defaultValuesTabForm,
  add,
  handleCloseEditing,
}: AddTabFormProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const methods = useForm<Tab>({
    resolver: zodResolver(addTabFormValidationSchema),
    defaultValues: defaultValuesTab,
  });
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<Tab> = async (data) => {
    try {
      add(data);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    handleCloseEditing && handleCloseEditing();
    onClose();
  };

  return (
    <FormProvider {...methods}>
      {isHiddenOpenBtn ? null : (
        <Button onClick={onOpen} mt={2}>
          Add
        </Button>
      )}

      <Modal isOpen={isOpen || isEditing} onClose={handleClose} size={'4xl'}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton onClick={handleClose} />
          <ModalBody>
            <TabForm formFields={formFields} />
          </ModalBody>
          <ModalFooter>
            <ButtonGroup>
              <CloseButton onClick={handleClose} />
              <FormButton type="submit" colorScheme="blue">
                Save
              </FormButton>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </FormProvider>
  );
};
