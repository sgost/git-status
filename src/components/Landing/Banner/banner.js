import React from "react";
// import { Link } from "gatsby"
import { BannerSection } from "./styles"
import bannerimg from "../../../images/landing/banner.svg"
import bannerimg2 from "../../../images/landing/mob_banner.png"
import animi2 from "../../../images/landing/bg.svg"
import tree from "../../../images/landing/tree.svg"
import man2 from "../../../images/landing/man.svg"
import Nav from "../../Nav"
import Ripples from 'react-ripples'


export default function Banner ()
{

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
                        <h1>Earn Peacefully</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, leo convallis adipiscing interdum mi. Scelerisque sit</p>
                        <Ripples color="#fff" during={2200}>
                        <button type="button">Know more</button>
                        </Ripples>
                    </div>
                    <div id="image_matter_b2">
                        <img src={ tree } alt="img" id="img3" className="img2" />
                        <img src={ animi2 } alt="img" id="img3" className="img2" />
                        <img src={ man2 } alt="img" id="img3" className="img2" />
                    </div>
                </div>
            </div>
        </BannerSection>
    )
}

