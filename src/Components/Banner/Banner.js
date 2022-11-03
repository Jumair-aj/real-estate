import React, { useContext, useState } from 'react'
import { PropContext } from '../../Store/Context'
import './Banner.css'


function Banner() {

    const handleLogin =(e)=>{
        e.preventDefault()
    }
    
    const {setSearchTerm} = useContext(PropContext)
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
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                        <label htmlFor="">Location</label>
                        <input type="text" name="location" onChange={e=>setSearchTerm(e.target.value)} className='search-input' placeholder='New York'/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="">Type</label>
                        {/* <input type="text" className='search-input'  placeholder='New York'/> */}
                        <select name="type" id=""  placeholder='' className='search-input'>

                            <option value="">Select Type</option>
                            <option value="buy">Buy</option>
                            <option value="rent">Rent</option>
                        </select>
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
                        <button type='submit' className='search-btn'>Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
   </div>
  )
}

export default Banner