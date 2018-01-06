import styled from 'styled-components'

const Header = styled.h1`
    margin: 30px 0;
    text-align: center;
    font-size: 30px;
    font-family: 'Montserrat', 'Kanit', sans-serif;

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