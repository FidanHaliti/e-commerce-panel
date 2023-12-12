import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import Payment from "../Layout/Payment/Payment";
import Proptypes from "prop-types";
import Policy from "../Layout/Policy/Policy";
import { useState } from "react";
import Search from "../Modals/Search/Search";
import Dialog from "../Modals/Dialog/Dialog";
import { useEffect } from "react";


const MainLayout = ({ children }) => {
  const [isSearchShow, setIsSearchShow] = useState(false)
  const [isDialogShow, setIsDialogShow] = useState(false)

  useEffect(() => {
    const dialogStatus = localStorage.getItem("dialog")
    ? JSON.parse(localStorage.getItem("dialog"))
    : localStorage.setItem("dialog", JSON.stringify(true))
  
    setTimeout(() => {
      setIsDialogShow(dialogStatus)
    }, 2000); 
    }, []);


  return (
    <div className="main-layout">
      <Dialog isDialogShow={isDialogShow} setIsDialogShow={setIsDialogShow}/>
      <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow}/>
      <Header setIsSearchShow={setIsSearchShow}/>
      {children}
      <Policy />
      <Footer />
      <Payment />
      </div>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: Proptypes.node,
};
