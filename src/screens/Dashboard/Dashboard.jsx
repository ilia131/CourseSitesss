import useCoursesDashboard from '../../components/common/hooks/hookapi/useCoursesDashboard.js'
import {DashboardLayout , CoursesLists , UserPanelUpper , DashboardNews} from '../../components/DashboardHolder/Dashboard'
const Dashboard = () => {
  const { courses, filteredCourses, loading, error } = useCoursesDashboard();
  
  const dashboardSections = [
    UserPanelUpper,
    DashboardNews,
    () => <CoursesLists filteredCourses={filteredCourses} />,
  ];

  return (
    <div className='flex justify-center xl:pr-[32px] xl:pt-[27px]'>
      <DashboardLayout 
          sections={dashboardSections}
      />
    </div>
  )
}

export default Dashboard