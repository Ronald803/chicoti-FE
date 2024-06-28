import {useRoutes,BrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MissingAnimalsPage from './pages/MissingAnimalsPage'
import FoundAnimalsPage from './pages/FoundAnimalsPage'
import HomelessAnimalsPage from './pages/HomelessAnimalsPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CreateUserForm from './components/forms/CreateUserForm'
import LoginForm from './components/forms/LoginForm'
import UrlImageFIxerPage from './pages/UrlImageFIxerPage'
import NavBar from './components/organisms/NavBar'
import FooterComponent from './components/organisms/FooterComponent'



const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/',          element: <HomePage/>},
    { path: '/missing',   element: <MissingAnimalsPage/>},
    { path: '/found',     element: <FoundAnimalsPage/>},
    { path: '/homeless',  element: <HomelessAnimalsPage/>},
    { path: '/new-user',  element: <CreateUserForm/>},
    { path: '/login',     element: <LoginForm/>},
    { path: '/urlImage',  element: <UrlImageFIxerPage/> }
  ])
  return routes
}

function App() {
  return (
    <div className='font-playwriteGBS'>
      <BrowserRouter>
        <div className='flex flex-col max-h-screen'>
          <div className='flex-none'>
            <NavBar/>
          </div>
          <div className='flex-grow overflow-y-auto'>
            <AppRoutes/>
          </div>
          <div className='flex-none'>
            <FooterComponent/>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

// https://www.labnol.org/embed/google/drive/