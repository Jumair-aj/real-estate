import React, { useState } from 'react'
import './CardItem.css'

function CardItem() {
    const [propertyItems, setPropertyItems] = useState([{name:'Great Home',url:'https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607',price:'300',address:'212 Fifth Avenue, New York City',bed:'4'},{name:'Beverly SpringField',url:'https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607',price:'300',address:'New York City 212 Fifth Avenue'},{name:'Great Home',url:'https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607',price:'300',address:'New York City 212 Fifth Avenue'}])
  return (
  <section className="properties"> 
  <div className="property-container">
{propertyItems.map((propertyItem) =>{
    return(
    <div className="card">
        <div className="card-container">
            <div className="card-img">
                <img src={propertyItem.url} className='' alt="" />
            </div>
            <div className="card-content">
                <div className="price-container">
                    <p>${propertyItem.price}</p>
                </div>
                <div className="property-name">
                <h3>{propertyItem.name}</h3>
                </div>
                    <div className="property-address">
                        <h6>{propertyItem.address}</h6>
                    </div>
                    <hr />
                    {/* <FontAwesomeIcon icon="fa-light fa-bed-front" /> */}
                    <div className="properties-icon-section">
                        <div className="properties-bed">
                    <i className="fa-solid fa-bed"></i>
                    <span>{propertyItem.bed} bed</span>
                    </div>
                        <div className="properties-bed">
                    <i className="fa-solid fa-sink"></i>
                    <span>{propertyItem.bed} Bathroom</span>
                    </div>
                        <div className="properties-bed">
                    <i className="fa-solid fa-bed"></i>
                    <span>{propertyItem.bed} bed</span>
                    </div>
                    </div>
                </div>
        </div>
    </div>
    )
})}
</div>
    </section>
  )
}

export default CardItem