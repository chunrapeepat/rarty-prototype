import React from 'react'

import * as sharedStyle from '../shared/style'

import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'

import Feature from '../components/Feature'
import ProductCard from '../components/ProductCard'
import IndexNavigator from '../components/IndexNavigator';
import Banner from '../components/Banner';

const Index = () => (
  <div>
      <IndexNavigator />
      <Banner/>
      <div className="container">
        <Feature />
        <sharedStyle.Heading desc="you may wish to add some sort of pagination to each page.">
          SHOP BY CATAGORIES
        </sharedStyle.Heading>
        <sharedStyle.Heading desc="you may wish to add some sort of pagination to each page.">
          NEW ARRIVAL
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
      <FooterContainer/>
  </div>
)

export default Index