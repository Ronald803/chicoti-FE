import {useRoutes,BrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MissingAnimalsPage from './pages/MissingAnimalsPage'
import FoundAnimalsPage from './pages/FoundAnimalsPage'
import HomelessAnimalsPage from './pages/HomelessAnimalsPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



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
        <Navbar/>
        Aplicacion chicoti para encontrar y buscar perritos perdidos
        <AppRoutes/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
