import { getDefaultphoto } from '@/utils/imageLoader/getDefualtPhoto';
import { HorseEntity } from '@/utils/types';
import React from 'react';
import { SideBarItem } from './SideBarItem';
interface SideBarListProps {
  horses: HorseEntity[];
}

export const SideBarList = ({ horses }: SideBarListProps) => {
  return (
    <>
      {horses.map((horse) => (
        <SideBarItem key={horse.name} name={horse.name} src={getDefaultphoto(horse.images)} />
      ))}
    </>
  );
};
