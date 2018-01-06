import { Component } from 'react'

import * as sharedStyle from '../shared/style'
import styled from "styled-components"
import Navigator from '../components/Navigator'
import FooterContainer from '../containers/footer'
import CheckoutProduct from '../components/CheckoutProduct'
import Feature from '../components/Feature'

const Item = styled.div`
    padding : 10px;
    border-bottom : 1px solid purple;
    font-family: 'Kanit', sans-serif;

`
const Total = styled.div`
    font-size : 2em;
    text-align: right;
`
const ItemContainer = styled.div`
    font-family: 'Open Sans', sans-serif;

`
const TableHeader = styled.div`
    padding : 15px 0;
    font-family: 'Montserrat', sans-serif;

`
const TotalButtonContainer = styled.div`
    text-align : right;
    font-family: 'Montserrat', sans-serif;

`
const RemoveItem = styled.div`
    font-size : 24px;
`
const TryItem = styled.div`
    font-size : 24px;
`
const ProceedButton = styled.div`
    background-color : #34254e; 
    font-size : 16px;
    color : white;
    text-align : center;
    padding : 10px 0px 10px 0px;
    margin : 5px;
`
const GobackButton = styled.div`
    background-color : #3e3e3e; 
    font-size : 16px;
    color : white;
    text-align : center;
    padding : 10px 0px 10px 0px;
    margin : 5px;
`
export default class extends Component {
    constructor() {
        super()
        this.state = {
            items: [
                {
                    id: 1,
                    name: "เสื้อเชิ้ตแขนยาว Smart Melancholy",
                    price: 1000.0,
                    try: false
                },
                {
                    id: 2,
                    name: "Dag",
                    price: 1000.0,
                    try: false
                },
                {
                    id: 5,
                    name: "Cag",
                    price: 500.0,
                    try: false
                }
            ],
            total: 2500
        }

    }

    getCurrentItems(x) {
        var list = [];
        var newtotal = this.state.total;
        for (var i = 0; i < this.state.items.length; i++) {
            if (this.state.items[i].id != x) {
                list.push(this.state.items[i]);
            }else{
                newtotal -= this.state.items[i].price
                if(this.state.items[i].try)
                    newtotal+=0.1*this.state.items[i].price
            }
        }
        console.log(this.state);
        this.setState({ items: list ,total:newtotal});
    }

    setTryState(x) {
        var newtotal = this.state.total;
        var list = [];
        var fee =0.0;
        for (var i = 0; i < this.state.items.length; i++) {
            if (this.state.items[i].id === x) {
                list.push({
                    id : this.state.items[i].id,
                    name : this.state.items[i].name,
                    price : this.state.items[i].price,
                    try : !this.state.items[i].try
                });
                fee = this.state.items[i].price*0.1;
                newtotal += (this.state.items[i].try)?fee:-fee
                
            }else{
                list.push(this.state.items[i]);
            }
        }
        console.log(newtotal)
        this.setState({ items: list ,total:newtotal});
    }


    render() {
        var items = [];
        for (var i = 0; i < this.state.items.length; i++) {
            const id = this.state.items[i].id;
            var trystate;
            if(this.state.items[i].try===false){
                trystate = <center><TryItem className="col-1"><i class="zmdi zmdi-male-alt" onClick={() => this.setTryState(id)}></i> </TryItem></center>
            }else{
                trystate = <center><TryItem className="col-1"> <i class="zmdi zmdi-male" onClick={() => this.setTryState(id)}></i> </TryItem></center>
            }

            items.push(
                <Item className="row" >
                    <div class="col-3"><CheckoutProduct /></div>
                    <div class="col-5">{this.state.items[i].name}</div>
                    <div class="col-2">{this.state.items[i].price}</div>
                    {trystate}
                    <RemoveItem className="col-1">
                        <center><i class="zmdi zmdi-delete" onClick={() => this.getCurrentItems(id)}></i></center>
                    </RemoveItem></Item>) 
             
        }

        return (
            <div>
                <Navigator />
                <div class="container">
                    <sharedStyle.Heading>
                        Checkout
                </sharedStyle.Heading>
                    <div class="row">
                        <div class="col-8">
                            <ItemContainer className="container">
                                <TableHeader className="row">
                                    <div class="col-8">PRODUCT</div>
                                    <div class="col-2">PRICE</div>
                                    <div class="col-1">TRY</div>
                                    <div class="col-1"></div>
                                </TableHeader>
                                {items}
                            </ItemContainer>
                            <a onClick={()=>this.setState({items:[],total:0})}>Clear</a>
                        </div>
                        <div class="col-4">
                            <hr />
                            <Total className="container">
                                Total : {this.state.total}
                            </Total>
                            <hr />
                            <TotalButtonContainer class="row">
                                <ProceedButton>
                                    Proceed
                                </ProceedButton>
                                <GobackButton>
                                    Go Back
                                </GobackButton>
                            </TotalButtonContainer>
                        </div>
                    </div>
                </div>
                <br />
                <FooterContainer />
            </div>
        )
    }
}