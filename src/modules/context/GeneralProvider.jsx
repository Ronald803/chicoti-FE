import { useState } from "react"
import { GeneralContext } from "./GeneralContext"

export const GeneralProvider = ({children}) => {
    const [isLogged, setIsLogged] = useState(false)
    const [userName, setUserName] = useState("")
    const [bodyTag, setBodyTag] = useState("perdidos")
    const [isAnimalChoosen, setIsAnimalChoosen] = useState(false)
    const [animalChoosen, setAnimalChoosen] = useState(null)
    const [currentPage, setCurrentPage] = useState("Home")
    return (
        <GeneralContext.Provider
            value={{
                isLogged,setIsLogged,
                userName,setUserName,
                bodyTag, setBodyTag,
                isAnimalChoosen, setIsAnimalChoosen,
                animalChoosen, setAnimalChoosen,
                currentPage, setCurrentPage
            }}
        >
            {children}
        </GeneralContext.Provider>
    )
}