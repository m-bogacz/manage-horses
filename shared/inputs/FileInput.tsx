import { useRef, ChangeEvent } from 'react';
import { FormControl, FormLabel, VisuallyHidden, Input, Button } from '@chakra-ui/react';
import { Controller, useFormContext } from 'react-hook-form';

interface FileInputProps {
  name: string;
  label: string;
}

export const FileInput = ({ label, name }: FileInputProps) => {
  const { control, setValue } = useFormContext();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    fileInputRef?.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(name, event.target.files);
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
            return <Input type="file" onChange={handleFileChange} ref={fileInputRef} />;
          }}
        />
      </VisuallyHidden>
      <Button onClick={handleButtonClick}>Select file</Button>
    </FormControl>
  );
};
