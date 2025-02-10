const ArticleArrow = ({images}) => {
  return (
    <div className='xl:w-[1247px] max-md:w-full flex max-md:ml-[-15px] smx3:mt-[190px] lg:mt-[-90px] xl:mt-0 xl:mr-0  lg:mr-[40px] md:mr-[50px] cursor-pointer  justify-center max-md:mt-[100px]'>
      <div className='mt-[28px] mb-[15px] flex h-[20px] items-center gap-[7px] ml-[35px]'>
         <img src={images.arrowdore} width={15} height={15} />
            <p className='lg:text-[20px]  md:text-[18px] max-md:text-[16px] max-md:mt-[-3px] font-primaryRegular text-[#AAAAAA]'>مشاهده بیشتر</p>
      </div>
    </div> 
  )
}

export default ArticleArrow