export interface HorseData {
  readonly id: number;
  readonly name: string;
  readonly birthday: Date | null;
  readonly gender: GenderType;
  readonly mother: ParentHorseData;
  readonly father: ParentHorseData;
  readonly profileImage?: string;
  readonly profileImageUrl?: string;
  readonly images: SlideEntity[] | [];
  readonly place: string;
  readonly news: VariantTabType;
  readonly veterinarian: VariantTabType;
  readonly farrier: VariantTabType;
  readonly createAsParent?: boolean;
}

export interface ParentHorseData extends HorseData {
  readonly motherName: string;
  readonly fatherName: string;
}

export type OptionType = {
  readonly value: string;
  readonly label: string;
};

export type customParent = OptionType;

export interface Tab {
  readonly id: number;
  readonly date: Date;
  readonly title: string;
  readonly description: string;
  readonly executedBy: string;
  readonly horseName: string;
}

export interface VariantTabType {
  readonly type: 'news' | 'veterinarian' | 'farrier';
  readonly id: number;
  readonly horseName: string;
  readonly tabs: Tab[];
}

export interface SlideEntity {
  readonly id: number;
  readonly createdAt: Date;
  readonly src: string;
  readonly alt: string;
}

export type GenderType = 'mare' | 'gelding' | 'stallion';

export type SectionNameType = 'geneology' | 'news' | 'veterinarian' | 'farrier' | 'gallery';

export const SECTION_NAME = {
  news: 'news',
  veterinarian: 'veterinarian',
  farrier: 'farrier',
  geneology: 'geneology',
  gallery: 'gallery',
} as const;

export type TabSectionType = {
  readonly name: SectionNameType;
  readonly active: boolean;
};
