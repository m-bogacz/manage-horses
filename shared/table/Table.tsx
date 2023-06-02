import { TableContainer, Thead, Tr, Th, Tbody, Table as TableUI } from '@chakra-ui/react';
import React from 'react';
import { TBodyTr } from './components/TBodyTr';
import { Tab } from '@/utils/types';
import { LoadingSkeleton } from '../LoadingSkeleton/LoadingSkeleton';
import { prisma } from '@/lib/prisma';
('use server');
interface Props {
  tab: Tab[];
  isLoaded: boolean;
  tabName: string;
  horseName: string;
}

// const handleRemove = async (id: any) => {
//   'use server';
//   const newsTabs = await prisma.newsTab.delete({
//     where: {
//       id,
//     },
//   });
// };

export const Table = ({ tab, isLoaded, tabName, horseName }: Props) => {
  return (
    <>
      <TableContainer m={0}>
        <TableUI variant="striped" colorScheme="table" m={0}>
          <Thead pt={0}>
            <Tr>
              <Th boxSize={{ base: 20, sm: 50 }}>Date</Th>
              <Th>Ttile</Th>
              <Th>Description</Th>
              <Th>Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tab.map((item) => {
              return <TBodyTr key={item.id} item={item} tabName={tabName} horseName={horseName} />;
            })}
          </Tbody>
        </TableUI>
        {isLoaded && <LoadingSkeleton />}
      </TableContainer>
    </>
  );
};
