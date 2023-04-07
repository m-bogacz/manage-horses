import { Box, Flex, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';

import { SwitchTab } from './switchTab/SwitchTab';
import { useTabMenu } from './useTabMenu';

export const TabMenu = () => {
  const { tabSections, activeSectionIndex, activeSection, changeActiveSection } = useTabMenu();

  console.log(activeSection);

  return (
    <Flex flexGrow={6} as={'section'}>
      <Tabs
        index={activeSectionIndex}
        onChange={changeActiveSection}
        size={'lg'}
        position={'relative'}
        variant="unstyled"
        paddingTop={10}
        w={'100%'}
      >
        <TabList>
          {tabSections.map((section) => {
            return (
              <Tab fontSize={'sm'} fontWeight="medium" key={section.name}>
                {section.name}
              </Tab>
            );
          })}
        </TabList>
        <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />

        <Box border={'1px solid #E2E8F0'} borderRadius={12} m={2} pb={4}>
          <TabPanels>
            <SwitchTab active={activeSection} />
          </TabPanels>
        </Box>
      </Tabs>
    </Flex>
  );
};
