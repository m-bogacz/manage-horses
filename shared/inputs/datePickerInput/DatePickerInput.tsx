import React, { forwardRef, useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import { CalendarIcon } from '@chakra-ui/icons';

export const DatePickerInput = ({ name, label = '' }: { name: string; label?: string }) => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const date = watch(name);

  console.log(date);

  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label ? label : ''}</FormLabel>
      <InputGroup className="light-theme">
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              selected={value}
              onChange={onChange}
              customInput={<CustomInput ref={inputRef} placeholder="datum of birthday" />}
              onCalendarOpen={() => inputRef.current && inputRef.current?.blur()}
            />
          )}
        />
        <InputRightElement>
          <CalendarIcon fontSize="sm" color={'step.200'} />
        </InputRightElement>
      </InputGroup>
      {errors[name] && <FormErrorMessage>{errors?.[name]?.message?.toString()}</FormErrorMessage>}
    </FormControl>
  );
};

const customDateInput = ({ value, onClick, onChange, placeholder }: any, ref: any) => {
  return <Input ref={ref} onClick={onClick} onChange={onChange} placeholder={placeholder} value={value} />;
};
customDateInput.displayName = 'DateInput';

const CustomInput = forwardRef(customDateInput);
