import { TabsSectionEntity } from './types';

export const TAB_SECTIONS = [
  {
    name: 'News',
    active: true,
  },
  {
    name: 'Veterinarian',
    active: false,
  },
  {
    name: 'Farrier',
    active: false,
  },
  {
    name: 'Geneology',
    active: false,
  },
  {
    name: 'Gallery',
    active: false,
  },
] satisfies TabsSectionEntity;
