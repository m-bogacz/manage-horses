export interface HorseData {
  id: number;
  name: string;
  birthday: Date;
  sex: TypeSex;
  motherName: string;
  fatherName: string;
  profileImage: string;
  profileImageUrl: string;
  images: SlideEntity[] | [];
  place: string;
  news: Tab[];
  veterinarian: Tab[];
  farrier: Tab[];
  createAsParent: boolean;
}

export interface HorseDataContext {
  id: number;
  name: string;
  birthday: Date;
  sex: TypeSex;
  motherName: string;
  fatherName: string;
  profileImage: string;
  profileImageUrl: string;
  mother: HorseDataContext;
  father: HorseDataContext;
  images: SlideEntity[] | [];
  place: string;
  news: News;
  veterinarian: Veterinarian;
  farrier: Farrier;
  createAsParent: boolean;
}

export type OptionType = {
  value: string;
  label: string;
};

export type customParent = OptionType;

export interface Tab {
  id: number;
  date: Date;
  title: string;
  description: string;
  executedBy: string;
  horseName: string;
}

export interface News {
  type: 'news';
  news: Tab[];
}
export interface Veterinarian {
  type: 'veterinarian';
  veterinarian: Tab[];
}
export interface Farrier {
  type: 'farrier';
  farrier: Tab[];
}

export interface SlideEntity {
  id: number;
  createdAt: Date;
  src: string;
  alt: string;
}

export interface ParentEntity {
  sex: TypeSex;
  name: customParent | string;
  grandMotherName: string;
  grandFatherName: string;
}

export type TypeSex = 'mare' | 'gelding' | 'stallion';

export type SectionNameType = 'geneology' | 'news' | 'veterinarian' | 'farrier' | 'gallery';

export const SECTION_NAME = {
  news: 'news',
  veterinarian: 'veterinarian',
  farrier: 'farrier',
  geneology: 'geneology',
  gallery: 'gallery',
};

export type TabSectionType = {
  name: SectionNameType;
  active: boolean;
};
