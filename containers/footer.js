import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background: #311B92;
    color: white;
    padding: 30px 0;
    margin-top: 30px;
`

const A = styled.a`
	display: block;
`

const FakeInput = styled.div`
	border-bottom: 2px solid #000000;
	margin-top: 7px;
	width: 250px;
	color: #ccc;
`

const FooterContainer = () => (
    <Container>
        <div className="container">
	        <div class="row">
	        	<div class="col-md-6">
	        		LOGO HERE
	        	</div>
	        	<div class="col-md-3">
	        		<b>CATAGORIES</b>
	        		<A>ABOUT US</A>
	        		<A>ARTICLE</A>
	        		<A>HOW TO ORDER</A>
	        		<A>CONTACT</A>
	        	</div>
	        	<div class="col-md-3">
	        		<b>SOCIAL MEDIA</b><br/>
	        		<i className="zmdi zmdi-facebook-box"></i>&ensp;&ensp;
	        		<i className="zmdi zmdi-twitter"></i>&ensp;&ensp;
	        		<i className="zmdi zmdi-youtube"></i>&ensp;<br/><br/>

	        		<b>SUBSCRIBE</b><br/>
	        		<FakeInput>Enter your email address</FakeInput>
	        	</div>
	        </div>
        </div>
    </Container>
)

export default FooterContainer
