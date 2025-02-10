const CourseLink = ({images}) => (
    <div className="flex items-center gap-[6px] ml-[30px] max-md:ml-0 xl:px-0 max-md:px-3 max-md:mt-[20px] md:mt-[20px] xl:mt-0">
      <img src={images.arrowdore} width={15} height={15} />
      <p className="font-primaryRegular text-[#AAAAAA] mb-[2px]">همه دوره ها</p>
    </div>
  );

export default CourseLink