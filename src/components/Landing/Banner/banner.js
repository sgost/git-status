import React from "react";
// import { Link } from "gatsby"
import { BannerSection } from "./styles"
import bannerimg from "../../../images/landing/banner.svg"
import bannerimg2 from "../../../images/landing/mob_banner.png"
import animi2 from "../../../images/landing/bg.svg"
import man2 from "../../../images/landing/man.svg"
import Nav from "../../Nav"


export default function Banner ()
{

    const parallax = ( e ) =>
    {
        document.querySelectorAll( '.img2' ).forEach( layer =>
        {
            const speed = layer.getAttribute( 'data-speed' )

            const x = ( window.innerWidth - e.pageX * speed ) / 100
            const y = ( window.innerHeight - e.pageY * speed ) / 100

            layer.style.transform = `translateX(${x}px) translateY(${y}px)`
        } )
    }

    return (

        <BannerSection onMouseMove={ parallax }>
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
                        <button>Know more</button>
                    </div>
                    <div id="image_matter_b2">
                        <img src={ animi2 } alt="img" id="img3" className="img2" data-speed="3" />

                        <img src={ man2 } alt="img" id="img3" className="img2" data-speed="1.5" />
                    </div>
                </div>
            </div>
        </BannerSection>
    )
}

