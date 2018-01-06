import React from 'react'

import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'
import CategoryContainer from '../containers/Category'
import CartContainer from '../containers/Cart'

const Index = () => (
  <div>
      <HeaderContainer/>
      This is a index page
      <FooterContainer/>
      <CategoryContainer/>
      <CartContainer/>
  </div>
)

export default Index