import React from 'react'
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import Header from '../components/header/Header' ;
import Footer from '../components/footer/Footer' ;
import Home from './home/Home';
import Page from './page/Page';
import Destinations from './destinations/Destinations';
import Tours from './tours/Tours';


const Pages = () => {
  return (
    <BrowserRouter>
        <Header /> 

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pages' element={<Page />} />
            <Route path='/destinations' element={<Destinations />} />
            <Route path='/tours' element={<Tours />} />
        </Routes>

        <Footer />
    </BrowserRouter>
  )
}

export default Pages