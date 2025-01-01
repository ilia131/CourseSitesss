import React, { Fragment, useState , useRef} from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

export default function Calender({value, onChange}) {
  const datePickerRef = useRef()
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  return (
   <Fragment>
     <div className="w-full 
          pl-[12px]
          pr-[19px]
          h-[36px]
                                        bg-transparent

          flex items-center justify-between "
          onClick={() => datePickerRef.current.openCalendar()}
   >
     <DatePicker 
       ref={datePickerRef} 
       calendar={persian}
        locale={persian_fa}
        format="YY/MM/DD"
        value={value}
        onChange={(date) => {
          onChange(date?.isValid ? date : "")
        }}
        style={{
          width: '100px',
          marginBottom:'6px'   ,   
          fontSize: '16px',    
          height:'23px',
          color:'#005351',
          borderRadius: '5px',
          background:'transparent',
          fontFamily: 'var(--font-regular)',
          border:'none',
          outline:'none',
        }}
        className="font-primaryMedium"
   />
       <div   >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path d="M4.625 1.5V3.375M13.375 1.5V3.375M1.5 14.625V5.25C1.5 4.75272 1.69754 4.27581 2.04917 3.92417C2.40081 3.57254 2.87772 3.375 3.375 3.375H14.625C15.1223 3.375 15.5992 3.57254 15.9508 3.92417C16.3025 4.27581 16.5 4.75272 16.5 5.25V14.625M1.5 14.625C1.5 15.1223 1.69754 15.5992 2.04917 15.9508C2.40081 16.3025 2.87772 16.5 3.375 16.5H14.625C15.1223 16.5 15.5992 16.3025 15.9508 15.9508C16.3025 15.5992 16.5 15.1223 16.5 14.625M1.5 14.625V8.375C1.5 7.87772 1.69754 7.40081 2.04917 7.04917C2.40081 6.69754 2.87772 6.5 3.375 6.5H14.625C15.1223 6.5 15.5992 6.69754 15.9508 7.04917C16.3025 7.40081 16.5 7.87772 16.5 8.375V14.625M9 9.625H9.00667V9.63167H9V9.625ZM9 11.5H9.00667V11.5067H9V11.5ZM9 13.375H9.00667V13.3817H9V13.375ZM7.125 11.5H7.13167V11.5067H7.125V11.5ZM7.125 13.375H7.13167V13.3817H7.125V13.375ZM5.25 11.5H5.25667V11.5067H5.25V11.5ZM5.25 13.375H5.25667V13.3817H5.25V13.375ZM10.875 9.625H10.8817V9.63167H10.875V9.625ZM10.875 11.5H10.8817V11.5067H10.875V11.5ZM10.875 13.375H10.8817V13.3817H10.875V13.375ZM12.75 9.625H12.7567V9.63167H12.75V9.625ZM12.75 11.5H12.7567V11.5067H12.75V11.5Z" stroke="#007370" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>  
          </div>
      </div>
  </Fragment>
)
}