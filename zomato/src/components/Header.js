import React from 'react';
import './Header.css';
const Header = () => {
    return(
        <div>
            <header>
                <div className="title"><h2>Zomato</h2></div>
                <div className="autentication">
                    {/* <i class="fa-solid fa-moon"></i> */}
                    <button>LogIn</button>
                    <button>Sign In</button>
                </div>
            </header>
        </div>
    )
}
export default Header;