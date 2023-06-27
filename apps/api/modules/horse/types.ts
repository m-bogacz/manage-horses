import { HorseData } from '@/utils/types';
import { Horse } from '@prisma/client';

export type CreateParentHorseType = Pick<HorseData, 'name' | 'gender' | 'createAsParent'>;

export type UpsertParentHorseToDbType = ({
  name,
  gender,
  createAsParent = true,
}: CreateParentHorseType) => Promise<Horse>;
