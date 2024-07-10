import { useState } from "react"
import { GeneralContext } from "./GeneralContext"

export const GeneralProvider = ({children}) => {
    const [isLogged, setIsLogged] = useState(false)
    const [userName, setUserName] = useState("")
    const [bodyTag, setBodyTag] = useState("perdidos")
    return (
        <GeneralContext.Provider
            value={{
                isLogged,setIsLogged,
                userName,setUserName,
                bodyTag, setBodyTag
            }}
        >
            {children}
        </GeneralContext.Provider>
    )
}