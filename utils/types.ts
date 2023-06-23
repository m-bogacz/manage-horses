export interface HorseData {
  id: number;
  name: string;
  birthday: Date | null;
  gender: GenderType;
  mother: ParentHorseData;
  father: ParentHorseData;
  profileImage?: string;
  profileImageUrl?: string;
  images: SlideEntity[] | [];
  place: string;
  news: VariantTabType;
  veterinarian: VariantTabType;
  farrier: VariantTabType;
  createAsParent?: boolean;
}

export interface ParentHorseData extends HorseData {
  motherName: string;
  fatherName: string;
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

export interface VariantTabType {
  type: 'news' | 'veterinarian' | 'farrier';
  id: number;
  horseName: string;
  tabs: Tab[];
}

export interface SlideEntity {
  id: number;
  createdAt: Date;
  src: string;
  alt: string;
}

export type GenderType = 'mare' | 'gelding' | 'stallion';

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
