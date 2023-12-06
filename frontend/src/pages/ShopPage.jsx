import { Fragment } from "react"

import Header from "../components/Layout/Header/Header"
import Categories from "../components/Categories/Categories"
import Products from "../components/Products/Products"
import CampaignSingle from "../components/Campaign/CampaignSingle"
import Policy from "../components/Layout/Policy/Policy"
import Footer from "../components/Layout/Footer/Footer"
import Payment from "../components/Layout/Payment/Payment"


const ShopPage = () => {
  return (
    <Fragment>
       <Header/>
       <Categories />
       <Products/>
       <CampaignSingle />
       <Policy />
      <Footer />
      <Payment />

    </Fragment>
  )
}

export default ShopPage