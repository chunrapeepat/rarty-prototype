import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    background: #ccc;
    height: 150px;
`

const ProductCard = () => (
    <Container>
        <img height="150px" width="100%" src="https://images.looksi.com/acMPwbEsNNh9wr-yjvbD7CxAyaQ=/fit-in/236x345/filters:quality(90):fill(ffffff)/http://static-catalog.looksi.com/p/dapper-5076-873346-1.jpg" />
    </Container>
)

export default ProductCard