import { useRef } from 'react';
import { FormControl, FormLabel, VisuallyHidden, Input, Button } from '@chakra-ui/react';
import { Controller, useFormContext } from 'react-hook-form';

interface FileInputProps {
  name: string;
  label: string;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FileInput = ({ label, name, onImageChange }: FileInputProps) => {
  const { control } = useFormContext();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    fileInputRef?.current?.click();
  };

  return (
    <FormControl>
      <FormLabel fontSize={'2xl'} htmlFor={name}>
        {label}
      </FormLabel>
      <VisuallyHidden>
        <Controller
          name={name}
          control={control}
          render={() => {
            return <Input type="file" onChange={onImageChange} ref={fileInputRef} />;
          }}
        />
      </VisuallyHidden>
      <Button onClick={handleButtonClick}>Select file</Button>
    </FormControl>
  );
};
