import React, {useEffect} from "react"
import "./Header.css"
import Head from "./Head"
import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ CartItem }) => {
  return (
    <>
      <Head CartItem={CartItem}/>
      {/* <Search CartItem={CartItem} /> */}
      <Navbar />
    </>
  )
}

export default Header
