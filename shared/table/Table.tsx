import { TableContainer, Thead, Tr, Th, Tbody, Table as TableUI, Skeleton } from '@chakra-ui/react';
import React from 'react';
import { TBodyTr } from './components/TBodyTr';
import { Tab } from '@/utils/types';
import { LoadingSkeleton } from '../LoadingSkeleton/LoadingSkeleton';

export const Table = ({ tab, isLoaded }: { tab: Tab[]; isLoaded: boolean }) => {
  return (
    <TableContainer m={0}>
      <TableUI variant="striped" colorScheme="table" m={0}>
        <Thead pt={0}>
          <Tr>
            <Th boxSize={{ base: 20, sm: 50 }}>Date</Th>
            <Th>Description</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tab.map((item) => {
            return <TBodyTr key={item.id} date={item.date} describe={item.title} />;
          })}
        </Tbody>
      </TableUI>
      {isLoaded && <LoadingSkeleton />}
    </TableContainer>
  );
};
