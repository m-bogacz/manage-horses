import { SectionNameType, TabSectionType } from '@/utils/types';
import { useState } from 'react';
import { TAB_SECTIONS } from '../utils/const';
import { TabsSectionEntity } from '../utils/types';

export const useTabMenu = () => {
  const [tabSections, setTabSections] = useState<TabsSectionEntity>(TAB_SECTIONS);

  const activeSectionIndex = tabSections.findIndex((section) => section.active);
  const activeSection = tabSections[activeSectionIndex];

  const handleSetActiveSection = (section: TabSectionType, active: boolean) => {
    return {
      ...section,
      active: active,
    };
  };

  const changeActiveSection = (index: number) => {
    const activeSection = tabSections.find((_, i) => index === i);
    setTabSections((prevState) =>
      prevState.map((section) => {
        if (activeSection?.name !== section.name) {
          return handleSetActiveSection(section, false);
        }
        return handleSetActiveSection(section, true);
      })
    );
  };

  return { tabSections, activeSectionIndex, changeActiveSection, activeSection };
};
