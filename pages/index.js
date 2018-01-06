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
        <div className="row">
          <div className="col-md-3">
            <a href="/catagories"><img width="100%" src="/static/cat-anime.png" /></a>
          </div>
          <div className="col-md-3">
            <img width="100%" src="/static/movie.png" />
          </div>
          <div className="col-md-3">
            <img width="100%" src="/static/cat-anime.png" />
          </div>
          <div className="col-md-3">
            <img width="100%" src="/static/movie.png" />
          </div>
        </div>
        <sharedStyle.Heading desc="you may wish to add some sort of pagination to each page.">
          ARTICLE
        </sharedStyle.Heading>
        <div className="row">

          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>


          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
        <sharedStyle.Heading desc="you may wish to add some sort of pagination to each page.">
          NEW ARRIVAL
        </sharedStyle.Heading>
        <img src="/static/new-arrival.png" width="100%" />
      </div>
      <FooterContainer/>
  </div>
)

export default Index