import {Component} from 'react'
import styled from "styled-components"

const Item = styled.div`
    padding : 10px;
`
const Summary = styled.div`
    font-size : 1.2em;
`

export default class extends Component{
    render(){
        return (

            <div class="container">
                <Item className="row">
                    <div class="col-3">Image</div>
                    <div class="col-5">Name, Detail</div>
                    <div class="col-2">Price</div>
                    <div class="col-2"><i class="zmdi zmdi-close-circle"></i></div>
                </Item>
                <Summary className = "row">
                    <div class="col-3">Total </div>
                    <div class="col-7"></div>
                    <div class="col-2">XXXX $</div>
                </Summary>
            </div>

        );
    }
}