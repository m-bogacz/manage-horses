import { SlideEntity } from '@/utils/types';

export type Horse = {
  readonly name: string;
  readonly profileImageUrl: string;
};

export interface SideBarListEntity {
  readonly data: Horse[];
}

export interface PhotosEntity {
  readonly data: SlideEntity;
}

export interface AddPhotoEntity {
  readonly src: string;
  readonly alt: string;
  readonly name: string;
}
