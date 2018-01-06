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
const ItemName = styled.div`
    font-size : 20px;
`
const RentDetail = styled.div`
    font-size : 14px;
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

const TryItem = styled.div`
    font-size : 24px;
`
const ProceedButton = styled.div`
    background-color : #34254e; 
    font-size : 14px;
    color : white;
    text-align : center;
    padding : 10px 0px 10px 0px;
    margin : 5px;
`
const GobackButton = styled.div`
    background-color : #3e3e3e; 
    font-size : 14px;
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
                    try: false,
                    img: "",
                    duration: "27/02/61 - 30/02/61",
                    status : "Order Accpeted"
                },
                {
                    id: 2,
                    name: "ชุดเจไดเด็กเล็ก คุณภาพดี",
                    price: 500.0,
                    try: false,
                    img: "jedi",
                    duration: "1/12/61 - 2/12/61",
                    status : "Delivering"
                },
                {
                    id: 3,
                    name: "Wonder Women Full plate costume",
                    price: 2500.0,
                    try: false,
                    img: "ww",
                    duration: "10/1/61 - 12/1/61",
                    status : "Delivered"
                },

            ],
            total: 1000
        }

    }

    getCurrentItems(x) {
        var list = [];
        var newtotal = this.state.total;
        for (var i = 0; i < this.state.items.length; i++) {
            if (this.state.items[i].id != x) {
                list.push(this.state.items[i]);
            } else {
                newtotal -= this.state.items[i].price
                if (this.state.items[i].try)
                    newtotal += 0.1 * this.state.items[i].price
            }
        }
        console.log(this.state);
        if(list.length<=0)
            newtotal = 0
        this.setState({ items: list, total: newtotal });
    }

    setTryState(x) {
        var newtotal = this.state.total;
        var list = [];
        var fee = 0.0;
        for (var i = 0; i < this.state.items.length; i++) {
            if (this.state.items[i].id === x) {
                list.push({
                    id: this.state.items[i].id,
                    name: this.state.items[i].name,
                    price: this.state.items[i].price,
                    try: !this.state.items[i].try,
                    duration: this.state.items[i].duration,
                    img: "",
                    status : this.state.items[i].status
                   
                });
                fee = this.state.items[i].price * 0.1;
                newtotal += (this.state.items[i].try) ? -fee : fee

            } else {
                list.push(this.state.items[i]);
            }
        }
        console.log(list)
        this.setState({ items: list, total: newtotal });
    }


    render() {
        var items = [];
        for (var i = 0; i < this.state.items.length; i++) {
            const id = this.state.items[i].id;

            items.push(
                <Item className="row" >
                    <div class="col-2"><CheckoutProduct /></div>
                    <div class="col-7">
                        <ItemName>{this.state.items[i].name}</ItemName>
                        <br /><br />
                        <RentDetail>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id={this.state.items[i].id} onClick={() => this.setTryState(id)} checked/>
                            <label class="custom-control-label" for={this.state.items[i].id}>ลองชุด ({this.state.items[i].price*0.1} บาท)</label>
                        </div>
                        <div>
                            ระยะเวลา : {this.state.items[i].duration}
                        </div>
                        <div>
                            ราคา : {this.state.items[i].price} บาท (มัดจำ {this.state.items[i].price / 2} บาท)
                        </div>
                        </RentDetail>
                    </div>
                    <div class="col-3">
                    <br/><br/>
                        <div>{this.state.items[i].status}</div>
                        </div>
                    

                </Item>)


        }

        return (
            <div>
                <Navigator />
                <div class="container">
                    <sharedStyle.Heading>
                        TRACKING
                </sharedStyle.Heading>
                    <div class="row">
                        <div class="col-12">
                            <ItemContainer className="container">
                                <TableHeader className="row">
                                    <div class="col-9">ORDERS</div>
                                    <div class="col-3">STATUS</div>
                                </TableHeader>
                                {items}
                            </ItemContainer>
                        </div>
                        
   
                        
                    </div>
                </div>
                <br />
                <FooterContainer />
            </div>
        )
    }
}