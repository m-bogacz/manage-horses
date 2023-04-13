import React from 'react';
import { FormTemplateDetails } from '../../template/FormTemplateDetails';

const options = [
  { value: 'father', label: 'father' },
  { value: 'father12', label: 'father12' },
  { value: 'father1222131', label: 'father1222131' },
];

export const SireInformation = () => {
  return <FormTemplateDetails name="father" options={options} label="Add father horse" />;
};
