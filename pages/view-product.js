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

const Sidebar = styled.div`
    width: 100%;
    background: #ccc;
    padding: 15px;

    & > span {
        font-family: 'Kanit';
        display: block;
    } 
` 

const Button = styled.button`
    width: 100%;
    text-align: center;
    color: white;
    padding: 10px;
    border: 0;
    background: #311B92;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    font-family: 'Kanit', sans-serif;
`

const ViewProductPage = () => (
  <div>
      <HeaderContainer/>
      <br />
      <div className="container">
        <div className="row">
            <div className="col-md-5">
                <SlideImage imgs={[
                    '/static/product/w.jpg',
                    '/static/product/ww.jpg',
                    '/static/product/www.jpg',
                ]}/><br/>
            </div>
            <div className="col-md-7">
                <ProductTitle>ชุดคอสเพลย์ Wonder Women</ProductTitle>
                <PriceTag>THB 500.00 <span>ว่าง</span></PriceTag>

                <div className="row">
                    <div className="col-md-7">
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
                    <div className="col-md-5">
                        <Sidebar>
                            <span>Name: Yana B<br/>
ความสูง: 172 ซม.<br/>
นางแบบสวมใส่ไซส์ S</span><br/>
<b>Start Date</b>
<input class="form-control" type="date" name="bday"/>
<b>End Date</b>
<input class="form-control" type="date" name="bday"/>
<br/>
                            <Button onClick={() => window.alert('Successifully add item to cart!!')}>เพิ่มลงตระกร้าสินค้า</Button>
                        </Sidebar>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <br />
      <FooterContainer/>
  </div>
)

export default ViewProductPage