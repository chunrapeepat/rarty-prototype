import {Component} from 'react'
import styled from "styled-components"

const Container = styled.div`
    width : 100%;
`
const MainCategory = styled.div`
    
`

const SubCategory = styled.div`
    padding : 10px
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
        <Container>
            <div class="row">
                <MainCategory className="col-4">
                    Main Category
                </MainCategory>
                <SubCategory class="col-8">
                    Items...
                </SubCategory>
            </div>
        </Container>
        )
    }
}