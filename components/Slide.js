import { Component } from 'react'
import styled from 'styled-components'

const SlideContainer = styled.div`
	margin-bottom: 7px;
`

const Master = styled.div`
	width: 100%;
	padding: 7px 15px;
	background: #555;
	color: white;
	cursor: pointer;
`

const Container = styled.div`
	display: ${props => (props.display) ? 'block' : 'none'};
`

const Slave = styled.a`
	display: block;
	cursor: pointer;
	width: 100%;
	background: #ddd;
	padding: 7px 25px;

	&:hover {
		background: #ccc;
	}
`

export default class extends Component {
	state = {
		open: this.props.show || false,
	}
	toggle() {
		this.setState({ open: !this.state.open })
	}
    render() {
        return (
            <SlideContainer>
                <Master onClick={() => this.toggle()} >{this.props.heading}</Master>
                <Container display={this.state.open}>
                	{ this.props.content.map(x => {
                		return <Slave key={x}>{x}</Slave>
                	}) }
                </Container>
            </SlideContainer>
        )
    }
}
