import React from 'react'
import Banner from '../Components/Banner/Banner'
import CardItem from '../Components/CardItem/CardItem'
import Header from '../Components/Header/Header'

function Home() {
  return (
    <>
    <Header/>
    <hr style={{borderTop:'none'}}/>
    <Banner/>
    <CardItem/>
    </>
  )
}

export default Home