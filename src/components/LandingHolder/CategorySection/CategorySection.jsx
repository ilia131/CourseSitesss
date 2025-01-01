import {useState} from 'react'
import images from '../../../assets/landingpng'
import CatItem from './CatItem/CatItem'
import { useBgColor } from '../../BgChangeAdmin/BgColorContext'
const CategorySection = () => {
  const { bgColor , setBgColor} = useBgColor();
  const getComplementaryColor = (hexColor) => {
    const color = hexColor.replace("#", "");
    
    const r = 255 - parseInt(color.substring(0, 2), 16);
    const g = 255 - parseInt(color.substring(2, 4), 16);
    const b = 255 - parseInt(color.substring(4, 10), 16);
  
    return `rgb(${r}, ${g}, ${b})`;
  };
  
  const textColor = getComplementaryColor(bgColor);
   
   const [catitem, setCatItem] = useState([   
      {title:'امنیت شبکه', src:images.securitysvg , width:'113px' , mt:'28px' , height:'35px' ,mbq:'0px'}, 
      {title:'بازی سازی', src:images.gamecon , width:'92px' , mt:'28px', height:'35px', mbq:'0px'},
      {title: 'تحلیل داده', src:images.piechart , width:'101px', mt:'28px', height:'35px' , mbq:'0px' },
      {title: 'طراحی صفحات وب' , src:images.w10, width:'105px' , mt:'8px' ,height:'70px', mbq:'-5px'},
   ])


  return (
    <section className='
                        grid gap-[10px]
                        duration-700
                        dark:bg-gray-800
                        w-full
                        '
                        style={{backgroundColor:bgColor}}

                        >
       <div className='w-full grid justify-center
                        xl:mt-[70px] 
                        max-md:mt-[-380px]
                        md:mt-[-250px]  
                        lg:mt-[29px]
       '>
       <div className='xl:w-[1247px]
                       grid justify-center'>
         <div className='grid justify-center justify-items-center text-center'>
            <div className='font-primaryRegular grid justify-center 
                            leading-[10px]  text-center xl:w-[370.49px]
                            max-md:leading-[4px]
                            max-md:ml-[15px]
                            h-[87px]  
                            pb-[10px]
                            ml-[6px]
                            '>
 
              <div className='font-primaryMedium flex justify-center 
                              items-center ' >

                  <p className='xl:text-[35px] 
                                xl:w-[348px] h-[54px] flex items-center
                                justify-center mb-[11px]
                                max-md:text-[25px]
                                md:text-[30px]
                                dark:text-[#f7f7f7]
                                text-black
                                ' >محبوب ترین دسته بندی ها</p>
                   <span className='w-[12.49px] h-[13.05px]
                   bg-[#01CEC9] rounded-full mt-[-5px] ml-[10px]'></span>
              </div> 
              <br/>
                <p className='xl:text-[20px] text-[#AAAAAA] z-[4555]
                    justify-center items-center mt-[-10px] md:text-[18px] max-md:text-center
                    max-md:text-[16px] max-md:mr-[15px]
                '>گستره  وسیعی از محبوب ترین دوره ها</p> 
              </div>
          </div>
       </div>
        </div > 
        <div className='
                        
                         h-[600px]
                     
                          flex
                          justify-center
                          items-center
                          max-md:mt-[-280px]
                          md:mt-[-150px] 
                          lg:mt-0
                          '
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
                                                  
                {catitem.map((item , index)=>(
                    <div key={index} 
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

export default CategorySection