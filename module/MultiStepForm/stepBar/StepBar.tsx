import React from 'react';
import { Divider, Flex } from '@chakra-ui/react';
import { useMultiStepFormContext } from '../context/MultiStepFormContext';
import { Step } from './Step';

export const StepBar = () => {
  const { active } = useMultiStepFormContext();

  return (
    <>
      <Flex align="baseline" width={'100%'}>
        <Step step={1} active={active} label="DETAILS" />
        <Divider size={'lg'} borderColor={active >= 2 ? 'step.activeText' : 'step.100'} />
        <Step step={2} active={active} label={'MOTHER'} />
        <Divider size={'lg'} borderColor={active >= 3 ? 'step.activeText' : 'step.100'} />
        <Step step={3} active={active} label={'FATHER'} />
      </Flex>
    </>
  );
};
