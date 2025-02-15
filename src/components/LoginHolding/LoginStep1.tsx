import { Fragment, useEffect, useState } from "react";
import { Field, Formik, Form } from 'formik';
import images from '../../assets/Login';
import { setItem } from "../../core/services/common/storage.services";
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useLoginMutation } from '../../redux/services/api/apiSlice';
import LogoOne from "./LogoOne";
import Fields from "./Fields";
interface FormValues {
    phoneOrGmail: string;
    password: string;
    rememberMe: boolean;
}



const LoginStep1 = ({ HandleLoginConfirm }: { HandleLoginConfirm: () => void }) => {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

const HandleSubmit = async (values: FormValues) => {
  try {
    const response = await login( values );
    if (response.data && response.data.token) {
      const user = response.data; 

      setItem("token", user.token);
      if (user?.success) {
        navigate('/user');
        toast.success("ورود با موفقیت انجام شد");
      } else {
        toast.error('خطا در ورود دوباره تلاش کنید');
      }
    } else {
      throw new Error("نام کاربری یا رمز عبور اشتباه است.");
    }
  } catch (error: any) {
    toast.error(error?.message || "خطا در ورود، لطفاً دوباره تلاش کنید.");
  }
};
  const FieldsArray = [
     {name: 'phoneOrGmail' , placeholder:'ایمیل یا شماره همراه'},
     {name: 'password' , placeholder:'رمز عبور'}
  ]

  return (
    <Fragment>
       <LogoOne />
       <div className='w-[377px] h-[400px] mb-[3px] flex justify-center justify-items-center items-center pt-[94px] 
          bg-no-repeat bg-center bg-auto pb-[81px] pl-[55px] pr-[56px] bg-bglogin '>
        <div className='grid justify-items-center '>
          <p className='text-[25px] font-primaryMedium text-[#005351] mb-[31px]'>ورود به حساب کاربری</p>

        <Formik
            initialValues={{ phoneOrGmail: '', password: '', rememberMe: false }}
            onSubmit={(values) => HandleSubmit(values)}
          >
            <Form>
             {FieldsArray.map((item , index) => (
               <Fields
                 key={index}
                 name={item.name}
                 placeholder={item.placeholder}

               />
             ))}

              <div className="flex justify-between">
                <p className="font-primaryMedium text-[11px] text-[#E48900]">فراموشی رمز عبور</p>
                <label className="w-[104px] flex justify-center items-center gap-[7px]">
                  <span className="text-[#AAAAAA] font-[400] font-primaryMedium text-[12px] mb-[3px] dark:text-white"> مرا بخاطر بسپار</span>
                  <Field type="checkbox" name="rememberMe" className='focus:ring-blue-500 appearance-none h-[15px] w-[15px] rounded-[3px] shadow-[0px_1px_3px_0px_#00000040_inset] bg-white checked:bg-blue-600 ' />
                </label>
              </div>

              <div className='grid justify-items-center mt-[44px]'>
                <button className='font-primaryMedium text-[13px] bg-[#E48900] w-[133px] h-[35px] rounded-[21px] text-[#FFFFFF]' type='submit'>دریافت کد تایید</button>
                <p className='text-[12px] text-[#008E8B] font-primaryRegular font-[700] mt-[4px]'>ثبت نام</p>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginStep1;
