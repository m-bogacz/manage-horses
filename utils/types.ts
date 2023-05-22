export interface HorseEntity {
  name: string;
  birthday: Date | null;
  sex: TypeSex;
  mother: customParent;
  father: customParent;
  profileImage: string;
  profileImageUrl: string;
  // parent: ParentEntity;
  images: SlideEntity[] | [];
  place: string;
  children: string[] | null;

  news: Tab[];
  veterinarian: Tab[];
  farrier: Tab[];
}

export type OptionType = {
  value: string;
  label: string;
};

type customParent = OptionType;

export interface Tab {
  id: number;
  date: Date;
  title: string;
  description: string;
}

export interface HorsesEntity {
  horses: HorseEntity[];
}

export interface SlideEntity {
  id: number;
  createdAt: Date;
  src: string;
  alt: string;
}

export interface ParentEntity {
  mother: {
    name: string;
    sex: TypeSex;
    grandMother: {
      sex: TypeSex;
      name: TypeSex;
      mother: string;
      father: string;
    };
    grandfather: {
      sex: TypeSex;
      name: string;
      mother: string;
      father: string;
    };
  };
  father: {
    sex: TypeSex;
    name: string;
    grandMother: {
      sex: TypeSex;
      name: string;
      mother: string;
      father: string;
    };
    grandfather: {
      sex: TypeSex;
      name: string;
      mother: string;
      father: string;
    };
  };
}
type TypeSex = 'mare' | 'gelding' | 'stallion';

export type SectionNameType = 'Geneology' | 'News' | 'Veterinarian' | 'Farrier' | 'Gallery';

export type TabSectionType = {
  name: SectionNameType;
  active: boolean;
};
