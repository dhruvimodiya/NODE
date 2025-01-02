import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import HeroSection from './components/HeroSection'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<HeroSection/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
