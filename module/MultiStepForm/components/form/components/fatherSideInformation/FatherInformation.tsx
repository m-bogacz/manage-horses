import React from 'react';
import { FormTemplateDetails } from '../../../template/FormTemplateDetails';

const options = {
  parent: [
    { value: 'klacz1', label: 'klacz1' },
    { value: 'klacz3', label: 'klacz3' },
  ],
  grandMother: [
    { value: 'kuc1', label: 'kuc' },
    { value: 'kuc3', label: 'kuc3' },
  ],
  grandFather: [
    { value: 'źrebie1', label: 'źrebie1' },
    { value: 'źrebie3', label: 'źrebie3' },
  ],
};

export const FatherSideInformation = () => {
  return <FormTemplateDetails familySide="father" options={options} />;
};
