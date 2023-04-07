import styled from "styled-components";

const SlideContainer = styled.div`
  border: 2px solid orange;
`

function MainSlide(){
  return(
	<SlideContainer>
    {/* 독립적인 영역 구성 */}
    <article className="slider">
      <img src="img/1.png"></img>
    </article>
	</SlideContainer>
  )
}

export default MainSlide;