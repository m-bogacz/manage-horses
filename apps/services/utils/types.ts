import { HorseData } from '@/utils/types';
import { Horse } from '@prisma/client';

export type CreateParentHorseType = Pick<HorseData, 'name' | 'createAsParent'>;

export type UpsertParentHorseToDbType = ({ name, createAsParent = true }: CreateParentHorseType) => Promise<Horse>;
