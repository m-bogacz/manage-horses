import React from 'react';
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
} from '@chakra-ui/react';
import { Tab } from '@/utils/types';
import { setFormatDate } from '@/lib/dateHelper';

interface Props {
  data: Tab;
  show: boolean;
  handleClose: () => void;
}
const TabRowDetailsModal = ({ show, handleClose, data }: Props) => {
  const { date, description, title, name } = data;
  return (
    <>
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
                <Text as="b">Name:</Text> {name}
              </Box>
              <Box>
                <Text as="b">Description:</Text> {description}
              </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
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
