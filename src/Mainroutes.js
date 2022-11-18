import React from 'react'
import { Routes, Route} from 'react-router-dom'
import AddProduct from './Components/Admin/AddProduct'
import Authorization from './Components/Auth/Auth'
import Basket from './Components/Basket/Basket'
import Footer from './Components/Footer/Footer'
import HomePage from './Components/HomePage/HomePage'
import ProductsList from './Components/ProductsList/ProductsList'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import EditProduct from './Components/Admin/EditProduct/EditProduct'
import LiveSearch from './Components/LiveSearch/LiveSearch'
import Booking from './Components/Booking/Booking'


const Mainroutes = () => {
  return (
    <Routes>
      <Route path='/' element = {<HomePage/>} />
      <Route path='/auth' element = {<Authorization/>} />
      <Route path='/footer' element = {<Footer/>} />
      <Route path='add' element = {<AddProduct/>} />
      <Route path='edit/:id' element = {<EditProduct/>}/>
      <Route path='/favourites' element = {<Basket/>} />
      <Route path='/productList' element = {<ProductsList/>} />
      <Route path='/liveSearch' element = {<LiveSearch/>} />
      <Route path='/productDetails/:id' element={<ProductDetails/>}/>
      <Route path='/booking' element = {<Booking/>} />
    </Routes>
  )
}

export default Mainroutes