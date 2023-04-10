import { createSafeContext } from '@/lib/createSafeContext';
import { ReactNode } from 'react';
import { useSteps } from '../useMultiStepForm';

interface MultiStepFormProviderProps {
  readonly children: ReactNode;
}

interface ReturnValueType {
  active: number;
  handlePrev: () => void;
  handleNext: () => void;
}

const [useMultiStepFormContext, MultiStepFormContextProvider] = createSafeContext<ReturnValueType>();

const MultiStepFormProvider = ({ children }: MultiStepFormProviderProps) => {
  const { active, handlePrev, handleNext } = useSteps();

  const value = { active, handlePrev, handleNext };

  return <MultiStepFormContextProvider value={value}>{children}</MultiStepFormContextProvider>;
};

export { useMultiStepFormContext, MultiStepFormProvider };
