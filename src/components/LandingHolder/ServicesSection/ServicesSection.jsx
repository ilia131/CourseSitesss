import images from '../../../assets/landingpng'
import { useBgColor } from '../../BgChangeAdmin/BgColorContext';




const ServicesSection = () => {
  const { bgColor , setBgColor} = useBgColor();
  const getComplementaryColor = (hexColor) => {
    const color = hexColor.replace("#", "");
    
    const r = 255 - parseInt(color.substring(0, 2), 16);
    const g = 255 - parseInt(color.substring(2, 4), 16);
    const b = 255 - parseInt(color.substring(4, 10), 16);
  
    return `rgb(${r}, ${g}, ${b})`;
  };
  
  const textColor = getComplementaryColor(bgColor);
  return (
    <section className='h-[516px] grid justify-center  dark:bg-gray-800'
    style={{backgroundColor:bgColor}}

    >
        <div className='xl:w-[1247px] flex justify-center xl:mt-[62.34px]
        max-md:w-full duration-700
        '>
           <div className=' h-[87px]  grid max-md:ml-[12px]
                            justify-center xl:ml-[23px]'>
               <div className='flex justify-center items-center 
                               h-[54.38px] gap-[14.13px]'>
                  <p className='font-primaryMedium text-[35px] max-md:text-[25px] text-[#000000]
                                dark:text-[#f7f7f7] 
                                w-[122.71px] h-[54.38px]'>خدمات ما</p>
                  <div className='h-[13px] w-[13px] bg-[#01CEC9] 
                                  rounded-full max-md:ml-[-40px] max-md:mb-[13px]'>                    
                  </div>
               </div>
               <div className=' h-[30px]'>
                   <p className='font-primaryRegular text-[#AAAAAA]
                   max-md:mr-[15px] max-md:text-[16px]
                   text-[20px]' 
                   style={{color: bgColor === "" ? '#AAAAAA': textColor
                   }}
                   >مجموعه ای از تمام  هر آنچه شما نیاز دارید
                   </p>
               </div>
           </div>
        </div>
        <div className='xl:w-[1247px] max-md:w-full  flex justify-center mt-[32px]' >
           <div className="xl:w-[1069px] h-[355.2px] xl:flex 
                          max-md:w-full max-md:grid
                          justify-center max-md:gap-0
                          max-md:justify-items-center
                          xl:gap-[75px]
                          
                          md:w-full
                          md:grid
                          max-lg:justify-items-center
                          lg:flex
                          lg:gap-[20px]
                          lg:ml-[10px]
                          xl:ml-0
                          duration-700
                          ">
            
              <div className=" w-[211px] h-[215px] max-md:w-[180px] max-md:ml-[80px]
                  md:ml-[350px]
                  lg:ml-0 duration-700
                  
                  
              ">
                 <img src={images.sritem} width={211} height={170}/>
              </div>
         
           
           
              <div  className="xl:mt-[140px] w-[211px] h-[215px] 
                max-md:w-[180px] max-md:ml-[-80px]
                md:ml-[-350px]
                lg:ml-0
                lg:mt-[140px]
                duration-700
              ">
                <img src={images.sritem2} />
              </div>
           
           
              <div className='w-[211px] h-[215px] max-md:ml-[80px]  
              lg:mt-[24px]
              xl:mt-[24px] 
              max-md:w-[180px]
              md:ml-[360px]
              lg:ml-0
              duration-700
              '>
                  <img src={images.sritem3} />
              </div>
           
            
              <div className='w-[211px] h-[215px] max-md:ml-[-80px]  xl:mt-[140px]
              lg:mt-[140px]
              max-lg:ml-[-360px]
              max-md:w-[180px]
              duration-700
              '>
                <img src={images.sritem4} />
              </div>
           
           </div>
        </div> 
    </section>
  )
}

export default ServicesSection