import React, { useState } from 'react';
import { setFormatDate } from '@/lib/dateHelper';
import TabRowDetailsModal from '@/module/tabMenu/switchTab/TabRowDetailsModal';
import { Tr, Td, useDisclosure } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { Tab } from '@/utils/types';

import { deleteNewsServices } from '@/apps/services/services';
import { useRemoveRecordTab } from '@/module/tabMenu/hooks/useRemoveRecordTab';
import { prisma } from '@/lib/prisma';

interface TBodyTrProps {
  item: Tab;
  tabName: string;
  horseName: string;
}

export const TBodyTr = ({ item, tabName, horseName }: TBodyTrProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { date, title, description, name } = item;

  return (
    <>
      <Tr cursor={'pointer'} onClick={onOpen}>
        <Td>{setFormatDate(date)}</Td>
        <Td>{title}</Td>
        <Td maxWidth={50} style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
          {description}
        </Td>
        <Td>{name ?? ''}</Td>

        <DeleteIcon _hover={{ color: '#FF6961' }} />
      </Tr>
      <TabRowDetailsModal data={item} show={isOpen} handleClose={onClose} />
    </>
  );
};
