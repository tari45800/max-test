import styled from "styled-components";

const DisplayContainer = styled.div`
  border: 2px solid yellow;
`

function Display(){
  return(
	<DisplayContainer>
    <section className="content">
      <section className="display-section">
        <div className="container">
          <h2>WE ARE</h2>
          <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae voluptatum eveniet nobis quos sunt molestiae aperiam rerum quas? Vitae consectetur aut reprehenderit deleniti consequatur qui tenetur neque accusantium aperiam.</p>
        </div>
      </section>
    </section>
	</DisplayContainer>
  )
}

export default Display;