import { TableContainer, Thead, Tr, Th, Tbody, Table as TableUI } from '@chakra-ui/react';
import React from 'react';
import { TBodyTr } from './components/TBodyTr';
import { Tab } from '@/utils/types/horse';
import { LoadingSkeleton } from '../LoadingSkeleton/LoadingSkeleton';

interface Props {
  tab: Tab[];
  isLoaded: boolean;
  type: string;
}

export const Table = ({ tab, isLoaded, type }: Props) => {
  return (
    <TableContainer m={0}>
      <TableUI variant="striped" colorScheme="table" pt={0} m={0}>
        <Thead pt={0}>
          <Tr>
            <Th boxSize={{ base: 20, sm: 50 }}>Date</Th>
            <Th>Ttile</Th>
            <Th>Description</Th>
            <Th>Executed by</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tab.length > 0 &&
            tab.map((item) => {
              return <TBodyTr key={item.id} item={item} type={type} />;
            })}
        </Tbody>
      </TableUI>
      {isLoaded && <LoadingSkeleton />}
    </TableContainer>
  );
};
