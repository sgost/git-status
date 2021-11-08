import React from "react"
// import { Link } from "gatsby"
import { BannerSection } from "./styles"
import bannerimg from "../../../images/landing/banner.svg"
import bannerimg2 from "../../../images/landing/mob_banner.png"
import animi from "../../../images/landing/bnr_animi.png"
import Nav from "../../Nav"
import { ArrowRightOutlined } from '@ant-design/icons';

const Banner = () => (
    <BannerSection>
        <Nav/>
        <div id="bannerSectionContainer">
            <div id="image_container">
                <img src={bannerimg} alt="img" id="img1"/>
                <img src={bannerimg2} alt="img" id="img2"/>
            </div>
            <div id="image_matter">
                <div id="image_matter_b1">
                <h1 data-aos="fade-down" data-aos-duration="1000">Team productivity and business
                    intelligence, all in one.</h1>
                <p data-aos="fade-down" data-aos-duration="20000">Discover why HotKup will be as vital to your team as that first hot cup of morning coffee.</p>
                <div id="banner_search" data-aos="fade-down" data-aos-duration="40000">
                    <input type="text" placeholder="Your email address" />
                    <button>Join Today - It’s Free<ArrowRightOutlined className="icon"/></button>
                </div>
                </div>
                <div id="image_matter_b2">
                <img src={animi} alt="img" id="img2"/>
                </div>
            </div>
        </div>
    </BannerSection>
)

export default Banner
