import {Component} from 'react'

import * as sharedStyle from '../shared/style'
import styled from "styled-components"
import Navigator from '../components/Navigator'
import FooterContainer from '../containers/footer'
import ProductCard from '../components/ProductCard'
import Feature from '../components/Feature'

const Content = styled.div`
    font-size : 20px;
    padding : 5px 200px;
`

const P = styled.p`
    font-size: 16px;
    padding: 5px 0;
`

export default class extends Component{
    render(){
        return(
            <div>
            <Navigator/>
            <div class="container">
                <br/><br/>
                <img src="/static/banner2_2.jpg" class="img-fluid" alt="Responsive image" />
                <br/>
                <sharedStyle.Heading>
                    How to make the dream comes true
                </sharedStyle.Heading> 
                <Content>
                    <P>
                    9 ขั้นตอนเนรมิตความฝันให้เป็นจริง</P>
                    <P>
                    แม่ทูนหัวเชื่อว่าทุกๆคนนั้นล้วนมีความฝันในวัยเด็กที่ปรารถนาจะเป็นสิ่งต่างๆที่ตัวเองนั้นเคยหลงใหล ไม่ว่าจะเป็นการที่ตัวเองจะได้รับพรจากนางฟ้าแม่ทูนหัวเหมือนอย่างเจ้าหญิงซินเดอเรลล่ารุ่นพี่ของพวกคุณ ถึงแม้ว่าเวลาจะผ่านล่วงเลยไปกี่ปี แต่ตัวตนที่ซ่อนอยู่ก็จะยังคงอยู่กับทุกคนตลอดไป 
                    </P>
                    <P>
                    วันนี้แม่จะมาเปิดเผยเคล็บลับฉบับซินเดอเรลล่า ว่ามันง่ายขนาดไหน ถ้าพร้อมแล้ว สาม สอง หนึ่ง เริ่ม！
                    </P>
                    <P>
                    1.พิมพ์หารูปแบบชุดในจินตนาการของทุกคน<br/>

    2.ถ้าเจอชุดที่ใช่ก็หย่อนลงตะกร้าได้เลย<br/>

    3.สมัครเข้าสังกัดนางฟ้าแม่ทูนหัว<br/>

    4.กด “ยืนยัน” การเช่าชุด <br/>

    5.ได้รับการยืนยันจากร้านค้าในสังกัดนางฟ้าแม่ทูนหัว<br/>

    6.ร้านค้าเตรียมพร้อมส่งความฝัน<br/>

    7.ถึงเวลาแปลงกายเจิดจรัส<br/>

    8.ได้เวลาคลายมนตร์ ส่งชุดคืนมายังร้านค้า<br/>

    9.รอรับเงินมัดจำคืน<br/>

</P>
<P>
เพียงเท่านี้ช่วงเวลาแห่งความฝันของทุกคนก็จะกลายเป็นจริงแล้ว แต่เดี๋ยวก่อนเวลาแห่งความสุขไม่ได้มีแค่ครั้งเดียวเพราะแม่จะอยู่ที่นี่ตลอดและยังคงรอทำให้คำขอใหม่ๆของทุกคนเป็นจริงอีกครั้ง ส่งคำขอมาใหม่ได้อีกที่ www.rartythai.com
</P>
<P>
ด้วยรักจากแม่ทูนหัว
</P>
                </Content>
                <sharedStyle.Heading>
                    Related Rentable
                </sharedStyle.Heading> 
                <div className="row">
                  <div className="col-md-3">
                    <ProductCard img="/static/product/w.jpg"/>
                  </div>
                  <div className="col-md-3">
                    <ProductCard img="/static/product/ww.jpg"/>
                  </div>
                  <div className="col-md-3">
                    <ProductCard img="/static/product/www.jpg"/>
                  </div>
                  <div className="col-md-3">
                    <ProductCard img="/static/product/wwww.jpg"/>
                  </div>
                </div>
            </div>
            <br /><br />
            <FooterContainer/>
            </div>  
        )
    }
}