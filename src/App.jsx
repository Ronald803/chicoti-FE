import {useRoutes,BrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MissingAnimalsPage from './pages/MissingAnimalsPage'
import FoundAnimalsPage from './pages/FoundAnimalsPage'
import HomelessAnimalsPage from './pages/HomelessAnimalsPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Practice from './components/Practice'



const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/',          element: <HomePage/>},
    { path: '/missing',   element: <MissingAnimalsPage/>},
    { path: '/found',     element: <FoundAnimalsPage/>},
    { path: '/homeless',  element: <HomelessAnimalsPage/>},
    { path: '/practice',  element: <Practice/>}
  ])
  return routes
}

function App() {
  return (
    <div className='bg-red-100'>
      <BrowserRouter>
        <Navbar/>
        <AppRoutes/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
