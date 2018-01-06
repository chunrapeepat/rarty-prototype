import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    color: white;
    padding: 15px 0;
    background: #311B92;

    & > .container > div {
        display: inline-block;
    }

    & > .container > div:nth-child(2) {
        float: right;
    }
`

const Navigator = () => (
    <Container>
        <div className="container">
            <div>
                Logo hererj
            </div>
            <div>
                Menu section
            </div>
        </div>
    </Container>
)

export default Navigator