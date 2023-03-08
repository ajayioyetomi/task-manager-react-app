import { createContext,useState ,useContext} from "react";

export const AppContext = createContext({});


export const AppContextProvider = ({children})=>{
    const value = {}
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>

    )
}

export const themeContext = ()=>{
    return ()=>useContext(AppContext);
}


