import {Fragment , useState , useEffect} from 'react'
import images from '../../../assets/dashboardpng'
import moment from 'moment-jalaali';

const toPersianDate = (date) => {
  return moment(date).format('jYYYY/jMM/jDD');
};


const Group145 = ({item , index}) => { 
   const [acept , setAcept] = useState('')
   const [color , setColor] = useState('')
   useEffect(() => {
    if (item.accept) {
        setColor('#00C070')
        setAcept('تایید شده')
    } else {
        setColor('#E48900')
        setAcept('در انتظار تایید')
    }
}, [item.accept])

  return (
    <Fragment>   
                <div className="w-[874px] h-[40px] ] flex  items-center justify-between bg-[#F6FFFF]
                shadow-[0px_1px_2px_0px_#00000026] mt-[9px] pr-[27px] pl-[26px] dark:bg-gray-800
                " >
                    <div className="mr-[49px] flex gap-[12px]"  >
                      <img src={images.fr12}/>
                      <img src={images.fr11} />
                      
                    </div>
                    <div className='mr-[33px] xl:relative xl:right-[20px]'>
                        <p className='font-primaryRegular  text-[14px] font-[700] w-[72px] text-center'
                        style={{color:color}}
                        >{acept}</p>
                    </div>
                    <div className="mr-[66px] w-[100px]">
                      <p className='font-primaryRegular text-[#555555] text-[14px] font-[700]
                      truncate
                      dark:text-white
                      '>{item.studentId}</p>
                    </div>
                    <div className="mr-[41px] w-[100px] relative right-[30px]">
                      <p className='font-primaryRegular text-[#555555] text-[14px] font-[700]
                      dark:text-white truncate
                      ' >{toPersianDate(item.reserverDate)}</p>
                    </div>
                    <div className="mr-[33px] w-[100px] relative right-[20px]">
                      <p className='font-primaryRegular text-[#555555] text-[14px] font-[700]
                       dark:text-white truncate
                      ' >{item.studentName}</p>
                    </div>
                    <div className="mr-[42px] w-[100px] " style={{direction:'rtl'}} >
                      <p className='font-primaryRegular text-[#555555] text-[14px] font-[700]
                      dark:text-white truncate
                      ' >{item.courseName}</p>
                    </div>
                    <div className="h-[30px] w-[30px]" >
                      <img src={images.jrr} />
                    </div>
                  </div>
    </Fragment>
  )
}

export default Group145