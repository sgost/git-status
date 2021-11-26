import React, {useEffect} from "react"
import Banner from "../components/Landing/Banner/banner"
import Aos from "aos";


const IndexPage = () => {

  useEffect(() => {
    Aos.init({duration: 700});
  }, [])


  return (
    <div style={{overflow: 'hidden'}}> 
      <Banner />
    </div>
  )
}
export default IndexPage
