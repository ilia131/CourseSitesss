import { RouterProvider } from 'react-router-dom'
import { DarkModeProvider } from './config/DarkModeContext';
import { Toaster } from 'react-hot-toast';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import "./index.css";
import {store} from './redux/store'
import router from './config/router/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






ReactDOM.createRoot(document.getElementById('root')!).render( 
    <DarkModeProvider>
             <ToastContainer />
              <Provider store={store}>
                 <RouterProvider  router={router}  />
              </Provider> 
     </DarkModeProvider>  
)
