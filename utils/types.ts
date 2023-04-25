export interface HorseEntity {
  name: string;
  birthday: string;
  sex: TypeSex;
  mother: customParent;
  father: customParent;
  profileImage: string | null;
  profileImageUrl: string;
  // parent: ParentEntity;
  images: SlideEntity[] | null;
  place: string;
  children: string[] | null;
  tabs: {
    News: Tab[];
    Vet: Tab[];
    Blacksmith: Tab[];
  };
}

export type OptionType = {
  value: string;
  label: string;
};

type customParent = OptionType;

interface Tab {
  id: number;
  data: string;
  title: string;
  description: string;
}

export interface HorsesEntity {
  horses: HorseEntity[];
}

export interface SlideEntity {
  src: string;
  label: string;
  default: boolean;
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
