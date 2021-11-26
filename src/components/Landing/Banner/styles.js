import styled from "styled-components"

export const BannerSection = styled.div`
width:100%;
height:100%;
#bannerSectionContainer{
    width:100%;
    height:auto;
    position:relative;
}
#bannerSectionContainer #image_container{
    width:100%;
    height:100%;
}
#bannerSectionContainer #image_container #img1{
    width:100%;
    height:100%;
}
#bannerSectionContainer #image_container #img2{
    display:none;
}
#bannerSectionContainer #image_matter{
    position:absolute;
    top:5vw;
    display:flex;
    align-items:center;
    width:100%;
    justify-content:space-between;
    margin:4.42028985507246vw 0 0 0;
    padding:0 15vw 0 8vw;
}
#bannerSectionContainer #image_matter h1{
    font-family: Manrope;
    font-style: normal;
    font-weight: 800;
    font-size: 3.76811594202899vw;
    line-height: 6.52173913043478vw;
    letter-spacing: 0.02em;
    color: #FFFFFF;    
}
#bannerSectionContainer #image_matter p{
    font-style: normal;
    font-weight: normal;
    font-size: 1.15942028985507vw;
    line-height: 2.17391304347826vw;
    color: #FFFFFF;
    letter-spacing: 0.02em;
    opacity: 0.8;
    width:36.4028776978417vw;
    margin: 0vw 0 2vw 0;
    }
    #bannerSectionContainer #image_matter button{
        font-style: normal;
        font-weight: 600;
        font-size: 1.30434782608696vw;
        line-height: 2.31884057971015vw;
        color: #0E1B33;
        width: 13.6231884057971vw;
        height: 3.5vw;
        background: #FE9315;
        border-radius: 0.579710144927536vw;
        border:none;
        outline:none;
        }
    #bannerSectionContainer #image_matter #image_matter_b2 {
        position:relative;
        width:19.2753623188406vw;
        height:32.7536231884058vw;
    }
    #bannerSectionContainer #image_matter #image_matter_b2 #img3{
        width: 100%;
        height: 100%;
        position:absolute;
    }
    #bannerSectionContainer #image_matter #image_matter_b2 #img3:nth-child(1){
        animation-name: tree;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
        animation-direction: alternate-reverse;  
    }
    @keyframes tree {
        from {transform: rotate(-2deg);}
        to {transform: rotate(2.5deg);}
      }
    
@media (max-width:750px){
    #bannerSectionContainer{
        height: 200.731707317073vw;
        background: #040F22;
    }
    #bannerSectionContainer #image_container #img1{
        display:none;
    }
     #bannerSectionContainer #image_matter {
        top: 30vw;
        left:0;
        width: 100%;
        text-align: center;
        justify-content:center;
        padding:0;
        flex-direction: column;
    }
     #bannerSectionContainer #image_matter h1 {
        font-size: 7.31707317073171vw;
line-height: 12.1951219512195vw;
        width: 100%;
        margin: auto;
    }
     #bannerSectionContainer #image_matter p {
        font-size: 2.92682926829268vw;
        line-height: 5.36585365853659vw;
        width: 77.0731707317073vw;
        margin: 2.4390243902439vw auto 4vw auto;
    }
    #bannerSectionContainer #image_matter button {
    width: 38.0487804878049vw;
height: 9.75609756097561vw;
background: #FE9315;
border-radius: 1.43292682926829vw;
font-size: 3.41463414634146vw;
line-height: 5.1219512195122vw;
    }
    #bannerSectionContainer #image_matter #image_matter_b2{
        width: 45.1219512195122vw;
height: 76.5853658536585vw;
margin:18.0487804878049vw 0 0 0;
    }
    #bannerSectionContainer #image_matter #image_matter_b2 #img3{
        left:0;
    }
}
`