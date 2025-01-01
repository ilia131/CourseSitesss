import { RouterProvider } from 'react-router-dom'
import { DarkModeProvider } from './config/DarkModeContext.jsx';
import { Toaster } from 'react-hot-toast';
import { ChatProvider } from './components/ChatContext/ChatContext.jsx';
import { AuthProvider } from './components/Authenticated/Authenticated.jsx';
import { BgColorProvider } from './components/BgChangeAdmin/BgColorContext.jsx';
import ReactDOM from "react-dom/client";
import "./index.css";


import router from './config/router/router.jsx';






ReactDOM.createRoot(document.getElementById('root')).render( 
   <BgColorProvider >
    <DarkModeProvider>
      <AuthProvider >
      <ChatProvider >
          <Toaster />
  
              <RouterProvider  router={router}  />
          </ChatProvider>
     </AuthProvider>
    </DarkModeProvider>
    </BgColorProvider>
)
