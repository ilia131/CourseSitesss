


const DashboardLayout = ({sections}) => {
  return (
    <div className='xl:w-[797px] xl:h-[661px] ' >
        {sections.map((Section, index) => (
          <Section key={index} />
        ))}
    </div>
  )
}

export default DashboardLayout