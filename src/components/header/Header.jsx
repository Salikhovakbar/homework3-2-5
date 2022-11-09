import './Header.css'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import  { BsSearch }  from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import logo from '../../assets/image/logo.svg'
const Header = () => {

    return(
<header>
    <form action="">
<button className='btn-menu'>  <HiOutlineMenuAlt2/> Menu </button>
<div className="header-input">
 <i className='search-icon'><BsSearch/></i>   <input className='input-search' placeholder='Searc' type="text" />
</div>
</form>
<div className="header-logo">
 <img className='logo' src={logo} alt="" />
</div>
<div className="header-option-propeties">
<div className="header-payment-box">
    <i><AiOutlineUser/></i>
    <i><AiOutlineHeart/></i>
    <i><AiOutlineShoppingCart/></i>
</div>

<div className="header-select">
    <select name="" id="" className="select-language">
        <option value="">ENG</option>
        <option value="">RU</option>
        <option value="">UZ</option>
    </select>
    <select name="" id="" className="select-currency">
        <option value="">USD</option>
        <option value="">SOM</option>
        <option value="">RUB</option>
    </select>
</div>
</div>
</header>
    )
}
export default Header