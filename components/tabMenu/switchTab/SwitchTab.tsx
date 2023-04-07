import { Table } from '@/shared/table/Table';
import { TabSectionType } from '@/utils/types';
import { TabPanel, TabPanels } from '@chakra-ui/react';
import { Farrier } from './farrier/Farrier';
import { News } from './news/News';
import { Veterinarian } from './veterinarian/Veterinarian';

interface SwitchTabProps {
  active: TabSectionType;
}

export const SwitchTab = ({ active }: SwitchTabProps) => {
  console.log(active.name);

  const switchTab = () => {
    switch (active.name) {
      case 'News':
        return <News />;
      case 'Veterinarian':
        return <Veterinarian />;
      case 'Farrier':
        return <Farrier />;

      default:
        return <Table />;
    }
  };

  return <>{switchTab()}</>;
};
