import React, {useState, useEffect, Children, cloneElement} from "react"
import axios from 'axios';
import "./style.css"
import { AiFillInstagram, AiOutlineTwitter, AiOutlineFacebook, AiOutlineYoutube} from 'react-icons/ai';

const Footer = () => {

  const [data, setData] = useState([])
  const [achild, setAChild] = useState([])
  const [anewchild, setANewAChild] = useState()

  useEffect(() => {
    axios.get('https://www.tigmoo.com/api/index/getfooter', {
        
      })
      .then((response) => {
        setData(response.data.footer);
        // console.log(response.data.footer) 
      })
      
  }, []);
  
  return (
    <>
      <footer>
        <div className='container grid3'>
          <div className='box'>
            <h1>Tigmoo</h1>
            <p>Tigmoo is an excellent online ecommerce offering the best shopping experience for all your shopping needs.</p>
            <div className='icon d_flex'>
              <div className='img d_flex' style={{margin:2}}>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex' style={{margin:2}}>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          {data.map((item) => {
            return(
              <>
                <div className='box' key={item.id}>
                  <h4 >{item.title}</h4>
                  <ul>
                    {item.child.map((aitem) => { 
                      return( 
                        <a href={aitem.link} style={{color:'white'}}>
                          <li className={aitem.className} key={aitem.id}>{aitem.title}</li>
                        </a>                                            
                     )
                    })}  
                  </ul>
                </div>
              </>
            )
          })}
          
          {/* <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
            </ul>
          </div> */}

          {/* <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div> */}

          {/* <div className='box'>
            <h2>Social Links</h2>
            <a className='icons' href="https://web.facebook.com/tigmoo.zm">
              <AiOutlineFacebook />
            </a>
            <a className='icons' href='https://www.instagram.com/tigmooOnline/'>
              <AiFillInstagram />
            </a>
            <a className='icons' href='https://twitter.com/tigmooOnline'>
              <AiOutlineTwitter />
            </a>
            <a className='icons' href='https://www.youtube.com/c/TigmooOnline'>
              <AiOutlineYoutube />
            </a>
            
          </div> */}

          {/* <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Plot 6392 Dundudza Chididza Road Longacres Lusaka, Zambia </li>
              <li>Email: info@tigmoo.com</li>
              <li>Phone: +260 9666 22222</li>
            </ul>
          </div> */}
        </div>
      </footer>
    </>
  )
}

export default Footer
