import React from 'react';
import { FileInput } from '@/shared/inputs/FileInput';

interface UploaderProps {
  name: string;
  label?: string;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Uploader = ({ name, label = '', onImageChange }: UploaderProps) => {
  return <FileInput label={label} name={name} onImageChange={onImageChange} />;
};
