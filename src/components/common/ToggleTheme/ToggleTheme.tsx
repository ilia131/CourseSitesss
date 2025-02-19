import { LuSunMedium } from "react-icons/lu";
import { RiMoonFill } from "react-icons/ri";
import { useDarkMode } from '../../../config/DarkModeContext.jsx';

const ThemeToggle : React.FC =  () => {
     const { isDarkMode, toggleDarkMode } = useDarkMode()
  
  return (
    <div className='w-[30px] h-[30px] mb-[11px] mt-[3px]   max-md:hidden ' onClick={toggleDarkMode}>
                {isDarkMode?  <LuSunMedium className='text-[30px] text-white'/>  :  <RiMoonFill className='text-[30px] text-[#cccccc]' />}                
    </div>
  );
};

export default ThemeToggle;