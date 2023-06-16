import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Text,
  Box,
  Divider,
  useToast,
  useDisclosure,
} from '@chakra-ui/react';
import { Tab } from '@/utils/types';
import { setFormatDate } from '@/lib/dateHelper';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { AddTabForm } from '../addTabForm/AddTabForm';
import { useUpdateRecordTab } from '../hooks/useUpdateRecordTab';
import { Alert } from '@/shared/alert/Alert';

interface Props {
  data: Tab;
  show: boolean;
  handleClose: () => void;
  type: string;
}

const TabRowDetailsModal = ({ show, handleClose, data, type }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const { date, description, title, executedBy, horseName, id } = data;
  const { updateTab, removeTab } = useUpdateRecordTab(horseName, type, id);

  const defaultValues = {
    date: new Date(date),
    description: description,
    title: title,
    executedBy: executedBy,
  };

  const hadleOpenEditForm = () => {
    setIsEditing(true);
  };
  const hadleCloseEditForm = () => {
    setIsEditing(false);
  };

  const handleRemoveTab = async () => {
    try {
      await removeTab(id);
      hadleCloseEditForm();
      toast({
        title: `Tab ${type} has been successfully deleted.`,
        status: 'success',
        position: 'top',
      });
    } catch (error) {
      console.log(error);
      toast({
        title: `Failed to Delete Tab ${type}`,
        status: 'error',
        position: 'top',
      });
    }
  };
  return (
    <>
      <AddTabForm
        title={'Edit Tab'}
        nameForm={'edit-tab'}
        add={updateTab}
        isEditing={isEditing}
        handleCloseEditing={hadleCloseEditForm}
        isHiddenOpenBtn={true}
        defaultValuesTab={defaultValues}
      />
      <Alert
        dialogHeader="Delete tab"
        dialogBody={<Text>Are you sure ?</Text>}
        isOpen={isOpen}
        onClose={onClose}
        onClick={handleRemoveTab}
      />

      <Modal isOpen={show} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Details</ModalHeader>
          <Divider mb={5} />
          <ModalCloseButton />

          <ModalBody>
            <Flex direction={'column'} gap={2}>
              <Box>
                <Text as="b">Title:</Text> {title}
              </Box>
              <Box>
                <Text as="b">Date:</Text> {setFormatDate(date)}
              </Box>
              <Box>
                <Text as="b">executedBy:</Text> {executedBy}
              </Box>
              <Box>
                <Text as="b">Description:</Text> {description}
              </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button leftIcon={<DeleteIcon />} mr={3} _hover={{ color: '#FF6961' }} onClick={onOpen}>
              Delete
            </Button>

            <Button leftIcon={<EditIcon />} mr={3} _hover={{ color: '#FF6961' }} onClick={hadleOpenEditForm}>
              Edit
            </Button>
            <Button mr={3} onClick={handleClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TabRowDetailsModal;
