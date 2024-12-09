import {GlobalContext} from "../context/globalcontext.jsx"; 
import { useContext } from "react";

export const useGlobalContext = () => {useContext(GlobalContext);
    const text = useContext(useGlobalContext)
    if(!context){
        throw new Error('useGlobalContext() must be in the GlobalContextProvider()');
    }
    return context;
}