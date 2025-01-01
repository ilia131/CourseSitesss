import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { getLastColor } from "../../core/services/api/ColorPallet";

const BgColorContext = createContext();

export const BgColorProvider = ({ children }) => {
  const [bgColor, setBgColor] = useState("#FFFFFF"); 
  console.log(bgColor)

  const getColor = async () => {
    const data = await getLastColor()
    
    const colorArray = data[0]?.colorData.replace(/[\[\]"]/g, "")
    setBgColor(colorArray);
  }
  useEffect(() => {
      getColor()
  }, []);

  return (
    <BgColorContext.Provider value={{ bgColor, setBgColor }}>
      {children}
    </BgColorContext.Provider>
  );
};

export const useBgColor = () => {
  return useContext(BgColorContext);
};
