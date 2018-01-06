import React from 'react'
import Link from 'next/link'

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
          SHOP BY CATEGORIES
        </sharedStyle.Heading>
        <div className="row">
          <div className="col-md-3 col-6">
            <Link href="/categories"><img width="100%" src="/static/movie.png" /></Link>
            <br/><br/>
          </div>
          <div className="col-md-3 col-6">
            <img width="100%" src="/static/cat-anime.png" />
            <br/><br/>
          </div>
          <div className="col-md-3 col-6">
            <img width="100%" src="/static/witch.png" />
            <br/><br/>
          </div>
          <div className="col-md-3 col-6">
            <img width="100%" src="/static/pirate.png" />
            <br/><br/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-6">
            <img width="100%" src="/static/princess.png" />
            <br/><br/>
          </div>
          <div className="col-md-3 col-6">
            <img width="100%" src="/static/halloween.png" />
            <br/><br/>
          </div>
          <div className="col-md-3 col-6">
            <img width="100%" src="/static/dress.png" />
            <br/><br/>
          </div>
          <div className="col-md-3 col-6">
            <img width="100%" src="/static/career.png" />
          </div>
        </div>
        <sharedStyle.Heading desc="you may wish to add some sort of pagination to each page.">
          ARTICLE
        </sharedStyle.Heading>
        <div className="row">

          <div className="col-md-3">
            <div className="card">
              <Link href="/article"><img className="card-img-top" src="/static/banner1.jpg"/></Link>
              <div className="card-body">
                <h5 style={{'font-family': 'Kanit'}} className="card-title">วิธีการวัดขนาดตัวสำหรับลูกค้า</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <Link href="/how-to-make-dream-come-true"><img className="card-img-top" src="/static/banner2_2.jpg"/></Link>
              <div className="card-body">
                <h5 className="card-title">How to make dream come true</h5>
              </div>
            </div>
          </div>


          <div className="col-md-3">
            <div className="card">
              <Link href="/article"><img className="card-img-top" src="/static/bl.jpg"/></Link>
              <div className="card-body">
                <h5 style={{'font-family': 'Kanit'}} className="card-title">16 ไอเดียสุดมันส์ทำให้วันคริสต์มาสไม่มีสีแดง</h5>
              </div>
            </div>
          </div>


          <div className="col-md-3">
            <div className="card">
              <Link href="/article"><img className="card-img-top" src="/static/ww.jpg"/></Link>
              <div className="card-body">
                <h5 style={{'font-family': 'Kanit'}} className="card-title">เผย 5 เหตุผลที่ใครๆก็อยากเป็น Wonder Woman</h5>
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