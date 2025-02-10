const SectionHeader = ({ title, subtitle, description }) => {
    return (
       <div className='lg:mt-[184px] mr-[4px] max-md:mt-[-150px] max-lg:mt-[-160px]'>
        <div className='lg:w-[447px] lg:h-[67px] flex max-md:w-full justify-center  gap-[4px] items-center mt-[3px] pt-[-4px] '
        dir="rtl"
        >
                          <p className='font-primaryMedium text-[40px]
                           max-md:text-[20px]
                           max-lg:text-[30px]
                          text-[#003231]  
                         
                          '>{title}</p>
                          <span className='text-[#006865] font-primaryRegular 
                                           text-[25px] mt-[7px] xl:mr-[3px] 
                                           max-md:text-[15px] max-md:mr-[3px] max-md:pb-[4px]
                                           max-lg:text-[20px]
                                           dark:text-[#f7f7f7]
                                           '
                                          
                                           >{subtitle}</span>  
                        </div>
                        <div className='flex justify-center'>
                            <p className='font-primaryRegular text-[20px] 
                                         text-[#777777] text-center
                                           xl:w-[385px] h-[61px]  mt-[4px]
                                           max-md:text-[15px]
                                           max-lg:text-[17px]
                                           dark:text-[#989898]
                                         '
                                         
                                         >
                                            {description}
                           
                            </p>
                        </div> 
                    </div>  
    );
  };

export default SectionHeader