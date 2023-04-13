import React from 'react';
import { FormTemplateDetails } from '../../template/FormTemplateDetails';

const options = [
  { value: 'klacz1', label: 'klacz1' },
  { value: 'klacz12', label: 'klacz12' },
  { value: 'klacz3', label: 'klacz3' },
];

export const DamInformation = () => {
  return <FormTemplateDetails name="mother" options={options} label="Add mother horse" />;
};
