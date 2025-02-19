import clsx from "clsx";
import FilterBox from './FilterBox'
import InputRange from "./InputRange";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { toggleAccordion } from "../../../redux/features/accordionSlice";


interface Props {
  technology :{ id: string; name: string }[] | null;
  id2: number,
  height : string,
  labelText: string
  check: string[],
  radioCheckLevel: string
  radioCheckType:string
}


const CheckBoxComponent = ({
    technology , 
    height , 
    labelText , 
    check , 
    radioCheckLevel,
    radioCheckType,
    id2,
}: Props) => {

    const isOpen = useAppSelector((state) => state.accordion.openAccordions[id2] || false);
    const dispatch = useAppDispatch();
    const handleToggle = () => {
       dispatch(toggleAccordion(id2));
    };

    const renderContent = () => {
        if (!isOpen) return null;
        return technology ? (
          <FilterBox 
            technology={technology}  
            isOpen={isOpen}
            height={height}
            check={check}  
            radioCheckLevel={radioCheckLevel} 
            radioCheckType={radioCheckType}
          />
        ) : (
          <InputRange />
        );
      }
  return (
    <section className={clsx("justify-center pt-[10px] grid shadow-md rounded-[6px] transition-all duration-300 ", isOpen ? `` : "h-[45px] w-[272px] " )}>
        <div 
            className={`w-[237px] h-[24px] flex justify-between items-center  cursor-pointer ${isOpen ? 'border-b border-b-[#E6E6E6]' : '' }`}
            onClick={handleToggle}
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="15" 
                height="15" 
                viewBox="0 0 15 15" 
                fill="none"
                className={clsx("transition-transform duration-300", isOpen && "rotate-180")} 
            >
                <path d="M2.8125 9.84375L7.5 5.15625L12.1875 9.84375" stroke="#777777" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <p className="font-primaryMedium font-[400] text-[18px] text-[#333333] mb-[6px]">{labelText}</p>     
        </div>
         {renderContent()}
     </section>
);
}

export default CheckBoxComponent