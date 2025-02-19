import { useState } from "react";

interface Props {
   text:string ;
    LeftIcon: React.ComponentType<JSX.IntrinsicElements['svg']>; 
    RightIcon: React.ComponentType<JSX.IntrinsicElements['svg']>; 
   onClick: () => void;
}



const SelectOptionFilter = ({ text, LeftIcon ,  RightIcon, onClick } : Props) => {
 
    const [selectedValue, setSelectedValue] = useState<string>("option1");
  
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedValue(e.target.value);
    };
  return (
    <div 
    className="w-[207px] h-[45px] flex items-center justify-between pr-[14px] pl-[8px] shadow-lg cursor-pointer" 
    onClick={onClick}
  >
    <LeftIcon />
    <span className="font-primaryMedium text-[22px] text-[#333333] mb-[4px] font-[400]">
      {text}
    </span>

    <RightIcon />
  </div>
  );
};

export default SelectOptionFilter;