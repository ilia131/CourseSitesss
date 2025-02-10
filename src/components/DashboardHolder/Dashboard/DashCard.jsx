import { Fragment } from "react"
import images from '../../../assets/dashboardpng'
import moment from 'moment-jalaali';

const toPersianDate = (date) => {
  return moment(date).format('jYYYY/jMM/jDD');
};

const DashCard = ({namedore, time , img, teacher , bgColor}) => {
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
                                  //  style={{ backgroundColor: bgColor }}

                                   >
                         <div className='flex gap-[12px]'>
                          
                           <div className='w-[88px] h-[60px]'>
                              <img src={img} />
                           </div>
                           <p className='text-[10px]
                           max-md:text-[8px]
                           pt-[4px]
                           font-primaryMedium text-[#D47300] mt-[37px] 
                           h-[21px] items-center flex
                           '>
                            {toPersianDate(time)}
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
                             <p className='text-[11px] mb-[1px] font-[400] font-primaryRegular'>{teacher}</p>
                             <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.02244 2.58385C7.02244 2.99563 6.85246 3.39054 6.54988 3.68171C6.24731 3.97288 5.83693 4.13645 5.40902 4.13645C4.98112 4.13645 4.57074 3.97288 4.26817 3.68171C3.96559 3.39054 3.79561 2.99563 3.79561 2.58385C3.79561 2.17208 3.96559 1.77717 4.26817 1.486C4.57074 1.19483 4.98112 1.03125 5.40902 1.03125C5.83693 1.03125 6.24731 1.19483 6.54988 1.486C6.85246 1.77717 7.02244 2.17208 7.02244 2.58385ZM2.18262 8.42909C2.19644 7.61443 2.54245 6.83763 3.14601 6.26623C3.74958 5.69482 4.56234 5.37459 5.40902 5.37459C6.25571 5.37459 7.06847 5.69482 7.67204 6.26623C8.2756 6.83763 8.62161 7.61443 8.63543 8.42909C7.62323 8.87573 6.52256 9.10623 5.40902 9.10478C4.25769 9.10478 3.16487 8.86299 2.18262 8.42909Z" stroke="#26B4AF" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
                             </svg>
                           </div>
                       </div>
                   </div>
    </Fragment>
  )
}

export default DashCard