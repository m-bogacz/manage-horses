import React from 'react';
import { FileInput } from '@/shared/inputs/FileInput';

interface UploaderProps {
  name: string;
  label?: string;
}

export const Uploader = ({ name, label = '' }: UploaderProps) => {
  return <FileInput label={label} name={name} />;
};
