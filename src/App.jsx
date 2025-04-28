import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbarfiles/Navbar'
import Footer from './components/footerfiles/Footer'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Service from './components/Pages/Service'
import Contact from './components/Pages/Contact'
import Signup from './components/Pages/Signup'
import Login from './components/Pages/Login'
import Cart from './components/Pages/Cart'
import Notfound from './components/Pages/Notfound'
import Search from './components/Search'
import ProductDetails from './components/Pages/ProductDetails'
import Success from './components/Pages/Success'
import { CartProvider } from './components/context/CartContext'
import Shipping from './components/Pages/Shipping'


function App() {

  return (
    <>
      <CartProvider>
      <Router>
        <Navbar/>
       
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Service' element={<Service/>}/>
          <Route path='Contact' element={<Contact/>}/>
          <Route path='Signup' element={<Signup/>}/>
          <Route path='Login' element={<Login/>}/>
          <Route path='Cart' element={<Cart/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='Search' element={<Search/>}/>
          <Route path='*' element={<Notfound/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
          <Route path='/shipping' element={<Shipping/>}/>
        </Routes>


        <Footer/>
      </Router>
    
      </CartProvider>
    </>
  )
}

export default App
