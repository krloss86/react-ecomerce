import React from 'react'
import { Outlet } from 'react-router-dom'
import MensajeriaComponent from '../components/mensaje/MensajeriaComponent';
import NavbarComponent from "../components/articulos/NavbarComponent";

const Layout = () => {
  return (
    <>
        <NavbarComponent />
        <MensajeriaComponent />
        <div className="container">
            <Outlet/>
        </div>
    </>
  )
}


export default Layout;