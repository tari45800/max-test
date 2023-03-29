import React from "react";
import styled from "styled-components";

const List2 = styled.div`
  border: 2px solid black;

  .container{
    max-width: 1216px;
    border: 2px solid red;
    margin: auto;
    display: flex;
    align-items: center;
    height: 100px;
  }

  .cla1{
    display: flex;
    align-items: center;
    border: 2px solid blue;
    flex: 1;
  }


  .cla5{
    display: flex;
    border: 2px solid green; 
    width: 300px;
  }

  .cla4{
    flex: 1;
    border: 2px solid black; 
  }

  .cla8{
    max-width: 600px;
    border: 2px solid gray; 
  }



`


function PracticeLayout2(){

  return(
    <>
      <List2>
          <div className="container">
            <div className="cla1">
              <div className="cla2">
                class101
              </div>
              <div className="cla3">
                상점
              </div>
              <div className="cla4">
                <div className="cla8">
                  검색창
                </div>
              </div>
            </div>
            <div className="cla5"> 
              <div className="cla6">몰루</div>
              <div className="cla7">프로필</div>
            </div>
          </div>
  
      </List2>
    </>
  )
}

export default PracticeLayout2;