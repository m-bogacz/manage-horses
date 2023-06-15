import { TabsSectionEntity } from './types';

export const TAB_SECTIONS = [
  {
    name: 'news',
    active: true,
  },
  {
    name: 'veterinarian',
    active: false,
  },
  {
    name: 'farrier',
    active: false,
  },
  {
    name: 'geneology',
    active: false,
  },
  {
    name: 'gallery',
    active: false,
  },
] satisfies TabsSectionEntity;
