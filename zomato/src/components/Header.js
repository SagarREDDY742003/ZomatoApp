import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
const Header = () => {
    return(
        <div>
            <header>
                <Link to={'/'}>
                <div className="title"><h2>Zomato</h2></div>
                </Link>
                
                <div className="autentication">
                    <Link to={'/cart'}><button className='cart'><i class="fa-solid fa-cart-shopping"></i></button></Link>
                    <Link><button>LogIn</button></Link>
                    <Link><button>Sign In</button></Link>                    
                </div>
            </header>
        </div>
    )
}
export default Header;