import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/footer/Footer';
import { Outlet } from 'react-router-dom';

function Route() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Route;