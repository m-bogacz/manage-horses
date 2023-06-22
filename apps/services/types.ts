import { ParentEntity, SlideEntity, Tab, TypeSex } from '@/utils/types';

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

export interface HorseEntity {
  name: string;
  birthday: Date | null;
  sex: TypeSex;
  mother: ParentEntity;
  father: ParentEntity;
  profileImage: string;
  profileImageUrl: string;

  images: SlideEntity[] | [];
  place: string;
  children: string[] | null;

  news: Tab[];
  veterinarian: Tab[];
  farrier: Tab[];
}

export interface HorsesEntity {
  horses: HorseEntity[];
}
