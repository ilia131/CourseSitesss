const CourseImage = ({images}) => (
    <div className="md:w-[324px] md:h-[420px] max-md:mt-[20px] max-md:w-[300px]">
      <img
        src={images.rec23}
        className="xl:relative xl:top-[397px] xl:left-[930px] smx4:relative smx4:left-[280px] max-md:relative max-md:top-[380px] max-lg:relative max-lg:top-[390px] lg:top-[390px] lg:relative"
      />
    </div>
  );

export default CourseImage