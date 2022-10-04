import React, {useEffect, useState} from "react"
import axios from 'axios';


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
      name: "Watch",
      price: 20,
    },
    {
      id: 3,
      discount: 40,
      cover: "./images/flash/flash-3.png",
      name: "Smart Mobile Black",
      price: 200,
    },
    {
      id: 4,
      discount: 40,
      cover: "./images/flash/flash-4.png",
      name: "Smart Watch Black",
      price: 50,
    },
    {
      id: 5,
      discount: 50,
      cover: "./images/flash/flash-1.png",
      name: "Shoes",
      price: 100,
    },
    {
      id: 6,
      discount: 50,
      cover: "./images/flash/flash-3.png",
      name: "Shoes",
      price: 100,
    },
  ],
}
export default Data

//Below is the API Data that will be used for products. The above data is just for demonstrations

// const Data = () => {
//   const [realdata, setData] = useState([])

//   useEffect(()=> {
//     axios.get('https://www.tigmoo.com/api/index/infinitepageforweb?androidid=19b6891882dc9114&StoreId=1&start=0&limit=5&UserID=0', {
//     })
//     .then((response)=> {
//       setData(response.data.data)
//       console.log(response.data.data)
//     })
//   }, []);
  
//   return({realdata})  
// }

// export default Data
