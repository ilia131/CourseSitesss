import { Fragment  , useState } from 'react'
import images from '../../../../assets/dashboardpng'
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useFormikContext } from 'formik';

import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});


const LocationMarker = ({ setSelectedCoords }) => {
    useMapEvents({
      click(e) {
        setSelectedCoords({
          lat: e.latlng.lat,
          lng: e.latlng.lng,
          

        });

      },
    });
    return null;
  };


const MapReact1 = ({setValueField , handleMapClick ,setFieldValue}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCoords, setSelectedCoords] = useState({ lat: "", lng: "" });
    const handleModalClick = () => {
        setIsModalOpen(true);
    };
    const handleSubmitCoords = () => {
      if (selectedCoords) {
          setFieldValue("Latitude", selectedCoords.lat);
          setFieldValue("Longitude", selectedCoords.lng);
          alert("مختصات به فرم ارسال شد");
      } else {
          alert("ابتدا مختصات را از روی نقشه انتخاب کنید");
      }
  };
    
    const closeModal = () => {
        setIsModalOpen(false)
    };



  return (
     <Fragment>
   
        <div className='relative top-[6px]' >
            <div className=' rounded-full' 
            onClick={handleModalClick}
            >
            <img src={images.eli534} />
            </div>
            <div className='w-[121px] h-[34.58px] relative left-[8px] bottom-[40px]'>
            <img src={images.vector61} />
            </div>
            <div className='relative left-[61px] bottom-[67px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M12.5 8.75C12.5 9.41304 12.2366 10.0489 11.7678 10.5178C11.2989 10.9866 10.663 11.25 10 11.25C9.33696 11.25 8.70107 10.9866 8.23223 10.5178C7.76339 10.0489 7.5 9.41304 7.5 8.75C7.5 8.08696 7.76339 7.45107 8.23223 6.98223C8.70107 6.51339 9.33696 6.25 10 6.25C10.663 6.25 11.2989 6.51339 11.7678 6.98223C12.2366 7.45107 12.5 8.08696 12.5 8.75Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.25 8.75C16.25 14.7017 10 18.125 10 18.125C10 18.125 3.75 14.7017 3.75 8.75C3.75 7.0924 4.40848 5.50268 5.58058 4.33058C6.75268 3.15848 8.3424 2.5 10 2.5C11.6576 2.5 13.2473 3.15848 14.4194 4.33058C15.5915 5.50268 16.25 7.0924 16.25 8.75Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        {isModalOpen && (
        <div className="relative  bottom-[636px] xl:right-[92px] max-smx3:flex 
        max-md:flex
        max-md:justify-center
        max-smx3:justify-center
        max-lg:flex
        max-lg:justify-center
        max-xl:flex
        max-xl:justify-center
      
        ">
           <div className="absolute z-[9999999] xl:w-[916px] xl:h-[624px] bg-[#525252B2] xl:rounded-[15px]

            backdrop-blur-[13px]
            max-smx3:z-[1000]
            
            max-smx3:h-screen
            max-smx3:w-[300px]
            shadow-[0px_2px_4px_0px_#00000040]
            max-md:z-[1000]
            max-md:h-screen
            max-md:left-[-10px]
            max-smx3:left-[-150px]
            max-md:w-[300px]
            max-lg:w-[400px]
            max-lg:z-[1000]
            max-xl:left-[-180px]
            max-xl:w-[500px]
            max-xl:z-[1000]
          "> 
                  <button  className='w-[26px] h-[26px] bg-[#B9B9B9] 
                justify-center flex items-center absolute xl:left-[864px] top-[30px]
                max-smx3:z-[1001] max-smx3:left-[250px]
                max-md:z-[1001]
                max-md:left-[250px]
                max-lg:z-[1001]
                max-lg:left-[350px]
                max-xl:z-[1001]
                max-xl:left-[450px]
                max-smx3:bg-white
                rounded-full'
                onClick={closeModal}
                >
                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.72313 1.72267L10.562 10.5615M10.562 1.72267L1.72313 10.5615" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
                </button>
                    <div className='xl:w-[755px] xl:h-[432px]  overflow-hidden xl:mt-[96px] xl:ml-[83px] gird
                    '>
                <div className='xl:w-[755px] xl:h-[395px] xl:rounded-[14px] overflow-hidden' >
                  <MapContainer
                        center={[35.7665394, 51.4749824]} 
                        zoom={14}
                        style={{ height: '500px', width: '100%' }} 
                       >
                        <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <LocationMarker setSelectedCoords={setSelectedCoords} />
                        {selectedCoords && (
                        <Marker position={[selectedCoords.lat, selectedCoords.lng]} />
                        )}
                    </MapContainer>
                 
                      </div>  
                             <div className='w-[50px] h-[50px] bg-[#FFFFFF] rounded-full
                                flex justify-center items-center  shadow-[0px_1px_3px_0px_#00000040]
                                absolute bottom-[97px] xl:left-[439px] z-[8000]
                                max-smx3:left-[130px] max-smx3:top-[470px]
                                max-md:left-[130px]
                                max-lg:left-[170px]
                                max-lg:top-[460px]
                                max-xl:left-[220px]
                                max-xl:top-[460px]
                                
                                '   
                                onClick={handleSubmitCoords}
                                >
                                    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.1121 0.715431C24.8019 0.0164058 25.9204 0.0164058 26.6103 0.715431C27.2916 1.4059 27.3 2.52008 26.6353 3.22094L12.5222 19.9038C12.5086 19.921 12.4941 19.9374 12.4788 19.953C11.7889 20.6521 10.6705 20.6521 9.98067 19.953L1.39235 11.2504C0.70255 10.5514 0.70255 9.41808 1.39235 8.71905C2.08221 8.02003 3.20067 8.02003 3.89053 8.71905L11.1765 16.102L24.0653 0.768967C24.0798 0.75018 24.0954 0.732309 24.1121 0.715431Z" fill="#00A981"/>
                                       </svg>
                                 </div>
                                 {selectedCoords? (
                              <div className='flex gap-[10px] items-center mt-[10px]
                              max-smx3:mt-[40px]'>
                               <p className='font-primaryMedium 
                               text-[15px] text-[#FFFFFF]'>Lt :{selectedCoords.lat}</p>
                               <p className='font-primaryMedium text-[15px] text-[#FFFFFF]'>Lg :{selectedCoords.lng}</p>
                                 </div>
                            ) : (
                             <div className='flex gap-[10px] mt-[10px]'>
                                 <p className='font-primaryMedium text-[15px] text-[#FFFFFF]'>Lt :35.7665394</p>
                                 <p className='font-primaryMedium text-[15px] text-[#FFFFFF]'>Lg :51.4749824</p>
                              </div>  
                           )}
                    </div>
             </div> 
          </div>
          
          )
          }
       
    </Fragment>
  )
}

export default MapReact1