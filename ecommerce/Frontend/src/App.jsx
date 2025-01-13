import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import CreateProduct from './components/admin/CreateProduct'
import AdminLogin from './components/Admin/AdminLogin'
import First from './components/QRCode/First'
import Second from './components/QRCode/Second'
import Third from './components/QRCode/Third'
import Four from './components/QRCode/Four'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/admin' element={<AdminLogin/>}/>
        <Route path='/admin/create-product' element={<CreateProduct />} />
        <Route path='/first' element={<First/>}/>
        <Route path='/second' element={<Second/>}/>
        <Route path='/third' element={<Third/>}/>
        <Route path='/four' element={<Four/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
