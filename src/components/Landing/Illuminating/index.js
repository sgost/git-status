import React from "react"
// import { Link } from "gatsby"
import { IlluminatingSection } from "./styles"
import img from "../../../images/landing/hotkup.svg"

const Illuminating = () => (
    <IlluminatingSection>
        <div id="IlluminatingSectionContainer">
            <h1 data-aos="fade-down" data-aos-duration="1000">Illuminating dark data</h1>
            <h2 data-aos="fade-down" data-aos-duration="100000">Dark data is the 60% of unanalyzed data companies possess. At HotKup we transform unused data into valuable business insights.</h2>
            <img src={ img } alt="img" data-aos="fade-down" data-aos-duration="500000" />
            <p>Join dozens of global teams using HotKup to unite their workforce and get things done.</p>
        </div>
    </IlluminatingSection>
)

export default Illuminating
