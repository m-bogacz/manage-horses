import { TabPanels, TabPanel, Box } from '@chakra-ui/react';
import { Farrier } from './farrier/Farrier';
import { Gallery } from './gallery/Gallery';
import { Geneology } from './geneology/Geneology';
import { News } from './news/News';
import { Veterinarian } from './veterinarian/Veterinarian';

export const SwitchTabPanels = () => {
  const TAB_PANEL_COMPONENTS = [News, Veterinarian, Farrier, Geneology, Gallery];

  return (
    <Box border={'1px solid #E2E8F0'} borderRadius={12} mt={2} pb={4}>
      <TabPanels>
        {TAB_PANEL_COMPONENTS.map((Item, i) => {
          return (
            <TabPanel key={i}>
              <Item />
            </TabPanel>
          );
        })}
      </TabPanels>
    </Box>
  );
};
