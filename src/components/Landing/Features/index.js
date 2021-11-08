import React, {useEffect} from "react"
// import { Link } from "gatsby"
import { FeaturesSection, FeaturesSection2 } from "./styles"
import img from "../../../images/landing/card1.png"
import img2 from "../../../images/landing/card2.png"
import img3 from "../../../images/landing/card3.png"
import img4 from "../../../images/landing/card4.png"
import img5 from "../../../images/landing/m_card1.png"
import img6 from "../../../images/landing/m_card2.png"
import { ArrowRightOutlined } from '@ant-design/icons';
import Aos from "aos";
import "aos/dist/aos.css";

const Features = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])


    return(
    <>
        <FeaturesSection>
            <div id="FeaturesContainer">
                <h1 data-aos="fade-down" data-aos-duration="1000">Features</h1>
                <h2 data-aos="fade-down" data-aos-duration="500">We save users time by reducing the volume of project follow-ups and feedback; while delivering key metrics that other multifunctional tools do not.</h2>
            </div>
            <div id="Feature_card_container">
                <div id="card" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                    <div id="card_img">
                        <img src={img} alt="img" />
                    </div>
                    <div id="card_matter">
                        <h1 data-aos="fade-right">Task automation</h1>
                        <p data-aos="fade-right">Create new project tasks, schedule a task, or create a recurring task. Get much-needed visibility into assigned work, completed tasks, and overdue tasks.</p>
                        {/* <p style={{fontSize:`12px`}}>Create new project tasks, schedule a task, or create a recurring task. Get much-needed visibility into assigned work, completed tasks, and overdue tasks.</p> */}
                        <button data-aos="fade-right">Learn More<ArrowRightOutlined className="icon" /></button>
                    </div>
                </div>
                <div id="card" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                    <div id="card_img">
                        <img src={img2} alt="img" />
                    </div>
                    <div id="card_matter">
                        <h1 data-aos="fade-left">Calendar view</h1>
                        <p data-aos="fade-left">Our calendar view enables you look at project work visually and measure elapsed time.</p>
                        <button data-aos="fade-left">Learn More<ArrowRightOutlined className="icon" /></button>
                    </div>
                </div>
                <div id="card" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                    <div id="card_img">
                        <img src={img3} alt="img" />
                    </div>
                    <div id="card_matter">
                        <h1 data-aos="fade-right">Run reports</h1>
                        <p data-aos="fade-right">Monitor business activity by generating reports on everything from quality testing to wastage.</p>
                        <button data-aos="fade-right">Learn More<ArrowRightOutlined className="icon" /></button>
                    </div>
                </div>
                <div id="card" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                    <div id="card_img">
                        <img src={img4} alt="img" />
                    </div>
                    <div id="card_matter">
                        <h1 data-aos="fade-left">Communicate with chat</h1>
                        <p data-aos="fade-left">Stay in continous communication by starting a 1:1 chat, category chat, or group chat.</p>
                        <button data-aos="fade-left">Learn More<ArrowRightOutlined className="icon" /></button>
                    </div>
                </div>
            </div>
        </FeaturesSection>

        <FeaturesSection2>
            <div id="Features2Container">
                <div id="card">
                    <img src={img5} alt="img" data-aos="fade-down" data-aos-duration="500"/>
                    <h1 data-aos="fade-down" data-aos-duration="700">See Our Pricing</h1>
                    <p data-aos="fade-down" data-aos-duration="1000">Whether your team is a small-to-mid-size business, or a large enterprise we have a solution for you</p>
                    <button data-aos="fade-down" data-aos-duration="1500">HotKup Pricing<ArrowRightOutlined className="icon" /></button>
                </div>
                <div id="card">
                    <img src={img6} alt="img" data-aos="fade-down" data-aos-duration="500"/>
                    <h1 data-aos="fade-down" data-aos-duration="700">Tour HotKup</h1>
                    <p data-aos="fade-down" data-aos-duration="1000">Find out firsthand what it's like to use HotKup. Explore cool features.</p>
                    <button data-aos="fade-down" data-aos-duration="1500">Take a Tour<ArrowRightOutlined className="icon" /></button>
                </div>
            </div>

        </FeaturesSection2>
    </>
)
    }

export default Features
