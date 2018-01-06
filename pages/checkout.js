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
`
const Total = styled.div`
    font-size : 2em;
    text-align: right;
`
const ItemContainer = styled.div`
    border-color : purple;
    border-size : 1px;
`
const TableHeader = styled.div`
    border-bottom : 1px solid purple;
    padding : 10px;
`
const TotalButtonContainer = styled.div`
    text-align : right;
`
const RemoveItem = styled.div`
    font-size : 24px;
`
const TryItem = styled.div`
font-size : 24px;
`

export default class extends Component {
    constructor() {
        super()
        this.state = {
            items: [
                {
                    id: 1,
                    name: "Bag",
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
                trystate = <TryItem className="col-1"><i class="zmdi zmdi-male-alt" onClick={() => this.setTryState(id)}></i> </TryItem>
            }else{
                trystate = <TryItem className="col-1"> <i class="zmdi zmdi-male" onClick={() => this.setTryState(id)}></i> </TryItem>
            }

            items.push(
                <Item className="row" >
                    <div class="col-3"><CheckoutProduct /></div>
                    <div class="col-5">{this.state.items[i].name}</div>
                    <div class="col-2">{this.state.items[i].price}</div>
                    <RemoveItem className="col-1">
                        <i class="zmdi zmdi-delete" onClick={() => this.getCurrentItems(id)}></i>
                    </RemoveItem>{trystate}</Item>)  
        }

        return (
            <div>
                <Navigator />
                <div class="container">
                    <sharedStyle.Heading>
                        Cart
                </sharedStyle.Heading>
                    <div class="row">
                        <div class="col-8">
                            <ItemContainer className="container">
                                <TableHeader className="row">
                                    <div class="col-8">PRODUCT</div>
                                    <div class="col-2">PRICE</div>
                                    <div class="col-2"></div>
                                </TableHeader>
                                {items}
                            </ItemContainer>
                        </div>
                        <div class="col-4">
                            <hr />
                            <Total className="container">
                                Total : {this.state.total}
                            </Total>
                            <hr />
                            <TotalButtonContainer class="row">

                                <button type="button" class="btn btn-danger" onClick={()=>this.setState({items:[],total:0})}>Clear</button>
                                &nbsp;<button type="button" class="btn btn-success">Next</button>
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