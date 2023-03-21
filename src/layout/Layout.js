import React from "react";
import styled from "styled-components";

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 3px #aaa;
  z-index: 1;

  .header_container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 0 16px;
  }

  .header_start{
    height: 40px;
    line-height: 40px;

    & button{
      border: none;
      background-color: transparent;
      font-size: 1.5rem;
    }

    & span{
      font-size: 1.2rem;
      margin: 6px;
    }
  }

  .header_center{
    width: 50%;

    & form{
      display: flex;
      max-width: 100%;
    }

    & input{
      width: calc(100% -  60px);
      height: 40px;
      padding: 0 6px;
      border: 1px solid #aaa;
      border-right: none;
      border-radius: 3px 0 0 3px;
    }

    & button{
      width: 60px;
      height: 40px;
      border: 1px solid #aaa;
      border-radius: 0 3px 3px 0;
    }
  }

  .header_end{
    display: flex;

    & button{
      display: none;
      margin-right: 5px;
      border: none;
      background-color: transparent;
      font-size: 1.5rem;
    }

    .header_profile{
      width: 40px;
      height: 40px;
      border: 1px solid #aaa;
      border-radius: 50%;
      background-color: #eee;
    }

  }

  @media(max-width: 1000px) {
    .header_start span{
      display: none;
    }
  }

  @media(max-width: 600px) {
    .header_center{
      display: none;
    }
    .header_end button{
      display: block;
    }
  }

`


const Navigation = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  .nav_container{
    min-width: 200px;
    min-height: 100vh;
    background-color: #eee;
    padding-top: 80px;
  }

  .nav_container li{
    display: flex;
    padding: 10px 16px 10px;
  }

  .nav_container li:hover{
    background-color: #ddd;
    cursor: pointer;
  }

  .nav_icon{
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
  }

  .nav_menu{
    margin-left: 8px;
    font-size: 1.2rem;
    border: none;
    background-color: transparent;
  }

  @media(max-width: 1000px) {
    .nav_menu{
      display: none;
    }
    .nav_container{
      min-width: 0;
    }
  }

  @media(max-width: 600px) {
    .nav_container{
      display: none;
    }
  }

`

const Thumbs = styled.div`
  .thumbs_container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 60px 0 0 200px;
    padding: 20px;
  }

  @media(max-width: 1000px) {
    .thumbs_container{
      margin: 60px 0 0 60px;
    }
  }

  @media(max-width: 600px) {
    .thumbs_container{
      margin: 60px 0 0 0;
    }
  }


`

const Item = styled.div`
  width: 25%;
  margin-bottom: 15px;
  padding: 0 10px;
  border: 2px solid red;


  .thumbs_thumbnail{
    width: 100%;
    margin-bottom: 10px;
    object-fit: cover;
    height: 30%;
  }

  .thumbs_info{
    display: flex;
  }

  .thumbs_profile{
    width: 36px;
    height: 36px;
    border-radius: 50px;
    background-color: tomato;
  }
  
  .thumbs_text{
    padding-left: 10px;
    h3{
      font-size: 1.2rem;
      font-weight: bold;
    }
    p {
      font-size: 0.8rem;
      margin: 3px;
      color: #aaa;
    }
  }

  @media(max-width: 1500px) {
    width: 33%;
  }

  @media(max-width: 1000px) {
    width: 50%;
  }

  @media(max-width: 600px) {
    width: 100%;
  }
`

function Layout(){

  const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]

  return(
    <>
      <Header>
        <div className="header_container">
          <h1 className="header_start">
            <button>&#9776;</button>
            <span>YouTube</span>
          </h1>
          <div className="header_center">
            <form>
              <input type='text'></input>
              <button>검색</button>
            </form>
          </div>
          <div className="header_end">
            <button>&#128269;</button>
            <div className="header_profile"></div>
          </div>
        </div>
      </Header>
      <Navigation>
        <ul className="nav_container">
          <li>
            <button className="nav_icon">&#9829;</button>
            <button className="nav_menu">메뉴 항목</button>
          </li>
          <li>
            <button className="nav_icon">&#9829;</button>
            <button className="nav_menu">메뉴 항목</button>
          </li>
          <li>
            <button className="nav_icon">&#9829;</button>
            <button className="nav_menu">메뉴 항목</button>
          </li>
        </ul>
      </Navigation>
      <Thumbs>
        <div className="thumbs_container">
          {arr.map((el,idx)=>{
            return(
            <Item>
              <img className="thumbs_thumbnail" src={`img2/${el}.png`}></img>
              <div className="thumbs_info">
                <div className="thumbs_profile"></div>
                <div className="thumbs_text">
                  <h3>영상제목{idx}</h3>
                  <p>게시자</p>
                  <p>조회수{idx}00</p>
                </div>
              </div>
            </Item>
            )
          })}
        </div>
      </Thumbs>
    </>
  )
}

export default Layout;