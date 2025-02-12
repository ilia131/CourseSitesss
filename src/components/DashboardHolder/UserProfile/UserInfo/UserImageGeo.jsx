import { Fragment } from "react"

const UserImageGeo = ({dataInfo}) => {
  return (
    <Fragment >
     {dataInfo?.currentPictureAddress && (
         <div className='w-[120px] h-[120px] rounded-full overflow-hidden'>
             <img src={dataInfo.currentPictureAddress} alt="Profile" className='w-full h-full object-cover' />
         </div>
     )}
     </Fragment>
  )
}

export default UserImageGeo