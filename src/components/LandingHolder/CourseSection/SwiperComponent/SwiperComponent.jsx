import SwiperNavButton from '../SwiperButton/SwiperButton';
import ButtonPagination from '../ButtonPagination/ButtonPagination'
import Courses from '../Courses/Courses'
import useCourseList from '../../../common/hooks/hookapi/useCourseList';
import useActiveIndex from '../../../common/hooks/hookCourseSection/useActiveIndex';
import useSwiperControls from '../../../common/hooks/hookCourseSection/useSwiperControl';
import Loading from '../../../common/Loading/Loading';
import ErrorComponent from '../../../common/ErrorComponent/ErrorComponent';
const SwiperComponent = () => {
   const {courses , loading , error} = useCourseList()
   const {activeIndex, handleSlideChange} = useActiveIndex()
   const {
    swiperRef,
    SlideRef,
    handleNext,
    handlePrev,
    handlePaginationClick,
   } = useSwiperControls()
    if (loading) {
      return <Loading loading={loading} />
    }
    if (error) {
      return <ErrorComponent  error={error}/>
    }
  return (
    <div className='font-primaryRegular grid justify-center mt-[25px] justify-items-center  ml-[7px] sm1:w-full smx4:w-full lg:w-full duration-700'>
        <Courses slidercard={courses} swiperRef={swiperRef} handleSlideChange={handleSlideChange} SlideRef={SlideRef}/>
        <SwiperNavButton handleNext={handleNext} handlePrev={handlePrev} />
        <ButtonPagination  handlePaginationClick={handlePaginationClick}  activeIndex={activeIndex}/>
    </div>
  )
}

export default SwiperComponent