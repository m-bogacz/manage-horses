import { customParent, GenderType } from '@/utils/types';

export interface FormDataEntity {
  readonly name: string;
  readonly birthday: Date | null;
  readonly father: customParent | string;
  readonly mother: customParent | string;
  readonly images: string[];
  readonly place: string;
  readonly profileImageUrl: string;
  profileImage: string;
  readonly gender: GenderType;
}
