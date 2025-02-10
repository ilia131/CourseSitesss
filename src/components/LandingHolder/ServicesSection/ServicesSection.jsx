import images from '../../../assets/landingpng'
import SectionTitle from '../../common/SectionTitle/SectionTitle'
import ServiceItem from './ServicesItem'


const ServicesSection = () => {
  const style1 = 'w-[211px] h-[215px] max-md:w-[180px] max-md:ml-[80px] md:ml-[350px] lg:ml-0 duration-700'
  const style2 = "xl:mt-[140px] w-[211px] h-[215px] max-md:w-[180px] max-md:ml-[-80px] md:ml-[-350px] lg:ml-0 lg:mt-[140px] duration-700"
  const style3 = "className='w-[211px] h-[215px] max-md:ml-[80px] lg:mt-[24px] xl:mt-[24px] max-md:w-[180px] md:ml-[360px] lg:ml-0 duration-700"
  const style4 = "w-[211px] h-[215px] max-md:ml-[-80px]  xl:mt-[140px] lg:mt-[140px] max-lg:ml-[-360px] max-md:w-[180px] duration-700"
  return (
    <section className='h-[516px] grid justify-center  dark:bg-gray-800'>
        <SectionTitle 
          subtitle='مجموعه ای از تمام  هر آنچه شما نیاز دارید'
          title='خدمات ما'
        />
        <div className='xl:w-[1247px] max-md:w-full flex justify-center mt-[32px]'>
        <div className="xl:w-[1069px] h-[355.2px] xl:flex max-md:w-full max-md:grid justify-center max-md:gap-0 max-md:justify-items-center xl:gap-[75px] md:w-full md:grid max-lg:justify-items-center lg:flex lg:gap-[20px] lg:ml-[10px] xl:ml-0 duration-700">
          <ServiceItem imgSrc={images.sritem} altText="Service Item 1" additionalClasses={style1}/>
          <ServiceItem imgSrc={images.sritem2} altText="Service Item 2" additionalClasses={style2} />
          <ServiceItem imgSrc={images.sritem3} altText="Service Item 3" additionalClasses={style3} />
          <ServiceItem imgSrc={images.sritem4} altText="Service Item 4" additionalClasses={style4} />
        </div>
      </div>
    </section>
  )
}

export default ServicesSection