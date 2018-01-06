import React from 'react'

import * as sharedStyle from '../shared/style'

import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'

import Feature from '../components/Feature'

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
      </div>
      <FooterContainer/>
  </div>
)

export default Index