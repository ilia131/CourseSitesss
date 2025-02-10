import { useContext } from "react";
import { LuSunMedium } from "react-icons/lu";
import { RiMoonFill } from "react-icons/ri";
import { useDarkMode } from '../../../config/DarkModeContext.jsx';
import { useBgColor } from '../../BgChangeAdmin/BgColorContext.jsx';

const ThemeToggle = () => {
     const { isDarkMode, toggleDarkMode } = useDarkMode()
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
    <div className='w-[30px] h-[30px] mb-[11px] mt-[3px]   max-md:hidden '
             onClick={toggleDarkMode}
         >
                {isDarkMode? 
                <LuSunMedium className='text-[30px] text-white' 
                // style={{color: bgColor === "" ? '#555555': textColor
                // }}
                />  : 
                <RiMoonFill className='text-[30px] text-[#cccccc]' 
                // style={{color: bgColor === "" ? '#cccccc': textColor
                // }}
                />}

                
    </div>
  );
};

export default ThemeToggle;