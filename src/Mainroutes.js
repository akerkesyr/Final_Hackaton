import { HolidayVillage } from '@mui/icons-material'
import React from 'react'
import { Routes, Route} from 'react-router-dom'
import AddProduct from './Components/Admin/AddProduct'
import Authorization from './Components/Auth/Auth'
import Footer from './Components/Footer/Footer'
import HomePage from './Components/HomePage/HomePage'
import LiveSearch from './Components/LiveSearch/LiveSearch'
import ProductsList from './Components/ProductsList/ProductsList'

const Mainroutes = () => {
  return (
    <Routes>
      <Route path='/auth' element = {<Authorization/>} />
      <Route path='/footer' element = {<Footer/>} />
      <Route path='AddProduct' element = {<AddProduct/>} />
      <Route path='/' element = {<HomePage/>} />
      <Route path='/liveSearch' element = {<LiveSearch/>} />
      <Route path='/ProductsList' element = {<ProductsList/>} />
    </Routes>
  )
}

export default Mainroutes