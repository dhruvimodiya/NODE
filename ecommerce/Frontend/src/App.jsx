import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import OtpVerification from './components/OtpVerification'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/otp-verification' element={<OtpVerification/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
