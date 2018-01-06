import {Component} from 'react'

import * as sharedStyle from '../shared/style'
import styled from "styled-components"
import Navigator from '../components/Navigator'
import FooterContainer from '../containers/footer'
import ProductCard from '../components/ProductCard'
import Feature from '../components/Feature'

const Content = styled.div`
    font-size : 20px;
    padding : 0px 50px 0px 50px;
    p{
        text-indent: 70px;
    }
`

export default class extends Component{
    render(){
        return(
            <div>
            <Navigator/>
            <div class="container">
                <img src="https://static.pexels.com/photos/17795/christmas-xmas-christmas-tree-decoration.jpg" class="img-fluid" alt="Responsive image" />
                <sharedStyle.Heading>
                    Let's celebrate Christmas!
                </sharedStyle.Heading> 
                <Content>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam risus ipsum, maximus sed mattis eget, cursus vel ligula. Vestibulum volutpat feugiat tellus, id pulvinar enim mollis sed. Donec magna mi, volutpat quis erat vel, auctor elementum metus. Suspendisse sodales velit eu arcu molestie sagittis ac et dui. Vivamus vehicula quis justo nec porttitor. Fusce feugiat id eros at mattis. Vivamus placerat, libero at finibus tempor, ante orci maximus neque, ut dictum felis massa ut lectus. Nam mollis ante eu tortor rhoncus, sit amet tincidunt urna consectetur. Integer porttitor viverra imperdiet. Etiam ornare sem eu dui lobortis condimentum. Sed finibus mauris eget metus rutrum, a congue ante commodo. Sed pulvinar nisl ut dapibus tincidunt.
                </p>
                <p>
                Nunc mattis metus eu sem ornare, eget gravida dolor egestas. Nunc at massa eu neque tincidunt bibendum. Aliquam erat volutpat. Quisque dignissim non massa malesuada tempor. In euismod risus sapien, in sollicitudin mi luctus a. Aliquam erat volutpat. Etiam dictum urna eget ex elementum, eget commodo dolor feugiat. Curabitur porta iaculis nunc a volutpat. Phasellus neque massa, vehicula a volutpat sit amet, accumsan sollicitudin diam. Integer consectetur blandit neque. In hac habitasse platea dictumst. Vestibulum aliquam tortor ut suscipit commodo. Donec quis nisi libero.
                </p>
                <p>
                Vivamus porta lorem eu sollicitudin semper. Sed vulputate neque in erat porttitor aliquet. Maecenas suscipit lectus nec aliquet euismod. Etiam vehicula, leo id porttitor posuere, ex velit dignissim purus, a vehicula sapien ex a odio. Morbi pellentesque, augue et dictum varius, lacus erat faucibus sem, ut efficitur ipsum libero eu felis. Morbi sed nisi mauris. Nulla in mi eros. Phasellus iaculis orci nec elit facilisis ullamcorper. Vestibulum bibendum posuere lacus eu euismod. Duis semper est diam, a accumsan ligula lobortis eget. Vestibulum facilisis mollis imperdiet. Quisque sed lorem mollis, congue nunc sit amet, hendrerit turpis. Integer eget rhoncus risus, at sodales velit. Nullam vitae leo augue. Vivamus vitae magna a velit pretium varius.
                </p>
                <p>
                Ut dapibus congue rhoncus. Nam quis nunc varius, convallis est eu, dictum turpis. Cras fringilla neque sapien, sed consequat mi ultricies vel. Suspendisse potenti. Sed imperdiet, est at laoreet congue, ligula metus porta dui, ut accumsan metus nunc vel massa. Vivamus porttitor augue eu neque placerat, eget semper magna posuere. Nullam eget lorem accumsan, tempor nibh sit amet, convallis tortor. Curabitur id eleifend purus, non dictum arcu. Suspendisse sed enim quis lacus feugiat egestas. Phasellus molestie non nisl ut dignissim. Ut ornare justo a neque hendrerit, dapibus finibus urna egestas.
                </p>
                </Content>
                <sharedStyle.Heading>
                    Related Rentable
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
            <br /><br />
            <FooterContainer/>
            </div>  
        )
    }
}