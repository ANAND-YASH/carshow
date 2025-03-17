export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: () => void;
    btnType?: "button" | "submit" | "reset";
  }
  
  export interface SearchManufacturerPops {
    manufacturer: string;
    setManufacturer:(manufacturer: string) => void;
  }