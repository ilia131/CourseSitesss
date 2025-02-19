import React from 'react';
import { CheckboxInputProps } from '../../types/types';  

const CheckboxInput = ({ value, check, onChange , children}: CheckboxInputProps) => {
  return (
    <label className="flex items-center gap-[9.5px] cursor-pointer pb-[7px] h-[18px]" dir="rtl">
     <input
         className="w-[13.5px] h-[13.5px] text-blue-600 border-gray-300 focus:ring-blue-500"
         type="checkbox"
         value={value}
         checked={check.includes(value)}
         onChange={() => onChange(value)}
    />
      <span className="text-[#333333] font-primaryRegular text-[16px] mb-[5px]">{children}</span>
    </label>
  );
};

export default CheckboxInput;