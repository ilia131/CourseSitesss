import { Field , ErrorMessage} from "formik"

const AddressField = () => {
  return (
    <div className='max-lg:mt-[20px] max-xl:mt-[30px]' >
    <label className='text-[#979797] font-primaryMedium text-[13px]  xl:ml-[-12px] xl:w-[430px] flex justify-end '>آدرس</label>
    <Field
      name='HomeAdderess'
      placeholder='مازندران - ساری - میدان خزر - جاده فرح آباد - خیابان دیمطوران - ساختمان هوتن ۱۲ - واحد ۱۵'
      as='textarea'
      className='xl:w-[430px] max-smx3:w-[200px] max-xl:w-[430px] max-md:w-[200px] max-lg:w-[200px] max-smx3:h-[100px] xl:h-[65px]  lg:h-[65px] text-right outline-none shadow-[0px_1px_2px_0px_#00000033_inset]  rounded-[5px] resize-none placeholder:text-[16px] placeholder:font-primaryMedium placeholder:text-[#005351] placeholder:pt-[5px] placeholder:pr-[14px] bg-transparent'
    />
      <div className="h-[10px] border border-[#FFFFFF] dark:border-gray-800">
        <ErrorMessage name="HomeAdderess" component="div"   className="text-red-500 font-primaryMedium text-sm"/>
        </div>
    </div> 
  )
}

export default AddressField