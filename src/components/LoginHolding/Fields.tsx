import { Field } from "formik"
interface FieldsProps {
    name: string;
    placeholder: string;
}

const Fields: React.FC<FieldsProps> = ({name , placeholder}) => {
  return (
        <div className="mb-[10px]">
               <Field
                     className='w-[277px] h-[47px] bg-transparent shadow-[0px_1px_2px_0px_#00000040_inset] rounded-[9px] text-right outline-none border-none placeholder:text-[12px] placeholder:text-right pt-[14px] font-primaryMedium pb-[15px] flex justify-between gap-[3px] px-[12px]'
                     name={name}
                     placeholder={placeholder}
                 />
      </div>
  )
}

export default Fields