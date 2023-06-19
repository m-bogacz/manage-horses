import { Step, useSteps } from '@/hooks/useSteps';
import { createSafeContext } from '@/lib/createSafeContext';
import { ReactNode } from 'react';
import { steps } from '../components/form/utils/helpers';

type StepNames = (typeof steps)[number]['name'];

interface ReturnValueType {
  currentStepIndex: number;
  currentStep: Step<StepNames>;
  handlePrevStep: () => void;
  handleNextStep: () => void;
  stepCount: number[];
}

const [useAddHorseFormContext, AddHorseFormContextProvider] = createSafeContext<ReturnValueType>();

const AddHorseFormProvider = ({ children }: { readonly children: ReactNode }) => {
  const { currentStep, currentStepIndex, handlePrevStep, handleNextStep, stepCount } = useSteps(steps);

  const value = { currentStep, currentStepIndex, stepCount, handlePrevStep, handleNextStep };

  return <AddHorseFormContextProvider value={value}>{children}</AddHorseFormContextProvider>;
};

export { useAddHorseFormContext, AddHorseFormProvider };
