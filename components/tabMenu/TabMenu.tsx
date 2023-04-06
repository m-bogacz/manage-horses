import { Box, Flex, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';
import { TAB_SECTIONS } from './const';

export const TabMenu = () => {
  const activeIndex = TAB_SECTIONS.findIndex((option) => option.active);

  return (
    <Flex flexGrow={5} as={'section'} minWidth={'490px'}>
      <Tabs index={activeIndex} size={'md'} position={'relative'} variant="unstyled" paddingTop={10}>
        <TabList>
          {TAB_SECTIONS.map((section) => {
            return <Tab key={section.name}>{section.name}</Tab>;
          })}
        </TabList>
        <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>four!</p>
          </TabPanel>
          <TabPanel>
            <p>five!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
