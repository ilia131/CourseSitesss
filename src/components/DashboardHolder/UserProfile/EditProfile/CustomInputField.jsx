import { Field, ErrorMessage } from "formik";
import Calender from '../../../../screens/Dashboard/UserProfile/Calender1'

const CustomInputField = ({ field , setFieldValue}) => {
    const { name, type, placeholder, label, as, options } = field
    const inputClass ='w-[200px] outline-none shadow-[0px_1px_2px_0px_#00000033_inset] width-[200px] bg-transparent rounded-[5px] text-right text-[16px] font-primaryMedium text-[#005351] h-[36px]';
    return (
      <div className="max-smx3:grid max-md:grid max-lg:grid max-xl:grid">
        <label className="text-[#979797] font-primaryMedium text-[13px] xl:mr-[12px]">
          {label}
        </label>  
        {as === "select" ? (
          <Field as="select" name={name}   className='
          w-[200px] outline-none
          shadow-[0px_1px_2px_0px_#00000033_inset] 
          width-[200px]
          bg-transparent
          rounded-[5px]
          text-right
          text-[16px]
          font-primaryMedium
          text-[#005351]
          h-[36px]
          
          '>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Field>
        ) : as === "calendar" ? (
          <div className="flex w-[200px] h-[36px] justify-between items-center shadow-[0px_1px_2px_0px_#00000033_inset] rounded-[5px]">
            <Field name={name}>
              {({ field }) => (
                <Calender value={field.value} onChange={(value) => setFieldValue(name, value)} />
              )}
            </Field>
          </div>
        ) : (
          <Field
            type={type}
            name={name}
            placeholder={placeholder}
            className={inputClass}
            // onChange={(e) => setFieldValue(name, e.target.value)}

            />
        )}

       <div className="h-[10px] border border-[#FFFFFF] dark:border-gray-800">
            <ErrorMessage name={name} component="div" className="text-red-500 font-primaryMedium text-sm"/>
      </div>
    </div>
    );
  };

export default CustomInputField;
