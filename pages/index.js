import React from 'react'

import * as sharedStyle from '../shared/style'

import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'

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
<<<<<<< HEAD

=======
>>>>>>> Jade
  </div>
)

export default Index