import './MainBody.css'
import photoOne from '../../assets/image/Main-picture-one.svg'
import photoTwo from '../../assets/image/Main-picture-two.svg'
import photoThree from '../../assets/image/Main-picture-three.svg'
import photoFour from '../../assets/image/Main-picture-four.svg'
import colors from '../../assets/image/colors.svg'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsCartPlus } from 'react-icons/bs'
const MainBody = () => {
    return(
<div className="main-part">
<div className="img-box">
        <h1>Are you ready to <br /> <strong>lead the way</strong></h1>
        <p className='text'>Luxury meets ultimate sitting comfort</p>
        <div className="hero-btn">
<button className='btn-follow'>Discover <AiOutlineArrowRight/></button>
        </div>
</div>

<div className="products-box">
    <div className="product">
        <div className="first-img img-product">
<img className='product-img' src={photoOne} alt="" />
</div>
<h4 className="product-name">Nike air</h4>
<p className="product-price"> $180,00    <span className='discount-price'>$289,00</span></p>
<div className="colors-box">
<button className="btn-color">Colors</button>  <img src={colors} alt="" />
</div>
<button className='btn-buy'>Add to cart <BsCartPlus/></button>
    </div>
    <div className="product">
    <div className="second-img img-product">
<img className='product-img' src={photoTwo} alt="" />
</div>
<h4 className="product-name">Air Jordan</h4>
<p className="product-price">$199,00 <span className='discount-price'>$289,00</span></p>
<div className="colors-box">
<button className="btn-color">Colors</button>  <img src={colors} alt="" />
</div>
<button className='btn-buy'>Add to cart <BsCartPlus/></button>
    </div>
        <div className="product">
        <div className="third-img img-product">
<img className='product-img' src={photoThree} alt="" />
</div>
<h4 className="product-name">Nike Netro</h4>
<p className="product-price"> $135,000 <span className='discount-price'>$289,00</span></p>
<div className="colors-box">
<button className="btn-color">Colors</button>  <img src={colors} alt="" />
</div>
<button className='btn-buy'>Add to cart <BsCartPlus/></button>
    </div>
    <div className="product">
    <div className="fourth-img img-product">
<img className='product-img' src={photoFour} alt="" />
</div>
<h4 className="product-name">Air Spain</h4>
<p className="product-price"> $149,00   <span className='discount-price'>$199,00</span></p>
<div className="colors-box">
<button className="btn-color">Colors</button>  <img src={colors} alt="" />
</div>
<button className='btn-buy'>Add to cart <BsCartPlus/></button>
    </div>
</div>
</div>
    )

}
export default MainBody