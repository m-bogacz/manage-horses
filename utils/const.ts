import { TabsSectionEntity } from './types';

export const DRAWER = {
  SideBar: {
    WIDTH: 235,
  },
};

export const TAB_SECTIONS = [
  {
    name: 'News',
    active: true,
  },
  {
    name: 'Vet',
    active: false,
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
