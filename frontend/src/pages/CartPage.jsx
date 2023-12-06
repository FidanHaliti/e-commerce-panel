import React from "react"
import Header from "../components/Layout/Header/Header"
import Policy from "../components/Layout/Policy/Policy"
import Footer from "../components/Layout/Footer/Footer"
import Payment from "../components/Layout/Payment/Payment"
import Cart from "../components/Cart/Cart"


const CartPage = () => {
  return (
   <React.Fragment>
<Header/>
<Cart/>
<Policy />
      <Footer/>
      <Payment />

   </React.Fragment>
  )
}

export default CartPage