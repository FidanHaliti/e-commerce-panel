import React from "react";
import Blogs from "../components/Blog/Blogs";
import Brands from "../components/Brands/Brands";
import CampaignSingle from "../components/Campaign/CampaignSingle";
import Campaigns from "../components/Campaigns/Campaigns";
import Categories from "../components/Categories/Categories";


import Products from "../components/Products/Products";
import Sliders from "../components/Slider/Sliders/";
import Search from "../components/Modals/Search/Search";

const HomePage = () => {
  return (
    <React.Fragment>
  <Search/>
      <Sliders />
      <Categories />
      <Products />
      <Campaigns />
      <Blogs />
      <Brands />
      <CampaignSingle />
     
    </React.Fragment>
  );
};

export default HomePage;
