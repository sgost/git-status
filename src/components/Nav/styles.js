import styled from "styled-components"

export const NavSection = styled.div`
width:100%;
position:fixed;
top:0;
z-index:3;
#NavSection2{
  background:transparent;
}
#NavSection{
  background: radial-gradient(
    69.3% 63.46% at 11.17% 10.02%,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.1) 0.01%,
    rgba(200, 200, 200, 0.1) 100%
  );
  backdrop-filter: blur(160px);
  button{
    color:#2997F9;
}
}
.NavSection{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:center;
    align-items:center;
    justify-content:space-between;
    padding:1vw 7.2463768115942vw 1vw 7.2463768115942vw;
img{
    width: 13.6231884057971vw;
    height:1.08695652173913vw;
}
button{
  width: 180px;
height: 48px;
border: 1px solid #FFFFFF;
border-radius: 8px;
font-style: normal;
font-weight: normal;
font-size: 16px;
letter-spacing: 0.02em;
color: #FFFFFF;
outline:none;
background:transparent;
}
button:hover{
    color:#2997F9;
    border: 1px solid #2997F9;
}
}
/*==============contact==================*/
.ant-modal-content{
  height: 100%;
.ant-modal-footer{
  display: none;
  padding:0;
  background:white;
}
}
#navcont {
  width: 100%;
  height: 100vh;
  background: white;
  top: 0;
}
#navcont #contact {
  padding: 0;
  margin: 0;
  background: white;
  width: 100%;
  height: fit-content;
  margin: auto 0;
}
#navcont #contclose {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}
#navcont .contact_contrainer {
  max-width: calc(100% - 15.2%);
  margin: auto;
  display: flex;
  margin-top: 3vw;
  border-radius: 1.15107913669065vw 0px 0px 1.15107913669065vw;
}
@media (max-width: 750px) {
  .ant-modal-content {
    background: white;z
  }
  .ant-modal-content .ant-modal-footer{
    padding:0;
  }
  .ant-modal-footer{
    padding:0;
  }
  .ant-modal-footer{
    padding:0;
  }
  #navcont {
    width: 100%;
    height: 50vw;
    top: 0;
    padding:3vw 0;
  }
}
@media (max-width:750px){
    .NavSection{
        padding: 13px 30px;
        img{
            width: 120px;
            height:15px;
        }
         button {
            width: 96px;
            height: 32px;
            border-radius: 4px;
            font-size: 12px;
            line-height: 0;
        }
    }
}
`