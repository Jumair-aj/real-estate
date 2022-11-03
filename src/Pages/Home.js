import React from 'react'
import Banner from '../Components/Banner/Banner'
import CardItem from '../Components/CardItem/CardItem'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

function Home() {
  return (
    <>
    <Header/>
    <hr style={{borderTop:'none'}}/>
    <Banner/>
    <CardItem/>
    <hr style={{borderTop:'none',marginTop:'5px'}}/>
    <Footer/>
    </>
  )
}

export default Home