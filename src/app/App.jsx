
import React, { Fragment, Suspense, lazy , useState, useEffect} from 'react';
import ReactLoading from "react-loading";


function App() {

const [isLoading, setIsLoading] = useState(true);

const Layout = lazy(() =>
   new Promise(resolve => setTimeout(() => resolve(import('../components/Layout')), 1000)), 
);


  


  return (
    <Fragment>
      <div className={isLoading ? 'h-screen ' : ' '}>
      <Suspense fallback={
         <div className='h-screen flex justify-center items-center'>
           <ReactLoading
              type={"bars"}
              color={"#01cec9"}
              height={100}
              width={100}
        />
         </div>}  >
         <Layout />
      </Suspense>
      </div>
    </Fragment>
  );
}

export default App;




