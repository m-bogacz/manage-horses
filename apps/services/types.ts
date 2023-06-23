import { SlideEntity } from '@/utils/types';

export type Horse = {
  name: string;
  profileImageUrl: string;
};

export interface SideBarListEntity {
  data: Horse[];
}

export interface PhotosEntity {
  data: SlideEntity;
}

export interface AddPhotoEntity {
  src: string;
  alt: string;
  name: string;
}
