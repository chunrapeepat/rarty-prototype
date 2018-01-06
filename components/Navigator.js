import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
    width: calc(100% - 30px);
    color: white;
    padding: 15px 0;
    background: #311B92;
    font-family: 'Montserrat', sans-serif;

    & > .container > div {
        display: inline-block;
    }

    & > .container > div:hover {
        color: #ccc;
        cursor: pointer;
    }

    & > .container > div:nth-child(n+2) {
        float: right;
        margin-right : 30px; 
        margin-top : 15px;
    }
    & > .container > div:nth-child(2){
        font-size:20px;
    }
`

const Navigator = () => (
    <Container>
        <div className="container">
            <div >
                <img onClick={() => window.location.href = '/'} width="70px"src="/static/logo-2.png" />
            </div>
            <div>
            <Link href="/tracking"><i class="zmdi zmdi-search"></i></Link>&nbsp;&nbsp;
                <Link href="/orders"><i class="zmdi zmdi-account-o"></i></Link>&nbsp;&nbsp;
                <Link href="/checkout"><i class="zmdi zmdi-shopping-cart"></i></Link>
            </div>
            <div>CONTACT</div>
            <div>HOW TO ORDER</div>            
            <div>ARTICLE</div>            
            <div>ABOUT US</div>            
            <Link href="/categories"><div>CATEGORY</div></Link>
            
            
        </div>
    </Container>
)

export default Navigator