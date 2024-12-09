import { createContext } from "react";
export const GlobalContext = createContext();
const changestate = (state,action) => {
    const {type,payload} = action;
    switch(type){
        case "SET_USER":
            return {...state,user:payload};
        default:
            return state;
    };
};
export function GlobalContextProvider({children}) {
    const [state,dispatch] = useReducer(changestate,{user:{}});
    return (
        <GlobalContext.Provider value={{state,dispatch}}>
            {children}
        </GlobalContext.Provider>
    );
};