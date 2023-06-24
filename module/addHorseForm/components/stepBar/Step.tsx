import { Circle, Divider, Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface StepProps {
  readonly step: number;
  readonly currentStepIndex: number;
  readonly label: string;
  readonly isLast?: boolean;
}

export const Step = ({ step, currentStepIndex, label, isLast }: StepProps) => {
  return (
    <Flex align="baseline" width={'100%'}>
      <Flex flexDir={'column'} align="center">
        <Circle
          size="40px"
          bg={currentStepIndex >= step ? 'step.activeText' : 'step.100'}
          color={currentStepIndex >= step ? 'step.active' : 'step.200'}
        >
          {step}
        </Circle>
        <Text>{label}</Text>
      </Flex>
      {!isLast ? <Divider size={'lg'} borderColor={currentStepIndex > step ? 'step.activeText' : 'step.100'} /> : null}
    </Flex>
  );
};
