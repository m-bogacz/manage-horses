import { TableContainer, Thead, Tr, Th, Tbody, Table as TableUI } from '@chakra-ui/react';
import React from 'react';
import { TBodyTr } from './components/TBodyTr';

export const Table = () => {
  return (
    <TableContainer>
      <TableUI border={'1px Highlight'} variant="striped" colorScheme="table">
        <Thead pt={0}>
          <Tr>
            <Th boxSize={50}>Data</Th>
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
