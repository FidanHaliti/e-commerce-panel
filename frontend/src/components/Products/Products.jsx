import { useState } from "react"
import "./Products.css"
import PropTypes from "prop-types"
import ProductsItem from "./productsItem"
import ProductData from "../../data.json"
import Slider from "react-slick"

function NextBtn({onClick}){
  return( <button className="glide__arrow glide__arrow--right" onClick={onClick}>
  <i className="bi bi-chevron-right"></i>
</button>)
}
NextBtn.propTypes = {
  onClick:PropTypes.func,
}

function PrevBtn({onClick}){
return(<button className="glide__arrow glide__arrow--left" onClick={onClick}>
<i className="bi bi-chevron-left"></i>
</button>
)}
PrevBtn.propTypes = {
  onClick:PropTypes.func,
}
  

const Products = () => {
  const [products] = useState(ProductData)
  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {breakpoint: 960, settings: {slidesToShow: 2}},
      {breakpoint: 560, settings: {slidesToShow: 1}},
      
    ],
    nextArrow: <NextBtn/>,
    prevArrow: <PrevBtn/>,
    autoplaySpeed:3000,
    autoplay: true
  };
  return (
    <section className="products">
    <div className="container">
      <div className="section-title">
        <h2>Featured Products</h2>
        <p>Summer Collection New Morden Design</p>
      </div>
      <div className="product-wrapper product-carousel">
        <div className="glide__track" data-glide-el="track">
            <Slider {...sliderSettings}>
              {products.map((product) => (
                <ProductsItem product={product} key={product.id}/>
              ))}
              
            </Slider>
        </div>
        
      </div>
    </div>
  </section>
  )
}

export default Products


