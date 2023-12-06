import"./Cart.css"
import CartCupon from "./CartCupon"
import CartProgressBar from "./CartProgressBar"
import CartTable from "./CartTable"
import CartTotals from "./CartTotals"

const Cart = () => {
  return (
    <section className="cart-page">
    <div className="container">
        <div className="cart-page-wrapper">
            <form className="cart-form">
                <CartProgressBar/>
                <div className="shop-table-wrapper">
                    <CartTable/>
                   <CartCupon/>
                </div>
            </form>
            <div className="cart-collaterals">
                <CartTotals/>
            </div>
        </div>
    </div>
</section>
  )
}

export default Cart