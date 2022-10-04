import React, { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"

function App() {

  const [data, setData] = useState([])

  useEffect(()=> {
    axios.get('https://www.tigmoo.com/api/index/infinitepageforweb?androidid=19b6891882dc9114&StoreId=1&start=0&limit=5&UserID=0', {
    })
    .then((response)=> {
      setData(response.data.data.Content[1])
      console.log(response.data.data.Content[0])
    })
  }, []);


  //Step 1 :
  const { productItems } = Data
  const { shopItems } = Sdata

  //Step 2 :
  const [CartItem, setCartItem] = useState([])

  //Step 4 :
  const addToCart = (product) => {
    // We first check if product already exists in the cart
    const productExit = CartItem.find((item) => item.id === product.id)
    // if productExist already exist in cart then will run fun() => setCartItem
    // and inside => setCartItem will run => map() to check for each cart item
    // if item.id is equal to product.id, that means we already have the product in the cart
    // and we don't have to add it to the cart again
    // We only have to increase  product QTY by 1
    // if item and product doesnt match then we will add new items, meaning, adding the product
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      // but if the product doesnt exit in the cart or if the cart is empty
      // then new product is added in cart  and its qty is initalize to 1
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  // Stpe: 6
  const decreaseQty = (product) => {
    // if product is already in cart we then find it
    const productExit = CartItem.find((item) => item.id === product.id)

    // if product is exists and its qty is 1 then we will run a fun()  setCartItem
    // inside  setCartItem we will run filter to check if item.id matches with product.id
    // if the item.id doesn't match to product.id then that item is displayed in the cart
    // else
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      // if product exists and qty  of that produt is not equal to 1
      // then will run function call setCartItem
      // inside setCartItem we will run map method
      // this map() will check if item.id matches to produt.id  then we have to desc the qty of product by 1
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Switch>
          <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App

// "start": "serve -s build", This is a script for deploying to heroku. It's kept in here because no comments are allowed in json