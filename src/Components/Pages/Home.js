import React from 'react'
import TopCard from '../TopCard/TopCard'
import Header from '../Header/Header'
import { Cards } from '../Cards/Cards'
import Enquiry from '../Enquiry/Enquiry'
import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <div>
        <TopCard />
        <Header />
        <Cards />
        <Enquiry />
        <Footer />
    </div>
  )
}

export default Home