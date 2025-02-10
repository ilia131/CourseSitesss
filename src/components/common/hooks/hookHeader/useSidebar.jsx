import { useState } from "react";

const useSidebar = () => {
  const [sidebar, setSideBar] = useState(false);

  const openSideMenu = () => setSideBar(!sidebar);
  const closeSidebar = () => setSideBar(false);

  return { sidebar, openSideMenu, closeSidebar};
};

export default useSidebar;