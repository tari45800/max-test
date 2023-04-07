import styled from "styled-components";

const HeaderContainer = styled.div`
  border: 2px solid red;
`

function Header(){
  return(
	<HeaderContainer>
		<header>
			<h1><a href="#">INDIGO</a></h1>
			<nav>
				<ul className="gnb">
					<li><a href="#">HOME</a></li>
					<li><a href="#">WE ARE</a></li>
					<li><a href="#">WORK</a></li>
					<li><a href="#">BLOG</a></li>
					<li><a href="#">CONTACT</a></li>
				</ul>
			</nav>
			<span className="menu-toggle-btn">
				<span></span>
				<span></span>
				<span></span>
			</span>
		</header>
	</HeaderContainer>
  )
}

export default Header;