import React from 'react'
import './Banner.css'

function Banner() {
  return (
   <div className="banner">
        <div className="banner-container">
            <div className="img-div">
            <img src="images/banner.jpg" alt="" className='banner-img'/>
            </div>
            <div className="banner-content">
                <h1>Let's find a home <br/>that's perfect  for you</h1>
                <p>Find your dream home with few clicks</p>
                <div className="search-bar">
                    <form action="">
                        <div className="form-group">
                        <label htmlFor="">Location</label>
                        <input type="text" className='search-input' placeholder='New York'/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="">Location</label>
                        <input type="text" className='search-input'  placeholder='New York'/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="">Location</label>
                        <input type="text" className='search-input'  placeholder='New York'/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="">Price</label>
                        <input type="text" className='search-input'  placeholder='New York'/>
                        </div>
                        <div className="form-group">
                        <button className='search-btn'>Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
   </div>
  )
}

export default Banner