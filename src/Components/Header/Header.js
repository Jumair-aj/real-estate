import React from 'react'
import './Header.css'


function Header() {
  return (
    <div className="header-container">
        <nav className="header">
            <div className="logo-div">
                <a href="/"><img src="images/logo.png" alt="Company logo" className='img-logo'/></a>
            </div>
            <div className="nav-div">
                <ul className="nav-items">
                    <li className="nav-item">
                        Home
                    </li>
                    <li className="nav-item">
                        About
                    </li>
                    <li className="nav-item">
                        Buy
                    </li>
                    <li className="nav-item">
                        Rent
                    </li>
                    <li className="nav-item">
                        Contact
                    </li>

                </ul>

            </div>
            <div className="header-btns">
                <button className='header-btn'>Contact Us</button>
            </div>
        </nav>
    </div>
  )
}

export default Header