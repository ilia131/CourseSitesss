import { Fragment } from "react"
import images from '../../../assets/dashboardpng'

const DashCardDore = ({namedore, time , img, teacher}) => {
  return (
    <Fragment>
        <div className='xl:w-[342px] h-[76px]  flex rounded-[10px]
                                   bg-[#F9F9F9] 
                                   shadow-[0px_1px_2px_0px_#00000040]
                                   pr-[15px] pl-[9px]
                                   py-[8px]
                                   justify-between
                                   dark:bg-gray-800
                                   max-md:px-[12px]
                                   '

                                   >
                         <div className='flex gap-[12px]'>
                          
                           <div className='w-[88px] h-[60px]'>
                              <img src={img} />
                           </div>
                           <p className='text-[10px] pt-[4px]
                           font-primaryMedium text-[#D47300] mt-[37px] 
                           h-[21px] items-center flex
                           '>
                           </p>
                         </div>
                      <div className='grid gap-[20px] justify-items-end'>
                           <p className='
                                         text-[13px] 
                                         font-[700]
                                         font-primaryMedium text-center
                                         text-[#005250]
                                         dark:text-[#59d7d3]
                           '
                            style={{direction:'rtl'}}
                           >
                             {namedore}
                           </p>
                           <div className='flex items-center gap-[4px] text-[#26B4AF]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
<                              path d="M9.30869 9.75L4.87598 6L9.30869 2.25" stroke="#01B4AF" 
                                stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                             </svg>
                             <p className='text-[11px] mb-[3px] font-[400] font-primaryRegular'>مشاهده دوره</p>
                            
                           </div>
                       </div>
                   </div>
    </Fragment>
  )
}

export default DashCardDore