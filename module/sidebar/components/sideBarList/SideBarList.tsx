import { getDefaultphoto } from '@/utils/imageLoader/getDefualtPhoto';
import { HorseEntity } from '@/utils/types';
import { List } from '@chakra-ui/react';
import React from 'react';
import { SideBarItem } from './SideBarItem';

interface SideBarListProps {
  horses: HorseEntity[];
}

export const SideBarList = ({ horses }: SideBarListProps) => {
  return (
    <List>
      {horses.map((horse) => (
        <SideBarItem
          key={horse.name}
          name={horse.name}
          src={horse.profileImageUrl ? horse.profileImageUrl : getDefaultphoto(horse.images)}
        />
      ))}
    </List>
  );
};
