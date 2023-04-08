import { Box, Flex, Tab, TabIndicator, TabList, Tabs } from '@chakra-ui/react';
import React from 'react';
import { ProfileMobile } from '../profile/ProfileMobile';
import { SwitchTabPanels } from './switchTab/SwitchTabPanels';
import { useTabMenu } from './useTabMenu';

export const TabMenu = () => {
  const { tabSections, activeSectionIndex, activeSection, changeActiveSection } = useTabMenu();

  return (
    <Flex as={'section'} flexGrow={3} ml={5} mr={5}>
      <Tabs
        index={activeSectionIndex}
        onChange={changeActiveSection}
        size={'sm'}
        position={'relative'}
        variant="unstyled"
        paddingTop={10}
        ml={{ base: 1, sm: 5, md: 2 }}
        mr={{ base: 1, sm: 5, md: 2 }}
        w={{ base: '95vw', md: '100%' }}
      >
        <TabList>
          {tabSections.map((section) => {
            return (
              <Tab p={3} fontSize={'sm'} fontWeight="medium" key={section.name}>
                {section.name}
              </Tab>
            );
          })}
        </TabList>
        <TabIndicator mt="-1px" height="2px" bg="blue.500" borderRadius="1px" />

        <Box display={{ base: 'block', md: 'none' }} pt={5}>
          <ProfileMobile />
        </Box>
        <SwitchTabPanels />
      </Tabs>
    </Flex>
  );
};
