import { MainContext } from "../context/MainContext";
import { useContext } from "react";

export const useMainContext = () => {
    const context = useContext(MainContext);

    if(!context) {
        throw Error("useUserContext must be used inside a UserContextProvider"); 
    }

    return context;
} 
