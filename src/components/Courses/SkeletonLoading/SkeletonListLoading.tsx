import Skeleton from 'react-loading-skeleton';

const SkeletonListLoading = () => {
  return (
    <div className='flex'>
       
          <div className="relative">
                <Skeleton height={120} width={680} />
                <Skeleton height={20} width={680} style={{ marginTop: "10px" }} />
                <Skeleton height={15} width={680} style={{ marginTop: "5px" }} />
                <Skeleton height={15} width={680} style={{ marginTop: "5px" }} />

          </div>
          <div>
              <Skeleton width={210} height={200} style={{marginBottom:'30px'}}/>
        </div>
    </div>
  )
}

export default SkeletonListLoading