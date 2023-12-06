import Account from "../components/Account/Account"
import Footer from "../components/Layout/Footer/Footer"
import Header from "../components/Layout/Header/Header"
import Payment from "../components/Layout/Payment/Payment"
import Policy from "../components/Layout/Policy/Policy"


const AccountPage = () => {
  return (
    <>
    <Header/>
    <Account/>
    <Policy />
      <Footer />
      <Payment />
    </>
  )
}

export default AccountPage