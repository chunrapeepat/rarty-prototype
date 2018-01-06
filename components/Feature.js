import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    margin: 20px 0;
`

const Item = styled.div`
    display: flex;
    flex: 1;
    background: #fafafa;
    border: 1px solid #ccc;
    margin-left: -1px;
    padding: 7px 15px;

    & > div:nth-child(1) {
        width: 50px;
        margin-right: 15px;
        font-size: 40px;
        text-align: center;
        margin-top: -5px;
    }

    @media (max-width: 700px) {
        display: none;
    }
`

const Head = styled.div`
    font-family: 'Montserrat', sans-serif;
`

const Desc = styled.div`
    font-family: 'Kanit';
    color: #555;
`

const Feature = () => (
    <Container>
       <Item> 
            <div><i className="zmdi zmdi-time"></i></div>
            <div>
                <Head>Save Time</Head>
                <Desc>ประหยัดเวลาง่ายๆ แค่คุณคลิก</Desc>
            </div>
       </Item>
       <Item> 
            <div><i className="zmdi zmdi-globe"></i></div>
            <div>
                <Head>Extensive</Head>
                <Desc>ครอบคลุมครบจบที่เดียว</Desc>
            </div>
       </Item>
       <Item> 
            <div><i className="zmdi zmdi-thumb-up-down"></i></div>
            <div>
                <Head>Accessible</Head>
                <Desc>เข้าถึงได้ทุกที่ทุกเวลา</Desc>
            </div>
       </Item>
    </Container>
)

export default Feature