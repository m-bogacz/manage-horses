import { Tr, Td } from '@chakra-ui/react';
import React from 'react';

interface TBodyTrProps {
  date: string;
  describe: string;
}

export const TBodyTr = ({ date, describe }: TBodyTrProps) => {
  return (
    <Tr>
      <Td pt={{ base: 2, sm: 3 }} pb={{ base: 2, sm: 3 }}>
        {date}
      </Td>
      <Td pt={{ base: 2, sm: 3 }} pb={{ base: 2, sm: 3 }}>
        {describe}
      </Td>
    </Tr>
  );
};
