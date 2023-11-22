import React from "react";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from "react-router-dom"; 
// The content of the matched route is inserted into the "outlet," 
// allowing you to create a consistent layout 
// while changing the content dynamically based on the route.


// layout serves as a common structure for multiple pages/views within application
// beech ka change ho rha but header and footer stay in place

function Layout () {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout
