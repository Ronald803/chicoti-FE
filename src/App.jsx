import {useRoutes,BrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MissingAnimalsPage from './pages/MissingAnimalsPage'
import FoundAnimalsPage from './pages/FoundAnimalsPage'
import HomelessAnimalsPage from './pages/HomelessAnimalsPage'



const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/',          element: <HomePage/>},
    { path: '/missing',   element: <MissingAnimalsPage/>},
    { path: '/found',     element: <FoundAnimalsPage/>},
    { path: '/homeless',  element: <HomelessAnimalsPage/>}
  ])
  return routes
}

function App() {
  return (
    <div className='bg-red-100'>
      <BrowserRouter>
        Aplicacion chicoti para encontrar y buscar perritos perdidos
        <AppRoutes/>

      </BrowserRouter>
    </div>
  )
}

export default App
