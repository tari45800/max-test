import React from "react";
import styled from "styled-components";

const BgDiv = styled.div`
@import url(//fonts.googleapis.com/earlyaccess/jejumyeongjo.css);
background-color: black;

@font-face {
    font-family: 'Chosunilbo_myungjo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Chosunilbo_myungjo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Cafe24Oneprettynight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Oneprettynight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'MapoGoldenPier';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoGoldenPierA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  .jejumyeongjo * { 
  font-family: 'Jeju Myeongjo', serif;

  }

  .bg{
    height: 1334px;
    width: 750px;
    background-color: black;
    position: absolute;
    top: 47%;
    left: 47%;
    transform: translate(-50%, -50%);
    opacity: 0.3;
  }

  & > div{

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & > div{
      position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    }

    & > div{
      font-family: 'Cafe24Oneprettynight';
    color: #fff;
    text-align: center;
    font-size: 25px;
    word-spacing: 3px;

    }

    div{
      margin: 20px;
    }
    div:nth-of-type(3){
    margin-top: 45px;
    font-family: 'Cafe24Oneprettynight';
    color: #eee;
    text-align: center;
    font-size: 25px;
    word-spacing: 2px;
    }
  }

  

  img{
    height: 1334px;
    width: 750px;
    object-fit: cover;
  }
`

function Bg(){

  return(
    <BgDiv>
      <div>
        <div className="bg"></div>
        <img src="../bg.jpg" alt="" />
        <div>
          <div>너는 사랑과 성실이 너를 떠나지 않게 하며 </div>
          <div>그것을 네 목에 매고 네 마음에 새겨라.</div>
          <div>잠언3:3</div>
        </div>
      </div>
    </BgDiv>
  )
}

export default Bg;