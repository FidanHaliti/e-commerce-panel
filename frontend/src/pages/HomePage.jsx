import React from "react";
import Blogs from "../components/Blog/Blogs";
import Brands from "../components/Brands/Brands";
import CampaignSingle from "../components/Campaign/CampaignSingle";
import Campaigns from "../components/Campaigns/Campaigns";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import Payment from "../components/Layout/Payment/Payment";
import Policy from "../components/Layout/Policy/Policy";
import Products from "../components/Products/Products";
import Sliders from "../components/Slider/Sliders/";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <Sliders />
      <Categories />
      <Products />
      <Campaigns />
      <Blogs />
      <Brands />
      <CampaignSingle />
      <Policy />
      <Footer />
      <Payment />
    </React.Fragment>
  );
};

export default HomePage;
