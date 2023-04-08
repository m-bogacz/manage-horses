import { TableContainer, Thead, Tr, Th, Tbody, Table as TableUI } from '@chakra-ui/react';
import React from 'react';
import { TBodyTr } from './components/TBodyTr';

export const Table = () => {
  return (
    <TableContainer m={0}>
      <TableUI variant="striped" colorScheme="table" m={0}>
        <Thead pt={0}>
          <Tr>
            <Th boxSize={{ base: 20, sm: 50 }}>Data</Th>
            <Th>Description</Th>
          </Tr>
        </Thead>
        <Tbody>
          <TBodyTr date="27.02.2023" describe="In Warsaw Clicnic with foal" />
          <TBodyTr date="27.02.2023" describe="In Warsaw Clicnic with foal" />
          <TBodyTr date="27.02.2023" describe="Concordia went to the clinic with a foal" />
        </Tbody>
      </TableUI>
    </TableContainer>
  );
};
