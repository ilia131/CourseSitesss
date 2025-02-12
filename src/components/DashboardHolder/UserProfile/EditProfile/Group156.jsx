import { Fragment } from 'react'
import { Field , ErrorMessage} from 'formik'
import CustomInputField from './CustomInputField'
import LinkdinField from './LinkdinField'
import AddressField from './AddressField'
const Group156 = ({setFieldValue}) => {
  const FieldProps = [
     {name:'LName' , type:'text' , placeholder:'فلان زاده فلان آبادی' , label:'نام خانوادگی'},
     {name: 'Fname' , type:'text', placeholder: 'فلان' , label:'نام'},
     {
      name: "Gender",
      as: "select",
      label: "جنسیت",
      options: [
        { value: "male", label: "مرد" },
        { value: "female", label: "زن" }
      ]
    },
    {name:'NationalCode' ,type:'tel' ,placeholder:'کد ملی', label:'کد ملی' },
    {name:'phoneNumber', type:'tel' , placeholder:'۰۹۳۹۶۴۲۱۲۳۴' , label: 'شماره تلفن'},
    {
      name: "BirthDay",
      as: "calendar",
      label: "تاریخ تولد",
    },
    {name:'TelegramLink',  type:'text'  , placeholder:'https://t.me/..' , label:'تلگرام' },
    {name:'email', type:'text' , placeholder:'folani99@gmail.com' , label:'ایمیل'},
  ]

  return (
    <Fragment>
        <div className='grid xl:grid-cols-2  text-right xl:gap-y-[11px] xl:gap-x-[30px] xl:w-[430px] xl:h-[496px] max-smx3:gap-[10px] max-md:gap-[10px] max-lg:gap-[10px]
                         max-xl:gap-x-[30px] lg:w-[430px] lg:h-[496px] lg:grid-cols-2 relative' dir='ltr'>
                          {FieldProps.map((field) => (
                             <CustomInputField key={field.name} field={field} setFieldValue={setFieldValue} />
                            ))}  
                           <div className='grid xl:gap-[70px] max-smx3:gap-[20px]'>
                           <LinkdinField />
                           <AddressField />
                           </div>  
                        </div>
    </Fragment>
  )
}

export default Group156