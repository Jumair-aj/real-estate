import React, { useContext, useEffect, useState } from 'react'
import { PropContext } from '../../Store/Context'
import { properties } from '../Properties/Properties'
import './CardItem.css'

function CardItem() {
    const searchTerm = useContext(PropContext) 
    const [propertyItems, setPropertyItems] = useState([])
    useEffect(() => {
      setPropertyItems(properties)
console.log(searchTerm);
    }, [])
    
  return (
  <section className="properties"> 
  <div className="property-container">
{propertyItems.filter(propertyItem=>propertyItem.status===searchTerm? propertyItem : '').map((propertyItem) =>{
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
                    <span>{propertyItem.bed} beds</span>
                    </div>
                        <div className="properties-bed">
                    <i className="fa-solid fa-sink"></i>
                    <span>{propertyItem.bed} Bathrooms</span>
                    </div>
                        <div className="properties-bed">
                    <i className="fa-solid fa-bed"></i>
                    <span>{propertyItem.bed} m<sup style={{fontSize:'8px'}}>2</sup></span>
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