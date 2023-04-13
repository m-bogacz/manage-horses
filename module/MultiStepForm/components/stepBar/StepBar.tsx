import React from 'react';
import { Flex, HStack } from '@chakra-ui/react';
import { Step } from './Step';
import { useMultiStepFormContext } from '../../context/MultiStepFormContext';

const LABELS = ['DETAILS', 'MOTHER ', 'FATHER', 'SUMMARY'];

export const StepBar = () => {
  const { currentStepIndex, stepCount } = useMultiStepFormContext();

  return (
    <Flex alignItems="flex-start" justifyContent="space-between">
      {stepCount.map((num, index) => {
        return (
          <Step
            key={num}
            step={num}
            currentStepIndex={currentStepIndex + 1}
            label={LABELS[index]}
            isLast={stepCount.length === num}
          />
        );
      })}
    </Flex>
  );
};
