import clsx from "clsx";
import FilterBox from './FilterBox'
import { useState } from 'react'
interface Technology {
   name: string
   id: number
   techName: string
}



interface Props {
  technology : Technology[]
  height : string,
  labelText: string
  check: number[],
  HandleCheck : (value: number)=> void
}

const CheckBoxComponent = ({technology , height , labelText , check , HandleCheck} : Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleAccordion = () => setIsOpen((prev) => !prev);
  return (
    <section className={clsx("w-[272px] justify-center pt-[10px] grid shadow-md rounded-[6px] transition-all duration-300 ",  isOpen ? `h-[${height}]` : "h-[45px]")}>
        <div 
            className={`w-[237px] h-[24px] flex justify-between items-center  cursor-pointer ${isOpen ? 'border-b border-b-[#E6E6E6]' : '' }`}
            onClick={toggleAccordion}
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
        {isOpen && <FilterBox technology={technology} check={check} onCheck={HandleCheck} />}
    </section>
);
}

export default CheckBoxComponent