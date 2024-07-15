import React, { useContext } from 'react'
import { GeneralContext } from '../../modules/context/GeneralContext'
import MissingAnimalsPage from '../../pages/MissingAnimalsPage'
import FoundAnimalsPage from '../../pages/FoundAnimalsPage'
import HomelessAnimalsPage from '../../pages/HomelessAnimalsPage'
import CardInfoPet from '../organisms/CardInfoPet'

function BodyComponent() {
    const { bodyTag,isAnimalChoosen,currentPage } = useContext(GeneralContext)
    return (
    <div>
        { 
            currentPage == "Home" 
            && 
            <div>
                { bodyTag == "perdidos" && <MissingAnimalsPage/> }
                { bodyTag == "encontrados" && <FoundAnimalsPage/> }
                { bodyTag == "sinHogar" && <HomelessAnimalsPage/> }
            </div>
        }
        { currentPage == "AnimalInfo" && <CardInfoPet/> }
        {/* {
            isAnimalChoosen 
            ?
            <CardInfoPet/>
            :
            <div>
                { bodyTag == "perdidos" && <MissingAnimalsPage/> }
                { bodyTag == "encontrados" && <FoundAnimalsPage/> }
                { bodyTag == "sinHogar" && <HomelessAnimalsPage/> }
            </div>
        } */}
    </div>
  )
}

export default BodyComponent