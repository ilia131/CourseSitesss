import { useState } from "react";

interface SideBarState {
  sidebar: boolean;
  openSideMenu: () => void;
  closeSidebar: () => void;
}

const useSidebar = (): SideBarState => {
  const [sidebar, setSideBar] = useState<boolean>(false);

  const openSideMenu = (): void => setSideBar(true);
  const closeSidebar = (): void => setSideBar(false);

  return { sidebar, openSideMenu, closeSidebar };
};

export default useSidebar;
