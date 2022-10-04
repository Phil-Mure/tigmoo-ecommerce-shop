import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Worldwide Delivery",
      decs: "With International Shopping option, you can now order any item from Amazon and Tigmoo will take care of the rest! You therefore buy online with trust and confidence that your transaction is secure.",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Safe Payment",
      decs: "Tigmoo has payment options that suit everyone and have a payment-on-delivery option for extra convenience. Shopping online in Zambia has then become easy and convenient.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Shop With Confidence ",
      decs: "Shoppers get an amazing shopping experience and good deals on a wide range of cosmetics, fashion jewellery,smart phones, tablets, accessories, home appliances and much more.",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "24/7 Support ",
      decs: "We offer the best customer support service anyday, anytime.",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
