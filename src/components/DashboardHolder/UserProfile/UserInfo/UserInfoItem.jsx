
const UserInfoItem = ({label, value}) => {
  return (
    <div className='flex gap-[4px]'>
      <p className='text-[16px] font-primaryMedium text-[#ABABAB] font-[400]'>{label} :</p>
       <span className='text-[17px] font-primaryMedium text-[#CC6E00]'>{value || '--'}</span>
   </div>
  )
}

export default UserInfoItem