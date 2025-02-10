import { useRef } from 'react';

const useSwiperControls = () => {
  const swiperRef = useRef(null);

  const handlePaginationClick = (index) => {
    if (swiperRef.current && swiperRef.current.slideToLoop) {
      swiperRef.current.slideToLoop(index);
    }
  };

  const SlideRef = useRef();

  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };

  return {
    swiperRef,
    SlideRef,
    handleNext,
    handlePrev,
    handlePaginationClick,
  };
};

export default useSwiperControls;
