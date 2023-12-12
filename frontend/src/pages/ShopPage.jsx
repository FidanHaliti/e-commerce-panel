import { Fragment } from "react"
import Categories from "../components/Categories/Categories"
import Products from "../components/Products/Products"
import CampaignSingle from "../components/Campaign/CampaignSingle"



const ShopPage = () => {
  return (
    <Fragment>
      
       <Categories />
       <Products/>
       <CampaignSingle />
       

    </Fragment>
  )
}

export default ShopPage