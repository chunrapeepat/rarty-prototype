import React from 'react'

import * as sharedStyle from '../shared/style'

import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'
import CategoryContainer from '../containers/Category'
import CartContainer from '../containers/Cart'

import Feature from '../components/Feature'
import ProductCard from '../components/ProductCard'

const Index = () => (
  <div>
      <HeaderContainer/>
      <div className="container">
        <Feature />
        <sharedStyle.Heading>
          Recommend
        </sharedStyle.Heading>
        <sharedStyle.Heading>
          New Product Arrival
        </sharedStyle.Heading>
        <div className="row">
          <div className="col-md-3">
            <ProductCard />
          </div>
          <div className="col-md-3">
            <ProductCard />
          </div>
          <div className="col-md-3">
            <ProductCard />
          </div>
          <div className="col-md-3">
            <ProductCard />
          </div>
        </div>
      </div>
      <br />
      <FooterContainer/>
      <CategoryContainer/>
      <CartContainer/>
  </div>
)

export default Index