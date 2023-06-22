export interface HorseData {
  id: number;
  name: string;
  birthday: Date | null;
  sex: TypeSex;
  mother: HorseData;
  father: HorseData;
  profileImage: string;
  profileImageUrl: string;
  images: SlideEntity[] | [];
  place: string;
  news: News;
  veterinarian: Veterinarian;
  farrier: Farrier;
  createAsParent?: boolean;
}

// export type HorseData = PartialExceptFor<HorseDataRequired, 'name'>;

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

export type PartialExceptFor<T, TRequired extends keyof T> = Partial<T> & Pick<T, TRequired>;
