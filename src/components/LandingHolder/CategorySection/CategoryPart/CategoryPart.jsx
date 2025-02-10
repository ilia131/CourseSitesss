import React from 'react'
import SectionTitle from '../../../common/SectionTitle/SectionTitle'
import CatItem from '../CatItem/CatItem'

const CategoryPart = ({catitem , images}) => {
  const style = 'w-full grid justify-center xl:mt-[70px] max-md:mt-[-380px] md:mt-[-250px]  lg:mt-[29px]'
  const style1 = 'w-[12.49px] h-[13.05px] bg-[#01CEC9] rounded-full mt-[-5px] ml-[10px]'

  return (
    <section className='grid gap-[10px] duration-700 dark:bg-gray-800 w-full'>
      <SectionTitle
           title="محبوب‌ترین دسته‌بندی‌ها"
           subtitle="گستره وسیعی از محبوب‌ترین دوره‌ها"
           style={style}
           style1={style1}
       />
     <div className='h-[600px] flex justify-center items-center max-md:mt-[-280px] md:mt-[-150px] lg:mt-0'
                       style={{
                         backgroundImage:`url(${images.rec667})`,
                         backgroundRepeat:'no-repeat', backgroundPosition:'center', 
                         backgroundSize: 'auto 495px',
                       }}
                       >
          <div className='xl:w-[1093.08]  
                          xl:flex  
                          xl:mb-[20px]
                          xl:items-center  
                          xl:gap-[13.92px] 
                          xl:justify-items-center
                          max-md:grid
                          max-md:grid-cols-2	
                          max-md:w-full
                          max-md:justify-items-center
                          max-md:mb-[60px]          
                          md:flex
                          md:gap-[41px]
                          md:w-full
                          md:justify-center
                          lg:flex
                          lg:gap-[70px]
                                             '>
                                               
             {catitem.map((item)=>(
                 <div key={item.id} 
                      className='xl:w-[262.08px] xl:h-[262.08px] xl:flex 
                                             xl:justify-center xl:items-center xl:mt-[8px]
                                             xl:z-[24324] max-md:flex 
                                             '>    
                      <CatItem 
                         item={item}
                         title={item.title}
                         src={item.src}
                         width={item.width}
                         height={item.height}
                         mt={item.mt}
                         id={item.id}
                         mbq={item.mbq}
                      />
                   
                  </div>
              ))}
              
               </div> 
              
           </div> 
            
 </section>
  )
}

export default CategoryPart