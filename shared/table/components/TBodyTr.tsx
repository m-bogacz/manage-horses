import React from 'react';
import { setFormatDate } from '@/lib/dateHelper';
import { Tr, Td } from '@chakra-ui/react';

interface TBodyTrProps {
  date: Date;
  describe: string;
}

export const TBodyTr = ({ date, describe }: TBodyTrProps) => {
  return (
    <Tr>
      <Td pt={{ base: 2, sm: 3 }} pb={{ base: 2, sm: 3 }}>
        {setFormatDate(date)}
      </Td>
      <Td pt={{ base: 2, sm: 3 }} pb={{ base: 2, sm: 3 }}>
        {describe}
      </Td>
    </Tr>
  );
};
