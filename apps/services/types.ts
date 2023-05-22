import { SlideEntity } from '@prisma/client';

export type horse = {
  name: string;
  profileImageUrl: string;
};

export interface SideBarListEntity {
  data: horse[];
}

export interface PhotosEntity {
  data: SlideEntity;
}

export interface AddPhotoEntity {
  src: string;
  alt: string;
  name: string;
}
