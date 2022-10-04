import React from "react"
import Categories from "./Categories"
import "./Home.css"
import SliderHome from "./Slider"
import TopBar from "./TopBars"

const Home = () => {
  return (
    <>
      <section className=''>
        <div className=''>
          {/* <Categories /> */}
          <SliderHome />
          {/* <TopBar productItems={productItems} /> */}
        </div>
      </section>
    </>
  )
}

export default Home
