import {useRoutes,BrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MissingAnimalsPage from './pages/MissingAnimalsPage'
import FoundAnimalsPage from './pages/FoundAnimalsPage'
import HomelessAnimalsPage from './pages/HomelessAnimalsPage'
import CreateUserForm from './components/forms/CreateUserForm'
import LoginForm from './components/forms/LoginForm'
import UrlImageFIxerPage from './pages/UrlImageFIxerPage'
import NavBar from './components/organisms/NavBar'
import FooterComponent from './components/organisms/FooterComponent'
import { GeneralProvider } from './modules/context/GeneralProvider'
import UserPage from './pages/UserPage'
import SearchPage from './pages/SearchPage'
import AboutUs from './pages/AboutUs'
import RegisterAnimalPage from './pages/RegisterAnimalPage'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/',            element: <HomePage/>},
    { path: '/missing',     element: <MissingAnimalsPage/>},
    { path: '/found',       element: <FoundAnimalsPage/>},
    { path: '/homeless',    element: <HomelessAnimalsPage/>},
    { path: '/user',        element: <UserPage/>},
    { path: '/search',      element: <SearchPage/>},
    { path: '/aboutus',     element: <AboutUs/>},
    { path: '/registerpet', element: <RegisterAnimalPage/>},

    { path: '/new-user',  element: <CreateUserForm/>},
    { path: '/login',     element: <LoginForm/>},
    { path: '/urlImage',  element: <UrlImageFIxerPage/> }
  ])
  return routes
}

function App() {
  return (
    <div className='font-playwriteGBS'>
      <GeneralProvider>
        <BrowserRouter>
          <div className='flex flex-col h-screen'>
            <div className='flex-none'>
              <NavBar/>
            </div>
            <div className='flex-grow overflow-y-auto pt-1'>
              <AppRoutes/>
            </div>
            <div className='flex-none'>
              <FooterComponent/>
            </div>
          </div>
        </BrowserRouter>
      </GeneralProvider>
    </div>
  )
}

export default App

// https://www.labnol.org/embed/google/drive/