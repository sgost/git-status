import React, {useEffect} from "react"
import Banner from "../components/Landing/Banner/banner"
import Illuminating from "../components/Landing/Illuminating"
import Features from "../components/Landing/Features"
import Clients from "../components/Landing/Clients"
import Footer from "../components/Landing/Footer"
import Aos from "aos";


const IndexPage = () => {

  useEffect(() => {
    Aos.init({duration: 700});
  }, [])


  return (
    <div style={{overflow: 'hidden'}}> 
      <Banner />
      {/* <Illuminating />
      <Features />
      <Clients />
      <Footer /> */}
    </div>
  )
}
export default IndexPage
