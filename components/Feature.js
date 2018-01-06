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
    padding: 15px;

    & > div:nth-child(1) {
        width: 50px;
        margin-right: 15px;
    }
`

const Feature = () => (
    <Container>
       <Item> 
            <div><i className="zmdi zmdi-time"></i></div>
            <div>
                Save time yeah
            </div>
       </Item>
       <Item> 
            <div><i className="zmdi zmdi-time"></i></div>
            <div>
                Save time yeah
            </div>
       </Item>
       <Item> 
            <div><i className="zmdi zmdi-time"></i></div>
            <div>
                Save time yeah
            </div>
       </Item>
    </Container>
)

export default Feature