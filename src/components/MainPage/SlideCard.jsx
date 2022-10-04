import React, {useState, useEffect} from "react"
import axios from 'axios';
// import Sdata from "./Sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const SlideCard = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://www.tigmoo.com/api/index/getheader?androidid=19b6891882dc9114&StoreId=1&UserID=0', {
        
      })
      .then((response) => {
        setData(response.data.bannerArray);
      })
      setLoading(false);
      
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }

  
  return (
    
    <>
    <div>
    {loading && <div>Loading...</div>}
        {!loading && (
          <Slider {...settings}>
          {data.map((item) => {
            return (
              <>
                <div className='slide' key={item.id}>
                  
                  {/* <div className='left'> */}
                    {/* <h1>{item.title}</h1>
                    <p>{item.title}</p> */}
                    {/* <button className='btn-primary'>Visit Collections</button> */}
                  {/* </div> */}
                  {/* <div className=''> */}
                    <a href={item.link}>
                      <img src={item.url} alt='' href={item.link}/>
                    </a>                  
                  {/* </div> */}
                </div>
              </>
            )
          })}
        </Slider>
        )}
    </div>
    
      
    </>
  )
}

export default SlideCard
