import styled from 'styled-components'

const Header = styled.h1`
    text-align: center;
    font-size: 25px;
    font-family: 'Montserrat', 'Kanit', sans-serif;
    margin-top: 50px;
    margin-bottom: 40px;

    & > div {
    	background: black;
    	width: 150px;
    	height: 2px;
    	margin: auto auto;
    	margin-top: 7px;
    }
`

export const Heading = ({ children, desc }) => (
	<Header>
		{children}
		<div/>
	</Header>
)