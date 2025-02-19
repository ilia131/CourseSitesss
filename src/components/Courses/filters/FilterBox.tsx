import InputCheckBox from "./InputCheckBox";
import clsx from "clsx";





interface TechnologyFilterProps {
    technology:   { id: string; name: string }[] ;
    check: string[];
    radioCheckType: string; 
    radioCheckLevel: string;
    height: string;
    isOpen: boolean;
}
  
const TechnologyFilter= ({ 
  technology, 
  check,  
  radioCheckLevel , 
  radioCheckType  , 
  height,
  isOpen,
  }:TechnologyFilterProps
) => {
    return (
     
      <div className={clsx("grid justify-item-end gap-[20px] mt-2  pt-[15px] pr-[3px] " 
      ,isOpen ? `h-[123px] overflow-y-scroll w-[232px] overflow-x-hidden` : "h-[45px]")} dir="rtl">
        {technology.map((item) => (
          <InputCheckBox
            key={item.id}
            value={String(item.id)}
            check={check}
            radioCheckType={radioCheckType}
            radioCheckLevel={radioCheckLevel}
          >
            {item.name}
          </InputCheckBox>
        ))}
      </div>
    );
  };
  
export default TechnologyFilter;
  