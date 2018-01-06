import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    color: white;
    padding: 15px 0;
    position : absolute;
    font-family: 'Montserrat', sans-serif;

    & > .container > div {
        display: inline-block;
        
    }

    & > .container > div:nth-child(n+2) {
        float: right;
        margin-right : 30px; 
        margin-top : 15px;
        pointer : cursor;
    }


    & > .container > div:nth-child(2){
        font-size:20px;
    }


`

const Navigator = () => (
    <Container>
        <div className="container">
            <div >
                <img width="70px"src="/static/logo-2.png" />
            </div>
            <div>
                <i class="zmdi zmdi-search"></i>&nbsp;&nbsp;
                <i class="zmdi zmdi-account-o"></i>&nbsp;&nbsp;
                <i onClick={() => window.location.href = '/checkout'} class="zmdi zmdi-shopping-cart"></i>
            </div>
            <div>CONTACT</div>
            <div>HOW TO ORDER</div>            
            <div>ARTICLE</div>            
            <div>ABOUT US</div>            
            <div>CATEGORY</div>
        </div>
    </Container>
)

export default Navigator