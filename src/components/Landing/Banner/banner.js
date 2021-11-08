import React from "react";
// import { Link } from "gatsby"
import { BannerSection } from "./styles"
import bannerimg from "../../../images/landing/banner.svg"
import bannerimg2 from "../../../images/landing/mob_banner.png"
import animi from "../../../images/landing/bnr_animi.png"
import man from "../../../images/landing/man.png"
import Nav from "../../Nav"
import { ArrowRightOutlined } from '@ant-design/icons'
import { useSpring, animated } from 'react-spring';


const calc = ( x, y ) => [ -( y - window.innerHeight / 2 ) / 20, ( x - window.innerWidth / 2 ) / 20, 1 ]
const trans = ( x, y, s ) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function Banner ()
{

    const [ props, set ] = useSpring( () => ( { xys: [ 0, 0, 1 ], config: { mass: 10, tension: 200, friction: 50 } } ) )

    return (

        <BannerSection>
            <Nav />
            <div id="bannerSectionContainer">
                <div id="image_container">
                    <img src={ bannerimg } alt="img" id="img1" />
                    <img src={ bannerimg2 } alt="img" id="img2" />
                </div>
                <div id="image_matter" >
                    <div id="image_matter_b1" data-aos="fade-up"
                            data-aos-delay="4000">
                        <h1 data-aos="fade-up">Team productivity and business
                            intelligence, all in one.</h1>
                        <p data-aos="fade-up">Discover why HotKup will be as vital to your team as that first hot cup of morning coffee.</p>
                        <div id="banner_search" data-aos="fade-up">
                            <input type="text" placeholder="Your email address" />
                            <button>Join Today - It’s Free<ArrowRightOutlined className="icon" /></button>
                        </div>
                    </div>
                    <div id="image_matter_b2">
                        <animated.div onMouseMove={ ( { clientX: x, clientY: y } ) => ( set( { xys: calc( x, y ) } ) ) }
                            onMouseLeave={ () => set( { xys: [ 0, 0, 1 ] } ) }
                            style={ {
                                transform: props.xys.interpolate( trans )
                            } }>
                            <img src={ animi } alt="img" id="img2" />
                        </animated.div>
                        <div id="man">
                            <img src={ man } alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </BannerSection>
    )
}

