import { useState, useEffect, useRef } from 'react';

const SelectOption = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-[184px] h-[40px] rounded-[31px]" ref={selectRef}>
      <div
        className="border border-gray-300 p-2 bg-white cursor-pointer rounded-[31px] 
        w-[184px]
        flex items-center
        justify-between pr-[15.5px] pl-[12px]  shadow-[0px_1px_2px_0px_#00000040_inset] h-[40px]
"
        onClick={() => setIsOpen(!isOpen)} 
      >      
       <span className="float-right">
       <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
                <path d="M10.1875 1.15625L5.5 5.84375L0.8125 1.15625" stroke="#005B58" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
       </span>
       <span className='font-primaryRegular text-[#333333] text-[16px] font-[400] mb-[4px] text-center  '>
        {selectedOption ? selectedOption.label : 'جدید  ترین'}
       </span>
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.25 -5.5H-2.75V16.5H19.25V-5.5Z" stroke="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5833 11H11.9167C11.4125 11 11 10.5875 11 10.0833C11 9.57917 11.4125 9.16667 11.9167 9.16667H15.5833C16.0875 9.16667 16.5 9.57917 16.5 10.0833C16.5 10.5875 16.0875 11 15.5833 11ZM16.5 0.916667C16.5 1.42083 16.0875 1.83333 15.5833 1.83333H0.916667C0.4125 1.83333 0 1.42083 0 0.916667C0 0.4125 0.4125 0 0.916667 0H15.5833C16.0875 0 16.5 0.4125 16.5 0.916667ZM15.5833 6.41667H6.41667C5.9125 6.41667 5.5 6.00417 5.5 5.5C5.5 4.99583 5.9125 4.58333 6.41667 4.58333H15.5833C16.0875 4.58333 16.5 4.99583 16.5 5.5C16.5 6.00417 16.0875 6.41667 15.5833 6.41667Z" fill="#005B58" stroke="white" stroke-width="0.5"/>
        </svg>
        </span>
      </div>

      {isOpen && (
        <ul className="absolute z-10 w-full border border-gray-300 bg-white rounded-md mt-1 shadow-lg">
          {options.map((option) => (
            <li
              key={option.value}
              className={`p-2 cursor-pointer hover:bg-red-500 hover:text-white
                font-primaryRegular text-[#333333] text-[16px] font-[400] text-right
                ${
                selectedOption?.value === option.value ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => handleSelectOption(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectOption;
