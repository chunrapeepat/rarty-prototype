import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Container = styled.div`
    width: 100%;
    cursor: pointer;
    padding: 10px;
    border: 1px solid white;

    &:hover {
    	border: 1px solid #ccc;
    }
`

const Title = styled.div`
	font-family: 'Kanit', sans-serif;
	padding: 10px 0;
`

const Foot = styled.div`
	border-top: 1px solid #ccc;
`

const PriceTag = styled.div`
	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	font-weight: bold;
	padding-top: 10px;
	color: #111b36;
	float: right;
`

const Tag = styled.div`
	background: #81C784;
	display: inline-block;
	padding: 3px 7px;
	font-weight: bold;
	font-family: 'Open Sans', sans-serif;
	font-size: 14px;
	margin-top: 7px;
`

const Padding = styled.div`
	padding: 5px 10px;
`

const ProductCard = ({ img }) => (
    <Container>
    	<Link href='/view-product'>
    		<img width="100%" src={img}/>
    	</Link>
    	<Padding>
    		<Title>ชุดคอสเพลย์ Wonder Women</Title>
	    	<Foot>
	    		<Tag>Available</Tag>
				<PriceTag>THB 5000</PriceTag>
	    	</Foot>
    	</Padding>
    </Container>
)

export default ProductCard