import React, { useContext } from 'react'
import { GeneralContext } from '../../modules/context/GeneralContext'
import MissingAnimalsPage from '../../pages/MissingAnimalsPage'
import FoundAnimalsPage from '../../pages/FoundAnimalsPage'
import HomelessAnimalsPage from '../../pages/HomelessAnimalsPage'

function BodyComponent() {
    const { bodyTag } = useContext(GeneralContext)
    return (
    <div>
        {
            bodyTag == "perdidos"
            &&
            <MissingAnimalsPage/>
        }
        {
            bodyTag == "encontrados"
            &&
            <FoundAnimalsPage/>
        }
        {
            bodyTag == "sinHogar"
            &&
            <HomelessAnimalsPage/>
        }
    </div>
  )
}

export default BodyComponent