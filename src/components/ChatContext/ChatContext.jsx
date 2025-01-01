import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const addMessage = (newMessage, sender) => {
    setMessages(prevMessages => [...prevMessages, { text: newMessage, from: sender }]);
  };

  return (
    <ChatContext.Provider value={{ messages, setMessage, addMessage, message , setMessages }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
