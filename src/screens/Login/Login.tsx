import { Fragment, useState } from 'react';
import images from '../../assets/Login';
import LoginStep1 from '../../components/LoginHolding/LoginStep1';
import LoginStep2 from '../../components/LoginHolding/LoginStep2';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';

interface LoginProps {
  HandleLoginConfirm: () => void;
}

const Login: React.FC<LoginProps> = () => {
  const [loginconfirm, setLoginConfirm] = useState<boolean>(false);

  const HandleLoginConfirm = () => {
    setLoginConfirm(true);
  };

  const HandleLoginConfirm1 = () => {
    setLoginConfirm(false);
  };

  return (
    <Fragment>
      <ToastContainer />
      <div className="w-full h-screen relative dark:bg-gray-800">
        <div className="w-[952px] h-[631px] pt-[50px] mb-[166px] ml-[285px] mr-[203px] flex">
          <div className="w-[869px] h-[631px] relative">
            <div className="w-[869px] h-[631px] flex justify-center items-center bg-no-repeat bg-center bg-bgloginmain">
              {loginconfirm ? (
                <LoginStep2 />
              ) : (
                <LoginStep1 HandleLoginConfirm={HandleLoginConfirm} />
              )}
            </div>

            {loginconfirm ? (
              <div
                className="absolute flex items-center gap-[9px] bottom-[28px] left-[39px] cursor-pointer"
                onClick={HandleLoginConfirm1}
              >
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path
                      d="M9.84375 12.1875L5.15625 7.5L9.84375 2.8125"
                      stroke="#AAAAAA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="font-primaryRegular mb-[3px] text-[20px]">مرحله قبل</p>
              </div>
            ) : (
              <div className="absolute flex items-center gap-[9px] bottom-[28px] left-[39px] cursor-pointer">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path
                      d="M9.84375 12.1875L5.15625 7.5L9.84375 2.8125"
                      stroke="#AAAAAA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <NavLink
                  className="font-primaryRegular mb-[3px] text-[20px]"
                  to={'/'}
                  style={{ justifyContent: 'right' }}
                >
                  صفحه اصلی
                </NavLink>
              </div>
            )}
          </div>

          <div className="font-primaryMedium font-[700] text-[24px] text-[#006865] mt-[102px] ml-[12px]">
            <NavLink className="cursor-pointer" to={'/register'}>
              ثبت نام
            </NavLink>
            <p className="mt-[68px]">ورود</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
