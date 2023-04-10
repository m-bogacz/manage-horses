import React, { useState } from 'react';

export const useSteps = () => {
  const [active, setActive] = useState(1);

  const handlePrev = () => {
    if (active === 1) return;
    setActive((prev) => prev - 1);
  };
  const handleNext = () => {
    if (active === 3) return;
    setActive((prev) => prev + 1);
  };

  return { active, handlePrev, handleNext };
};
