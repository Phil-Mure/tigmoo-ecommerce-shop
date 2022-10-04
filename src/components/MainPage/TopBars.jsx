import React, { useState, useEffect, Children, cloneElement } from "react";
// import axios from "axios";


const Data = {
    productItems: [
      {
        id: 1,
        discount: 50,
        cover: "./images/flash/flash-1.png",
        name: "Shoes",
        price: 100,
      },
      {
        id: 2,
        discount: 40,
        cover: "./images/flash/flash-2.png",
        name: "Watches",
        price: 20,
      },
      {
        id: 3,
        discount: 40,
        cover: "./images/flash/flash-3.png",
        name: "Phones",
        price: 200,
      },
      {
        id: 4,
        discount: 40,
        cover: "./images/flash/flash-4.png",
        name: "Smart Watch Black",
        price: 50,
      },
    //   {
    //     id: 5,
    //     discount: 50,
    //     cover: "./images/flash/flash-1.png",
    //     name: "Shoes",
    //     price: 100,
    //   },
    //   {
    //     id: 6,
    //     discount: 50,
    //     cover: "./images/flash/flash-3.png",
    //     name: "Shoes",
    //     price: 100,
    //   },
    ],
  }


const TopBar = ({productItems}) => {

    // console.log(productItems[1])
    // const firstprod = productItems[1]

    return (
        <>
          <section className='wrapper background-top'>
            <div className='grid2-top'>
              {Data.productItems.map((val, index) => {
                return (
                  <div className='product-top' key={index}>
                    <h3>{val.name}</h3>

                    <div className='grid2-top'>
                        <div className='category img'>
                            <img src={val.cover} alt='' />
                        </div>
                        <div className='category img'>
                            <img src={val.cover} alt='' />
                        </div>
                        <div className='category img'>
                            <img src={val.cover} alt='' />
                        </div>
                    </div>                   
                    <p style={{color:'green'}}>Shop now</p>
                  </div>
                )
              })}
            </div>
          </section>
        </>
      )

    // return (
    //     <>
    //         <section className='wrapper background'>
    //             <div className='container-top grid2'>
    //                 {productItems.map((val) => {
    //                     return (
    //                     <div className='product'>
    //                         <h3>{val.name}</h3>
    //                         {/* <img src={val.cover} alt='' />    */}
    //                         <div className='wrapper img'>
    //                             <img src={val.cover} alt='' />
    //                         </div>
    //                     </div>
    //                     )
    //                 })}
    //             </div>
    //         </section> 
    //     </>
    // );
};

export default TopBar;
