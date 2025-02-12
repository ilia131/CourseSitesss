import  {Field , ErrorMessage} from 'formik'

const LinkdinField = () => {
  return (
         <div>
            <label className='text-[#979797] font-primaryMedium text-[13px]  xl:ml-[-12px] xl:w-[430px] flex justify-end'>لینکداین</label>
                    <Field
                        name='LinkdinProfile'
                        placeholder='https://www.linkedin.com/in/...'
                        className='xl:w-[430px] text-left outline-none max-smx3:w-[200px] truncate max-md:w-[200px] max-lg:w-[200px] max-xl:w-[430px] shadow-[0px_1px_2px_0px_#00000033_inset] rounded-[5px] h-[35px] placeholder:text-[16px] placeholder:font-primaryMedium placeholder:text-[#005351] placeholder:pt-[5px] placeholder:pl-[13px] bg-transparent'
                    />
                    <div className="h-[10px] border border-[#FFFFFF] dark:border-gray-800">
                    <ErrorMessage name="LinkdinProfile" component="div"  className="text-red-500 font-primaryMedium text-sm"/>
                 </div>
            </div>
  )
}

export default LinkdinField