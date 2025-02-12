import {Tooltip} from './index'
import useTooltip from "../../../common/hooks/hookDashboard/hookProfileInfo/useTooltip"
const UserAbout = ({text}) => {
    const { isTooltipVisible, showTooltip, hideTooltip } = useTooltip();

  return (
    <div className='flex gap-[4px] xl:w-[334px] h-[70px] overflow-hidden leading-[24.11px]'>
      <p className='text-[17px] font-primaryMedium text-[#CC6E00] max-smx3:w-[300px]  max-md:w-[500px] max-lg:w-[300px] max-xl:w-[350px] line-clamp-3 font-[700]'>
          <span className='text-[16px] text-[#ABABAB] font-[400] ml-[4px] truncate' >درباره  من :</span> 
          <span onMouseEnter={showTooltip} onMouseLeave={hideTooltip} className='cursor-pointer'>{text}</span> 
      </p>
     <Tooltip 
         showTooltip={showTooltip}
         isTooltipVisible={isTooltipVisible}
         hideTooltip={hideTooltip}
         text={text}
       />
    </div>  
  )
}

export default UserAbout