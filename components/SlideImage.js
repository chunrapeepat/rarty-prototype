import { Component } from 'react'
import styled from 'styled-components'

const Size = styled.div`
    display: inline-block;
    margin-right: 10px;
    border-radius: 5px;
    padding: 10px 15px;
`

const Container = styled.div`
    display: flex;
    margin-top: 15px;

    & > div {
        flex: 1;
        cursor: pointer;
        margin-right: 10px;
        margin-left: 10px;
    }
`

export default class extends Component {

    state = {
        image: 0,
    }

    updateImage(i) {
        this.setState({ image: i })
    }

    render() {
        return (
            <div>
                <img width="100%" src={this.props.imgs[this.state.image]} />
                <Container>
                    <div onClick={() => this.updateImage(0)}><img width="100%" src={this.props.imgs[0]} /></div>
                    <div onClick={() => this.updateImage(1)}><img width="100%" src={this.props.imgs[1]} /></div>
                    <div onClick={() => this.updateImage(2)}><img width="100%" src={this.props.imgs[2]} /></div>
                </Container>
            </div>
        )
    }
}