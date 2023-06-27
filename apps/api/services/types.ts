import { SlideEntity } from '@/utils/types';

export type SideBarItemHorseEntity = {
  readonly name: string;
  readonly profileImageUrl: string;
};

export type SideBarListHorseEntity = SideBarItemHorseEntity[];

export interface PhotosEntity {
  readonly data: SlideEntity;
}

export interface AddPhotoEntity {
  readonly src: string;
  readonly alt: string;
  readonly name: string;
}
