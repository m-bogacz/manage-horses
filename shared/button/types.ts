export interface ButtonPropsShared {
  onClick: () => void;
  content?: string;
}

type FormButtonSubmit = {
  type: 'submit';
  text?: string;
  isDisabled?: boolean;
};

type FormButton = {
  onClick: () => void;
  type?: 'button';
  text?: string;
  children?: React.ReactNode;
};

export type FormButtonProps = FormButtonSubmit | FormButton;
