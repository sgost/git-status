import React from "react";
// import { Link } from "gatsby"
import { BannerSection } from "./styles"
import bannerimg from "../../../images/landing/banner.svg"
import bannerimg2 from "../../../images/landing/mob_banner.png"
import animi from "../../../images/landing/bnr_animi.png"
import man from "../../../images/landing/man.png"
import Nav from "../../Nav"
import { ArrowRightOutlined } from '@ant-design/icons'


export default function Banner ()
{
    document.addEventListener("mousemove", parallax);
    function parallax(e){
        this.querySelectorAll('#img2').forEach(layer => {
            const speed = layer.getAttribute('data-speed')

            const x = (window.innerWidth - e.pageX*speed)/100
            const y = (window.innerHeight - e.pageY*speed)/100

            layer.style.transform = `translateX(${x}px) translateY(${y}px)`
        })
    }

    return (

        <BannerSection>
            <Nav />
            <div id="bannerSectionContainer">
                <div id="image_container">
                    <img src={ bannerimg } alt="img" id="img1" />
                    <img src={ bannerimg2 } alt="img" id="img2" />
                </div>
                <div id="image_matter" >
                    <div id="image_matter_b1">
                        <h1>Team productivity and business
                            intelligence, all in one.</h1>
                        <p>Discover why HotKup will be as vital to your team as that first hot cup of morning coffee.</p>
                        <div id="banner_search">
                            <input type="text" placeholder="Your email address" />
                            <button>Join Today - It’s Free<ArrowRightOutlined className="icon" /></button>
                        </div>
                    </div>
                    <div id="image_matter_b2">


                            <img src={ animi } alt="img" id="img2" data-speed="4" />
    
                            <img src={ man } alt="img" id="img2" data-speed="2"/>
                    </div>
                </div>
            </div>
        </BannerSection>
    )
}

