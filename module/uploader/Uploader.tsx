import React from 'react';
import { FileInput } from '@/shared/inputs/FileInput';

interface UploaderProps {
  readonly name: string;
  readonly label?: string;
  readonly onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Uploader = ({ name, label = '', onImageChange }: UploaderProps) => {
  return <FileInput label={label} name={name} onImageChange={onImageChange} />;
};
