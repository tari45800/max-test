import React, { useState } from "react";
import styled from "styled-components";

const CalusalContainer = styled.div`
 
`
const CalusalWindow= styled.div`
  border: 5px solid red;
  width: 1000px;
  height: 100px;
  margin: 0 auto;
`

const CalusalDiv = styled.div`
  position: relative;
  border: 5px solid green;
  height: 100px;
  display: inline-block;
  left: 50%;
  transform: translate(-100%,0);
`

const CalusalContent = styled.div`
  border: 5px solid black;
  height: 100%;
  display: inline-block;
  width: 200px;
  background-color: ${props => props.color || 'gray'};
`

function Calusal(){
    //자고싶어
    const [calusal, setCalusal ] = useState();


  return(
    <CalusalContainer>
      <CalusalWindow>
        <CalusalDiv>
          <CalusalContent color='pink'/>
          <CalusalContent color='yellow'/>
          <CalusalContent color='yellowgreen'/>
        </CalusalDiv>
      </CalusalWindow>
    </CalusalContainer>
  )
}

export default Calusal;
