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
    <div className=''>
      <BrowserRouter>
        <Navbar/>
        <AppRoutes/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

// https://www.labnol.org/embed/google/drive/