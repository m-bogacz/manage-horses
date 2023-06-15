import { TabSectionType } from '@/utils/types';
import { TabPanels, TabPanel, Box } from '@chakra-ui/react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const News = dynamic(() => import('./news/News').then((mod) => mod.News));
const Veterinarian = dynamic(() => import('./veterinarian/Veterinarian').then((mod) => mod.Veterinarian));
const Farrier = dynamic(() => import('./farrier/Farrier').then((mod) => mod.Farrier));
const Geneology = dynamic(() => import('./geneology/Geneology').then((mod) => mod.Geneology));
const Gallery = dynamic(() => import('./gallery/Gallery').then((mod) => mod.Gallery));

export const SwitchTabPanels = () => {
  const router = useRouter();
  const tab = router.query.tab as TabSectionType['name'];
  let component;

  switch (tab) {
    case 'news':
      return (component = <News />);
    case 'veterinarian':
      return (component = <Veterinarian />);
    case 'farrier':
      return (component = <Farrier />);
    case 'geneology':
      return (component = <Geneology />);
    case 'gallery':
      return (component = <Gallery />);

    default:
      break;
  }

  return (
    <Box border={'1px solid #E2E8F0'} borderRadius={12} mt={2} pb={4}>
      <TabPanels>
        <TabPanel>{component}</TabPanel>
      </TabPanels>
    </Box>
  );
};
