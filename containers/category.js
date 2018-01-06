import {Component} from 'react'
import styled from "styled-components"


const MainCategory = styled.div`
    padding : 10px;
  
`
const SubCategory = styled.div`
    padding : 10px;
    border-left: 5px solid #333;
    display: flex;
`

export default class extends Component{
    constructor(){
        super()
        this.state = {
            category  : "",
            data : []
        }
    }

    render(){
        var categoryLength = this.state.data.length;

        return (
        <div class="container">
            <div class="row">
                <MainCategory className="col-2">
                    Main Category
                    
                </MainCategory>
                <SubCategory className="col-10 row">
            
                        <div class="col-2">Item 1</div>
                        <div class="col-2">Item 2</div>
                        <div class="col-2">Item 3</div>
                        <div class="col-2">Item 4</div>
                        <div class="col-2">Item 5</div>
                   
                </SubCategory>
                
            </div>
        </div>
        )
    }
}