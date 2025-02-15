import React from 'react'

interface Props {
   children : React.ReactNode,
   value: number, 
   check: number[],
   HandleCheck : (value: number)=> void,
   id:number,
   name: string
}


const InputCheckBox = ({children , value , check , HandleCheck , id  , name}: Props) => {
  return (
    <label className="flex items-center gap-[9.5px] cursor-pointer pb-[7px] h-[18px]" dir="rtl">
      <input
           type="checkbox" 
           className="w-[13.5px] h-[13.5px] text-blue-600 border-gray-300 focus:ring-blue-500"
           value={value}
           checked={check.includes(value)}
           onChange={() => HandleCheck(value)}
           name={name}
        />
      <span className="text-[#333333] font-primaryRegular text-[16px] mb-[5px]">{children}</span>
       
     </label>
  )
}

export default InputCheckBox