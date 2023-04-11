import React from 'react';
import { Divider, Flex } from '@chakra-ui/react';
import { useMultiStepFormContext } from '../context/MultiStepFormContext';
import { Step } from './Step';

export const StepBar = () => {
  const { activeStep } = useMultiStepFormContext();

  return (
    <>
      <Flex align="baseline" width={'100%'}>
        <Step step={1} active={activeStep} label="DETAILS" />
        <Divider size={'lg'} borderColor={activeStep >= 3 ? 'step.activeText' : 'step.100'} />
        <Step step={2} active={activeStep} label={'MOTHER'} />
        <Divider size={'lg'} borderColor={activeStep >= 3 ? 'step.activeText' : 'step.100'} />
        <Step step={3} active={activeStep} label={'FATHER'} />
      </Flex>
    </>
  );
};
