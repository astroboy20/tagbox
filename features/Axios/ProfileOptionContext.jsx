import { createContext, useContext, useState } from "react";


const OptionContext = createContext({
    option:"Edit Profile",
    switchOption : ()=>{}
})

export const ProfileOptionProvider = ({children})=>{
    const [option, setOption] = useState("Edit Profile")
    const switchOption = (optionValue)=>{
        setOption(optionValue)
    }

    return (
        <OptionContext.Provider value={{option,switchOption}}>
            {children}
        </OptionContext.Provider>
    )
}

export const useOptionContext = () => useContext(OptionContext)