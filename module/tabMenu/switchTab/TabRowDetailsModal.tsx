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
  ButtonGroup,
} from '@chakra-ui/react';
import { Tab } from '@/utils/types';
import { setFormatDate } from '@/lib/dateHelper';
import { AddTabForm } from '../addTabForm/AddTabForm';
import { useUpdateRecordTab } from '../hooks/useUpdateRecordTab';
import { Alert } from '@/shared/alert/Alert';
import { EditButton } from '@/shared/button/EditButton';
import { RemoveButton } from '@/shared/button/DeleteButton';
import { CloseButton } from '@/shared/button/CloseButton';
import { useHorseContext } from '@/apps/context/HorseContext';

interface Props {
  data: Tab;
  show: boolean;
  handleClose: () => void;
  type: string;
}

const TabRowDetailsModal = ({ show, handleClose, data, type }: Props) => {
  const { name: horseName } = useHorseContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEditing, setIsEditing] = useState(false);
  const { date, description, title, executedBy, id } = data;
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

  const handleRemoveTab = async () => await removeTab(id, hadleCloseEditForm);

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
            <ButtonGroup>
              <RemoveButton onClick={onOpen} />
              <EditButton onClick={hadleOpenEditForm} />
              <CloseButton onClick={handleClose} />
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TabRowDetailsModal;
