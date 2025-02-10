import { useState } from 'react';

const useActiveIndex = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    setActiveIndex(currentIndex > 2 ? (currentIndex % 3) : currentIndex);
  };

  return {
    activeIndex,
    handleSlideChange,
  };
};

export default useActiveIndex;
