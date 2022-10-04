import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {FaBars} from "react-icons/fa"
import axios from 'axios';


const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    axios.get('https://www.tigmoo.com/api/index/getheader?androidid=19b6891882dc9114&StoreId=1&UserID=0', {

    })
    .then((response)=> {
      setData(response.data.bottomcategory)
      // console.log(response.data.topmenu)
    })
    setLoading(false);
  }, []);


  return (
    <>
    <div>
    {loading && <div>Loading...</div>}
    {!loading && (
      <header className='head' >
        <div className=''>
          
          <div className='' >
            <ul className='link f_flex' >
              {/* <ul className={MobileMenu ? "nav-links-MobileMenu capitalize" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}> */}
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              
              <div className='nav-left capitalize'>
                <a className='mobile-btn' onClick={() => setMobileMenu(!MobileMenu)}>
                  {MobileMenu ? <i className='fas fa-times'></i> : <FaBars/>}
                </a>
                <li className='all-and-mobile'> 
                  All
                </li>
                                    
                                  
              </div>
              {data.map((item) => {
                return (
                  <>
                    <div className="" key={item.id}>
                      <li>
                          <a href={item.CategoryURL}>{item.CategoryName}</a>
                      </li>   
                    </div>
                  </>                       
                  )
                })} 

                <div className='nav-api'>
                  <li>
                      <a href='https://www.amazon.com/'>Buy anything on Amazon & we deliver it!</a>
                  </li>
                </div>
                
            </ul>

            <ul>
              
            </ul>

            {/* <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button> */}
          </div>
        </div>
      </header>
      )}
    </div>    
    </>
  )

 
}

export default Navbar
