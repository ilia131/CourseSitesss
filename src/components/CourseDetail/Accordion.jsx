import images from '../../assets/img/coursDetail'
import { useState } from 'react';
import Daisyui from "daisyui"

const Accordion = () => {
   
  const [isactive,setIsActive]=useState(false)
  const [openacc, setOpenAcc] = useState(false)
  
  const [activeIndex, setActiveIndex] = useState(null);

const HandleOpen = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
};


  const [buttonstate,setButtonState]=useState([
    {title:'معرفی Ajax',subtitle:'معرفی و نحوه استفاده از متد LifeCycle '},
    {title:'معرفی Ajax',subtitle:'معرفی و نحوه استفاده از متد LifeCycle '},
    {title:'معرفی Ajax',subtitle:'معرفی و نحوه استفاده از متد LifeCycle '},
    {title:'معرفی Ajax',subtitle:'معرفی و نحوه استفاده از متد LifeCycle '},
    {title:'معرفی Ajax',subtitle:'معرفی و نحوه استفاده از متد LifeCycle '},
    {title:'معرفی Ajax',subtitle:'معرفی و نحوه استفاده از متد LifeCycle '},
    {title:'معرفی Ajax',subtitle:'معرفی و نحوه استفاده از متد LifeCycle '},
    {title:'معرفی Ajax',subtitle:'معرفی و نحوه استفاده از متد LifeCycle '},
  ])
  
     const handelevalue = (e) =>{

      console.log(e.value);
     }
     


  const OnClick = () => {
      

        if (!isactive) {
          setIsActive(true)
        }else{
          setIsActive(false)
        }

      }
       


     
  return (
    <div className='grid justify-center '> 
        <div className=" relative top-[17px] 
        right-[3px] w-[105px] h-[32px] text-[#005351] 
         dark:text-blue-400 font-bold  text-2xl "> سرفصل ها </div>
         <div className='max-md:w-screen '>
         {buttonstate.map((item, index) => (
    <div key={index}  >
        <div 
            onClick={() => HandleOpen(index)}
            className={`xl:w-[809px] max-smx3:w-[320px] max-md:w-[400px]
              h-[51px] bg-[#ffffff] mt-[30px] rounded-[10px]
            shadow-[0_1px_3px_0_#0000004D] flex pr-[36px] pl-[28px] justify-between items-center
            ${activeIndex === index ? 'rounded-[10px_10px_0_0px] bg-[#00e2dc]' : ''}`}>
            <p className={`text-[#555555] font-primaryRegular text-[20px]
              max-md:text-[14px]
              ${activeIndex === index ? 'text-[#006865]' : ''}`}>
                پیش نیاز های ری اکت
            </p>
            <div className="flex items-center gap-[11px]"> 
                <div>
                    <span className={`max-smx3:text-[12px] max-smx3:mt-[-10px] ${activeIndex === index ? 'text-[#005b58]' : ''}`}>
                        ۲۰ جلسه . ۴ ساعت
                    </span>
                </div>
                <div>
                    {activeIndex === index ? (
                        <svg  
                            className={`h-[20px] stroke-[#444444] w-[20px] rotate-0 transform duration-100`}
                            xmlns="http://www.w3.org/2000/svg" 
                            width="15" height="15" 
                            viewBox="0 0 15 15" 
                            fill="none"
                        >
                            <path d="M2.8125 9.84375L7.5 5.15625L12.1875 9.84375" stroke="#9D9D9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    ) : (
                        <svg  
                            className={`h-[20px] stroke-[#444444] w-[20px] rotate-180 transform transition-transform duration-100`}
                            xmlns="http://www.w3.org/2000/svg" 
                            width="15" height="15" 
                            viewBox="0 0 15 15" 
                            fill="none"
                        >
                            <path d="M2.8125 9.84375L7.5 5.15625L12.1875 9.84375" stroke="#9D9D9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    )}
                </div>
            </div>
        </div>
        
        {activeIndex === index && (
            <div className='xl:w-[808px] h-[51px] pr-[33px] pl-[30px] flex 
                items-center bg-[rgb(219,255,255)] shadow-[0_1px_2px_0_#00000040]
                justify-between rounded-[0_0_10px_10px]'> 
                <p className='text-[18px] text-[#006865]'>معرفی Ajax</p>
                <div className='flex items-center gap-[9px]'>
                    <p className='text-[16px] mt-[-5px] text-[#006865]'>۱۵:۳۶</p>
                    <div className='h-[20px] w-[20px]'>
                        <img src={images.play} alt="Play Icon"/>
                    </div>
                </div>
            </div>
        )}
    </div>
))}
</div>
       
    </div>
      
  )
}
export default Accordion