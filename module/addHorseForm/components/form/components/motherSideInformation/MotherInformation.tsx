import React from 'react';
import { FormTemplateDetails } from '../../../template/FormTemplateDetails';

const options = {
  parent: [
    { value: 'klacz1', label: 'klacz1' },
    { value: 'klacz12', label: 'klacz12' },
    { value: 'klacz3', label: 'klacz3' },
  ],
};

export const MotherSideInformation = () => {
  return <FormTemplateDetails familySide="mother" options={options} />;
};
