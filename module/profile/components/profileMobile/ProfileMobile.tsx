import React from 'react';
import { useHorseContext } from '@/apps/context/horseContext/HorseContext';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import { Profile } from '../../Profile';

export const ProfileMobile = () => {
  const horse = useHorseContext();

  if (!horse) return null;

  return (
    <Accordion allowToggle>
      <AccordionItem border="none">
        <AccordionButton _expanded={{ bg: 'table.100' }} border={'1px solid #E2E8F0'} borderRadius={12}>
          <Box as="span" flex="1" textAlign="left">
            {horse.name}
          </Box>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel pb={4}>
          <Profile />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
