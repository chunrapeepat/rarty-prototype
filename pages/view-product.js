import React from 'react'
import styled from 'styled-components'

import * as sharedStyle from '../shared/style'

import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'

import ProductCard from '../components/ProductCard'
import SlideImage from '../components/SlideImage'

const ProductTitle = styled.h1`
    margin: 0;
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: 300;
    font-family: kanit;
`

const PriceTag = styled.h2`
    margin: 0;
    font-weight: light;
    font-size: 22px;
    font-weight: 500;
    font-family: 'Open Sans', sans-serif;
    color: #555;

    & > span {
        background: #81C784;
        color: black;
        font-size: 16px;
        margin-left: 10px;
        padding: 3px 10px;
        font-family: 'Kanit';
        font-weight: 300;
    }
`

const DescContainer = styled.div`
    margin: 30px 0;
`

const ViewProductPage = () => (
  <div>
      <HeaderContainer/>
      <br />
      <div className="container">
        <div className="row">
            <div className="col-md-5">
                <SlideImage imgs={[
                    'https://glamorous.com/pub/media/catalog/product/cache/image/600x900/e9c3970ab036de70892d86c6d221abfe/m/y/mystery_bag_2_web_1_.png',
                    'https://glamorous.com/pub/media/catalog/product/cache/image/600x900/e9c3970ab036de70892d86c6d221abfe/a/n/an1418a_redspotfloral_03.jpg',
                    'https://glamorous.com/pub/media/catalog/product/cache/image/600x900/e9c3970ab036de70892d86c6d221abfe/a/n/an1418a_redspotfloral_01.jpg',
                ]}/>
            </div>
            <div className="col-md-7">
                <ProductTitle>MEN เสื้อฮู้ดพาร์กาพับเก็บได้</ProductTitle>
                <PriceTag>THB 500.00 <span>ว่าง</span></PriceTag>

                <DescContainer>
                <p>เสื้อฮู้ดพาร์กาน้ำหนักเบาแบบพับเก็บได้ที่สามารถหยิบใช้ได้สะดวกเมื่อคุณต้องการเพื่อการท่องเที่ยว หรือเพื่อสวมใส่ในลุคลำลองโดยเฉพาะ</p>
                <p>
-เส้นใยที่มีขนาด 30 ดีเนียร์จึงมีน้ำหนักเบาและพกพาได้สะดวก<br />
-การตัดเย็บและออกแบบที่สวยงามทั้งช่วงบ่าและแขนทำให้เหมาะกับการใส่เล่นกีฬาหรือลุคลำลอง<br />
-ดีไซน์แบบพับเก็บได้ให้คุณสามารถพกติดตัวไปได้ทุกที่และหยิบใช้ได้ทุกเมื่อที่ต้องการ<br />
-มีความคงทนสามารถกันละอองฝนและน้ำได้ เหมาะกับกิจกรรมกลางแจ้ง<br />
-มาในโทนสีอันทันสมัยให้คุณได้เลือกสรร
                </p>
                </DescContainer>
            </div>
        </div>
      </div>
      <br />
      <FooterContainer/>
  </div>
)

export default ViewProductPage