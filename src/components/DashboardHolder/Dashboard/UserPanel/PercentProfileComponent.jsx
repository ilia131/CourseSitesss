import { Fragment } from 'react'
import CircularProgress from './CircularProgress'
import CompletionMessage from './CompletionMessage';
import useProfileCompletion from '../../../common/hooks/hookapi/useProfileCompletion'



const PercentProfileComponent = () => {
  const { completionPercentage, loading, error } = useProfileCompletion();
  return (
    <Fragment>
           <div className='md:w-[336px] md:h-[110px]  flex md:gap-[34px]  max-md:grid max-md:justify-items-center max-md:justify-end max-smx3:mt-[140px] max-smx3:justify-center max-md:mt-[20px]' dir='ltr'>
              <div className='w-[110px] h-[110px] max-smx3:w-[100px] max-md:mr-[25px]'>
              <CircularProgress percentage={completionPercentage.toFixed(2)} />
              </div>
              <CompletionMessage />
            </div>
    </Fragment>
  )
}

export default PercentProfileComponent