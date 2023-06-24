import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { ChangeEventHandler } from 'react';

interface SearchInputProps {
  readonly onChange: (query: string) => void;
}

export const SearchInput = ({ onChange }: SearchInputProps) => {
  return (
    <FormControl>
      <FormLabel htmlFor="search" />
      <Input name="search" onChange={(e) => onChange(e.target.value)} placeholder="Search for a horse by name" />
    </FormControl>
  );
};
