import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Container = styled.div`
    width: calc(100% - 30px);
    color: white;
    padding: 15px 0;
    position : absolute;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 700px) {
        display: none;
    }

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

const MContainer = styled.div`
    display: none;

    width: calc(100% - 30px);
    color: white;
    padding: 15px 0;
    position : absolute;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 700px) {
        display: none;
    }

    & > .container > div {
        display: inline-block;
    }

    & > .container > div:hover {
        color: #ccc;
        cursor: pointer;
    }

    & > .container > div:nth-child(n+2) {
        float: right;
        margin-top : 15px;
        pointer : cursor;
    }


    & > .container > div:nth-child(2){
        font-size:20px;
    }

    @media (max-width: 700px) {
        display: block;
    }
`

const Navigator = () => (
    <div>
        <Container>
            <div className="container">
                <div style={{'margin-top': '12px'}}>
                    <img width="120px"src="/static/logo-edit-1.svg" />
                </div>
                <div>
                    <i class="zmdi zmdi-search"></i>&nbsp;&nbsp;
                    <Link href="/orders"><i class="zmdi zmdi-account-o"></i></Link>&nbsp;&nbsp;
                    <Link href="/checkout"><i class="zmdi zmdi-shopping-cart"></i></Link>
                </div>
                <div>CONTACT</div>
                <div>HOW TO ORDER</div>            
                <div>ARTICLE</div>            
                <div>ABOUT US</div>            
                <div>CATEGORY</div> 
            </div>
        </Container>

        <MContainer>
            <div className="container">
                <div style={{'margin-top': '12px'}}>
                    <img width="120px"src="/static/logo-edit-1.svg" />
                </div>
                <div>
                    <i class="zmdi zmdi-search"></i>&nbsp;&nbsp;
                    <i class="zmdi zmdi-account-o"></i>&nbsp;&nbsp;
                    <Link href="/checkout"><i class="zmdi zmdi-shopping-cart"></i></Link>
                </div>
            </div>
        </MContainer>
    </div>
)

export default Navigator