import { Step, useSteps } from '@/hooks/useSteps';
import { createSafeContext } from '@/lib/createSafeContext';
import { ReactNode } from 'react';
import { steps } from '../components/form/utils/helpers';

export type StepNames = (typeof steps)[number]['name'];

interface AddHorseFormContextType {
  readonly currentStepIndex: number;
  readonly currentStep: Step<StepNames>;
  readonly handlePrevStep: () => void;
  readonly handleNextStep: () => void;
  readonly stepCount: number[];
}

const [useAddHorseFormContext, AddHorseFormContextProvider] = createSafeContext<AddHorseFormContextType>();

const AddHorseFormProvider = ({ children }: { readonly children: ReactNode }) => {
  const { currentStep, currentStepIndex, handlePrevStep, handleNextStep, stepCount } = useSteps(steps);

  const value = { currentStep, currentStepIndex, stepCount, handlePrevStep, handleNextStep };

  return <AddHorseFormContextProvider value={value}>{children}</AddHorseFormContextProvider>;
};

export { useAddHorseFormContext, AddHorseFormProvider };
