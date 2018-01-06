import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
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
	width: 200px;
	color: #ccc;
`

const Tagline = styled.div`
	color: #ccc;
	margin-top: 15px;
	margin-bottom: 20px;
`

const FooterContainer = () => (
    <Container>
        <div className="container">
	        <div class="row">
	        	<div class="col-md-6">
					<img width="150px"src="/static/logo-edit-1.svg" />
					<Tagline>Rent a dress, Chase a dream</Tagline>
	        	</div>
	        	<div class="col-md-3">
	        		<b>CATEGORIES</b>
	        		<A>ABOUT US</A>
	        		<A>ARTICLE</A>
	        		<A>HOW TO ORDER</A>
	        		<A>CONTACT</A>
	        		<br/>
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
