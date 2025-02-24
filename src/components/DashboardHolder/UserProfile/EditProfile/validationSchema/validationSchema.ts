// validationSchema.ts
import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  FName: Yup.string()
    .min(2, 'نام باید حداقل دو حرف باشد')
    .max(50, 'نام نمی‌تواند بیش از 50 حرف باشد')
    .required('نام الزامی است'),

  LName: Yup.string()
    .min(2, 'نام خانوادگی باید حداقل دو حرف باشد')
    .max(50, 'نام خانوادگی نمی‌تواند بیش از 50 حرف باشد')
    .required('نام خانوادگی الزامی است'),

  NationalCode: Yup.string()
    .matches(/^\d{10}$/, 'کد ملی باید ۱۰ رقم باشد')
    .required('کد ملی الزامی است'),

  // TelegramLink: Yup.string()
  //   .matches(
  //     /^@[A-Za-z0-9_]{5,32}$/,
  //     'نام کاربری تلگرام باید با @ شروع شود و حداقل ۵ و حداکثر ۳۲ کاراکتر باشد'
  //   ),

  BirthDay: Yup.date()
    .required('تاریخ تولد الزامی است')
    .max(new Date(), 'تاریخ تولد نمی‌تواند در آینده باشد'),

  phonenumber: Yup.string()
    .matches(/^(\+98|0)?9\d{9}$/, 'شماره تماس باید شماره معتبر ایران باشد')
    .required('شماره تماس الزامی است'),

  email: Yup.string()
    .email('ایمیل نامعتبر است')
    .required('ایمیل الزامی است'),

  // LinkdinProfile: Yup.string()
  //   .url('لینک لینکداین نامعتبر است')
  //   .matches(
  //     /^https:\/\/(www\.)?linkedin\.com\/.*$/,
  //     'لینک باید از سایت لینکداین باشد'
  //   )
   

  HomeAdderess: Yup.string()
    .min(10, 'آدرس باید حداقل ۱۰ حرف باشد')
    .max(200, 'آدرس نمی‌تواند بیش از ۲۰۰ حرف باشد')
    .required('آدرس الزامی است'),

  UserAbout: Yup.string()
    .max(500, 'نمی‌تواند بیش از ۵۰۰ حرف باشد'),

  location: Yup.object().shape({
    lat: Yup.number().required('عرض جغرافیایی الزامی است'),
    lng: Yup.number().required('طول جغرافیایی الزامی است'),
  }),
});
