import React from 'react';
import { FormTemplateDetails } from '../../../template/FormTemplateDetails';

const options = {
  parent: [
    { value: 'klacz1', label: 'klacz1' },
    { value: 'klacz3', label: 'klacz3' },
  ],
};

export const FatherSideInformation = () => {
  return <FormTemplateDetails familySide="father" options={options} />;
};
