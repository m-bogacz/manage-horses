import { Tr, Td } from '@chakra-ui/react';
import React from 'react';

interface TBodyTrProps {
  date: string;
  describe: string;
}

export const TBodyTr = ({ date, describe }: TBodyTrProps) => {
  return (
    <Tr>
      <Td pt={3} pb={3}>
        {date}
      </Td>
      <Td pt={3} pb={3}>
        {describe}
      </Td>
    </Tr>
  );
};
