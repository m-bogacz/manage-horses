import { TabsSectionEntity } from './types';

export const TAB_SECTIONS = [
  {
    name: 'News',
    active: false,
  },
  {
    name: 'Veterinarian',
    active: true,
  },
  {
    name: 'Blacksmith',
    active: false,
  },
  {
    name: 'Geneology Tree',
    active: false,
  },
  {
    name: 'Gallery',
    active: false,
  },
] satisfies TabsSectionEntity;
