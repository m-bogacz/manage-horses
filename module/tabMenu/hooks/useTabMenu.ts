import { TabSectionType } from '@/utils/types/horse';
import { useState } from 'react';
import { TAB_SECTIONS } from '../utils/const';
import { TabsSectionEntity } from '../utils/types';
import { useRouter } from 'next/router';

export const useTabMenu = () => {
  const router = useRouter();

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
      [...prevState].map((section) => {
        if (activeSection?.name !== section.name) {
          return handleSetActiveSection(section, false);
        }

        return handleSetActiveSection(section, true);
      })
    );
  };

  const handleChangeQueryParams = () => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, tab: activeSection.name },
    });
  };

  return { tabSections, activeSectionIndex, activeSection, changeActiveSection, handleChangeQueryParams };
};
