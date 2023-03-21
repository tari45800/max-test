import React from "react";
import styled from "styled-components";

const List = styled.div`
  border: 2px solid black;


  .header{
    height: 65px;
    border: 2px solid red;
  }

  .list{
    max-width: 1100px;
    border: 2px solid blue;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
  }

`
const Item = styled.div`
  display: inline-block;
  width: 33.33%;
  border: 2px solid red;
  margin-bottom: 15px;
  padding: 0 10px;

  img{
    width: 100%;
    aspect-ratio: 16 / 9; 
    object-fit: cover;
  }
`

function PracticeLayout1(){
  const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]

  return(
    <>
      <List>
        <div className="header"></div>
        {/* <div className="sidebar"></div> */}
        <div className="list">
          {arr.map((el,idx)=>{
            return(
            <Item key={idx}>
              <img className="thumbs_thumbnail" alt={idx} src={`img2/${el}.png`}></img>
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
      </List>
    </>
  )
}

export default PracticeLayout1;