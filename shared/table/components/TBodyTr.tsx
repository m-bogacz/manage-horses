import React from 'react';
import { setFormatDate } from '@/lib/dateHelper';
import TabRowDetailsModal from '@/module/tabMenu/switchTab/TabRowDetailsModal';
import { Tr, Td, useDisclosure, Flex } from '@chakra-ui/react';
import { Tab } from '@/utils/types';

interface TBodyTrProps {
  item: Tab;
  type: string;
}

export const TBodyTr = ({ item, type }: TBodyTrProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { date, title, description, executedBy } = item;

  return (
    <Tr cursor={'pointer'} onClick={onOpen}>
      <Td>{setFormatDate(date)}</Td>
      <Td>{title}</Td>
      <Td maxWidth={80} style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
        {description}
      </Td>
      <Td>{executedBy}</Td>

      <TabRowDetailsModal data={item} show={isOpen} handleClose={onClose} type={type} />
    </Tr>
  );
};
