import {Fragment , useState} from 'react'


const Group146 = ({item , index}) => {
  return (
    <Fragment>   
                <div className="w-[874px] h-[40px] ] flex  items-center justify-end bg-[#F6FFFF]
                shadow-[0px_1px_2px_0px_#00000026] mt-[9px] pr-[31px] pl-[28px] dark:bg-gray-800
                " >
                    <div className=" flex gap-[12px] items-center mr-[73px] w-[50px]"  >
                      <img src={item.delete}/>
                      <img src={item.eye} />
                      
                    </div>
                    <div className="mr-[68px] w-[107px]">
                      <p className='font-primaryRegular text-[#555555] text-[14px] font-[700]
                      dark:text-white
                      ' >{item.timestart}</p>
                    </div> 
                    <div className='mr-[69px]'>
                        <p className='font-primaryRegular  text-[14px] font-[700] w-[72px] text-center
                        dark:text-white
                        '
                        style={{color:item.color}}
                        >{item.vaziet}</p>
                    </div>
                    <div className='mr-[62px] w-[70px] text-center'>
                        <p className='
                        font-primaryRegular text-[#555555] text-[14px] font-[700]
                        dark:text-white
                        ' >{item.sorting}</p>
                    </div>
             
                    <div className=" text-center w-[156px] mr-[50px]" style={{direction:'rtl'}} >
                      <p className='font-primaryRegular text-[#555555] text-[14px] font-[700]
                      dark:text-white
                      ' >{item.coursename}</p>
                    </div>
                    <div className="h-[20px] w-[30px]" >
                      <p  className='text-[#555555] text-[14px] font-primaryMedium font-[700]
                      dark:text-white
                      ' >{item.number}</p>
                    </div>
                  </div>
    </Fragment>
  )
}

export default Group146