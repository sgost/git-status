import React from "react"
// import { Link } from "gatsby"
import { ClientsSection, Detail } from "./styles"
import img from "../../../images/landing/client.png"
import quot from "../../../images/landing/quot.png"
import bnr from "../../../images/landing/bnr2.png"
import bnr2 from "../../../images/landing/email.svg"
import { Carousel } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "aos/dist/aos.css";


const Clients = () => {


return(
    <>
        <ClientsSection>
            <div id="ClientsContainer">
                <h1>Listen from our Clients</h1>
            </div>
            <Carousel>
                <Carousel.Item>
                    <div id="carousal">
                        <div id="carousal_main">
                            <div id="carousal_img_main" >
                                <img src={img} alt="img" />
                                <div id="carousal_img_main_b1">
                                    <h1>James Clear</h1>
                                    <>
                                        <p>Senior Manager, ABC Technologies Inc</p>
                                    </>
                                </div>
                            </div>
                            <div id="carousal_img_matter">
                                <h1>Excellent Choice</h1>
                                <div id="carousal_img_matter_inside">
                                    <img src={quot} alt="img" id="q1" />
                                    <p>Our team loves HotKup - it obliterates sil and digs into business data in a way tha been able to make time for until now.</p>
                                    <img src={quot} alt="img" id="q2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div id="carousal">
                        <div id="carousal_main">
                            <div id="carousal_img_main">
                                <img src={img} alt="img" />
                                <div id="carousal_img_main_b1">
                                    <h1>James Clear</h1>
                                    <>
                                        <p>Senior Manager, ABC Technologies Inc</p>
                                    </>
                                </div>
                            </div>
                            <div id="carousal_img_matter">
                                <h1>Excellent Choice</h1>
                                <div id="carousal_img_matter_inside">
                                    <img src={quot} alt="img" id="q1" />
                                    <p>Our team loves HotKup - it obliterates sil and digs into business data in a way tha been able to make time for until now.</p>
                                    <img src={quot} alt="img" id="q2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>

        </ClientsSection>
        <Detail>
            <div id="detail_container"  data-aos="fade-down"
     data-aos-anchor-placement="top-bottom">
                <img src={bnr} alt="img" id="img1" />
                <img src={bnr2} alt="img" id="img2" />
                <div id="detail_container_matter">
                    <h1>Never forget an important detail again. Get started with HotKup today.</h1>
                    <div id="detail_container_matter_mini">
                        <input type="text" placeholder="Your email address" />
                        <button>Sign up</button>
                    </div>
                </div>
            </div>

        </Detail>
    </>
)
}
export default Clients
