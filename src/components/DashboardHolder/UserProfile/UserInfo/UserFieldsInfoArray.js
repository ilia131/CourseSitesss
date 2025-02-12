import toPersianDate from '../../../common/utils/ToPersianDate'

export const userInfoFields = [
    { label: "نام و نام خانوادگی", value: (data) => `${data?.lName} ${data?.fName}` },
    { label: "کد ملی", value: (data) => data?.nationalCode || "--" },
    { label: "ایمیل", value: (data) => data?.email || "--" },
    { label: "تاریخ تولد", value: (data) => toPersianDate(data?.birthDay) || "--" },
    { label: "جنسیت", value: (data) => (data?.gender ? "زن" : "مرد") || "--" },
  ];
  
export const userInfoFields2 = [
    { label: "شماره همراه", key: "phoneNumber", value: (data) => data?.phoneNumber || "--" },
    { label: "تلگرام", key: "telegramLink", value: (data) => data?.telegramLink || "--" },
    { label: "لینکداین", key: "linkdinProfile", value: (data) => data?.linkdinProfile || "--" },
    { label: "آدرس", key: "homeAdderess", value: (data) => data?.homeAdderess || "--", isLongText: true },
];

export const geoLocationFields = [
    { label: "طول جغرافیایی", 
       key: "latitude", 
      value: (data) => (data?.latitude ? Number(data.latitude).toFixed(2) : "--") 
    },
    { label: "عرض جغرافیایی", key: "longitude",    
       value: (data) => (data?.longitude ? Number(data.longitude).toFixed(2) : "--") },
];