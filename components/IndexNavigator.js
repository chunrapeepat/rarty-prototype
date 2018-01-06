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
        margin-right : 50px; 
        margin-top : 15px;
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
                <i class="zmdi zmdi-account-o"></i>

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