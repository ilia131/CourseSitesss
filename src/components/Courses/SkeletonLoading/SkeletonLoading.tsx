import Skeleton from 'react-loading-skeleton';


const CourseSkeleton = () => {
    return (
      <div className="relative">
        <Skeleton height={200} width={251} />
        <Skeleton height={20} width={120} style={{ marginTop: "10px" }} />
        <Skeleton height={15} width={100} style={{ marginTop: "5px" }} />
      </div>
    );
}

export default CourseSkeleton