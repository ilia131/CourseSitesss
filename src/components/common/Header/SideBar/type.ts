export interface Images {
     logo: string,
     shopbag:string,
}

export interface SideBarHeaderProps {
    HandleClose: () => void;
    toggleDarkMode: () => void;
    isDarkMode: boolean;
    images: {
      shopbag: string;
      logo: string;
    };
  }
  
export interface SideBarContentProps {
    navList: React.ReactNode;
}
  
export interface SideBarProps {
    HandleClose: () => void;
    toggleDarkMode: () => void;
    isDarkMode: boolean;
    navList: React.ReactNode;
    images: Images
}
  