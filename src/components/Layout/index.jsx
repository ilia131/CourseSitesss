import { Outlet } from "react-router-dom"
import Header from "../common/Header/Header"
import Footer from "../common/Footer/Footer"
import { IoMail } from "react-icons/io5"
import { IoClose } from "react-icons/io5"
import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CohereClient } from "cohere-ai";
import { SiGooglemessages } from "react-icons/si";
import { useChat } from "../ChatContext/ChatContext"
import { getProfile } from "../../core/services/api/user"
import { getItem } from "../../core/services/common/storage.services"


const client = new CohereClient({ token: "7BMgczC5sogMJGdc6mRkh8OXbpNtejVZfGH3ajTw", clientName: "" });        




const Layout = () => {
  const { messages, setMessage, addMessage, message , setMessages} = useChat()
  const token = getItem("token")
   
  const [modal , setModal] = useState(false)
  const [data1, setData1] = useState([])
  const navigate = useNavigate();
  const getProfile1 = async () => {
    const data = await getProfile()
    setData1(data)
  }
  useEffect(()=> {
    getProfile1()
  },[])
  const sendMessage = async () => {
    if (!message.trim()) return;

    setMessages([...messages, { text: message, from: "user" }]);
    setMessage(""); 
    // addMessage(message, "user")

    if (message.toLowerCase().includes("برو به صفحه اصلی")) {
      navigate("/");  
      addMessage("در حال هدایت به صفحه اصلی...", "bot");
      return addMessage("با موفقیت وارد صفحه اصلی شدید")
    }

    if (message.toLowerCase().includes("برو به صفحه دوره ها")) {
      navigate("/courses"); 
      addMessage("در حال هدایت به صفحه دوره ها...", "bot");
      return addMessage('با موفقیت وارد صفحه دوره ها شدید')
    }
    if (message.toLowerCase().includes("برو به صفحه اخبار مقالات")) {
      navigate("/News"); 
      addMessage("در حال هدایت به صفحه اخبار مقالات...", "bot");
      return addMessage('با موفقیت وارد صفحه اخبارمقالات شدید')
    }

    try {
    
     
      const response = await client.v2.chat({
        model: "command-r", 
        messages: [
          ...messages.map(msg => ({
            role: msg.from === "user" ? "user" : "system",
            content: msg.text
          })),
          { role: "user", content: message }, 
        ],
      });
      console.log('hiii' ,response.message)

      const botMessage = response.message.content[0].text.trim(); 
      setMessages(prevMessages => [
        ...prevMessages,
        { text: botMessage, from: "bot" }, 
      ]);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
     <div>
        <Header />
          <main>
            <Outlet />
          </main>
          <div className="w-[50px] h-[50px] bg-white rounded-full  z-[33333]
          flex justify-center items-center text-[50px] text-[#01CEC9] left-[30px] right-0 fixed top-[600px]
          max-lg:top-[500px]
           
          " 
           onClick={() => setModal(true)}
          >
             <SiGooglemessages />
          </div>
        {token? (
          <>
          {modal && (
        <div className="w-[300px] h-[400px] rounded-[10px] z-[999999999999] text-[22px] left-[30px] right-0 fixed top-[250px] text-white shadow-lg bg-[#e2e2e2]">
          <div className="w-full h-[60px] bg-[#01CEC9] flex font-primaryMedium text-center items-center justify-between px-[20px]">
            <p>چت با هوش مصنوعی</p>
            <IoClose
              className="text-[30px] mt-[3px] hover:text-blue-950"
              onClick={() => setModal(false)}
            />
          </div>
          <div className="h-[300px] w-full shadow-inner bg-[#303030] overflow-y-auto
          font-primaryMedium text-[14px]
          ">
            {messages.map((msg, index) => (
              <div key={index} className={`p-2 
              ${msg.from === "user" ? "text-right text-green-600" : "text-left text-blue-600"}`}
              >
              <div className="flex justify-end items-center
              gap-[10px]
              " >
              <div>
            {msg.from === "user" ? (
              <>
            <div className="flex gap-[4px] relative">
              <p className="text-white">{data1.lName}</p>
              <p className="text-white">{data1.fName}</p> 
            </div>
              </>
            ) : (
                <p></p>
              )}
                <p>{msg.text}</p>
               
              </div>
               {msg.from === "user" ? (
                <div className="">
              
                 <img  
                 src={data1.currentPictureAddress}
                 className="rounded-full"
                  width={30} height={30}/> 
               </div>) : (
                <img/> 
               )}
              </div>
              </div>
            ))}
          </div>
          <div className="flex bg-black h-[40px] justify-between">
            <input
              className="bg-transparent outline-none text-green-600 w-[250px] px-[10px] font-primaryMedium text-[16px]"
              placeholder="با هوش مصنوعی چت کنین"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="font-primaryMedium text-[15px] bg-[#01CEC9] px-[7px]"
              onClick={sendMessage}
            >
              ارسال
            </button>
          </div>
        </div>
            )}
           </>)
         : (
           <div>
             {modal &&  (
                <div
                className="w-[300px] 
                grid justify-center items-center text-center 
                h-[400px] rounded-[10px] z-[999999999999] text-[22px]
                bg-[#01CEC9] px-[3px]
                left-[30px] right-0 fixed top-[300px] text-white shadow-lg "
                >
                  <p 
                  className='text-[22px] font-primaryMedium 
                  cursur-pointer '
                  >برای چت با هوش مصنوعی ابتدا باید ثبت نام کنید</p>
                  <p
                   className='text-[22px] font-primaryMedium 
                  cursor-pointer '
                  onClick={()=>setModal(false)}
                  >بستن</p>
                </div>
             )}
            </div>
         )   
        }
           
         <Footer />    
     </div>
  )
}

export default Layout