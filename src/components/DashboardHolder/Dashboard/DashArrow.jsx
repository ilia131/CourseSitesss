const DashArrow = () => {
  return (
    <div className='flex xl:w-[342px] justify-center gap-[5px]  '> 
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
      <path d="M9.30869 9.75L4.87598 6L9.30869 2.25" stroke="#B7B7B7" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
       <p className='text-[11px] font-primaryMedium text-[#B7B7B7] font-[400] mt-[-4px] cursor-pointer '>مشاهده همه</p>
    </div> 
  )
}

export default DashArrow