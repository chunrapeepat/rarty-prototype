
          window.__NEXT_REGISTER_PAGE('/checkout', function() {
            var comp = module.exports=webpackJsonp([7],{238:function(e,t,n){e.exports=n(239)},239:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(6),i=a(l),s=n(1),r=a(s),d=n(2),c=a(d),u=n(7),o=a(u),f=n(8),m=a(f),p=n(9),h=a(p),x=n(0),g=a(x),E=n(37),v=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(E),y=n(4),k=a(y),b=n(27),z=a(b),_=n(28),w=a(_),C=n(240),M=a(C),S=n(55),N=(a(S),(0,h.default)(["\n    padding : 10px;\n    border-bottom : 1px solid purple;\n"],["\n    padding : 10px;\n    border-bottom : 1px solid purple;\n"])),O=(0,h.default)(["\n    font-size : 2em;\n    text-align: right;\n"],["\n    font-size : 2em;\n    text-align: right;\n"]),P=(0,h.default)(["\n    font-family: 'Open Sans', sans-serif;\n\n"],["\n    font-family: 'Open Sans', sans-serif;\n\n"]),T=(0,h.default)(["\n    padding : 15px 0;\n    font-family: 'Montserrat', sans-serif;\n\n"],["\n    padding : 15px 0;\n    font-family: 'Montserrat', sans-serif;\n\n"]),j=(0,h.default)(["\n    text-align : right;\n    font-family: 'Montserrat', sans-serif;\n\n"],["\n    text-align : right;\n    font-family: 'Montserrat', sans-serif;\n\n"]),I=(0,h.default)(["\n    font-size : 24px;\n"],["\n    font-size : 24px;\n"]),R=(0,h.default)(["\n    background-color : #34254e; \n    font-size : 16px;\n    color : white;\n    text-align : center;\n    padding : 10px 0px 10px 0px;\n    margin : 5px;\n"],["\n    background-color : #34254e; \n    font-size : 16px;\n    color : white;\n    text-align : center;\n    padding : 10px 0px 10px 0px;\n    margin : 5px;\n"]),B=(0,h.default)(["\n    background-color : #3e3e3e; \n    font-size : 16px;\n    color : white;\n    text-align : center;\n    padding : 10px 0px 10px 0px;\n    margin : 5px;\n"],["\n    background-color : #3e3e3e; \n    font-size : 16px;\n    color : white;\n    text-align : center;\n    padding : 10px 0px 10px 0px;\n    margin : 5px;\n"]),D=k.default.div(N),G=k.default.div(O),H=k.default.div(P),J=k.default.div(T),U=k.default.div(j),Y=k.default.div(I),q=k.default.div(I),A=k.default.div(R),F=k.default.div(B),K=function(e){function t(){(0,r.default)(this,t);var e=(0,o.default)(this,(t.__proto__||(0,i.default)(t)).call(this));return e.state={items:[{id:1,name:"Bag",price:1e3,try:!1},{id:2,name:"Dag",price:1e3,try:!1},{id:5,name:"Cag",price:500,try:!1}],total:2500},e}return(0,m.default)(t,e),(0,c.default)(t,[{key:"getCurrentItems",value:function(e){for(var t=[],n=this.state.total,a=0;a<this.state.items.length;a++)this.state.items[a].id!=e?t.push(this.state.items[a]):(n-=this.state.items[a].price,this.state.items[a].try&&(n+=.1*this.state.items[a].price));console.log(this.state),this.setState({items:t,total:n})}},{key:"setTryState",value:function(e){for(var t=this.state.total,n=[],a=0,l=0;l<this.state.items.length;l++)this.state.items[l].id===e?(n.push({id:this.state.items[l].id,name:this.state.items[l].name,price:this.state.items[l].price,try:!this.state.items[l].try}),a=.1*this.state.items[l].price,t+=this.state.items[l].try?a:-a):n.push(this.state.items[l]);console.log(t),this.setState({items:n,total:t})}},{key:"render",value:function(){for(var e=this,t=[],n=0;n<this.state.items.length;n++){var a;!function(){var l=e.state.items[n].id;a=!1===e.state.items[n].try?g.default.createElement("center",null,g.default.createElement(q,{className:"col-1"},g.default.createElement("i",{class:"zmdi zmdi-male-alt",onClick:function(){return e.setTryState(l)}})," ")):g.default.createElement("center",null,g.default.createElement(q,{className:"col-1"}," ",g.default.createElement("i",{class:"zmdi zmdi-male",onClick:function(){return e.setTryState(l)}})," ")),t.push(g.default.createElement(D,{className:"row"},g.default.createElement("div",{class:"col-3"},g.default.createElement(M.default,null)),g.default.createElement("div",{class:"col-5"},e.state.items[n].name),g.default.createElement("div",{class:"col-2"},e.state.items[n].price),a,g.default.createElement(Y,{className:"col-1"},g.default.createElement("center",null,g.default.createElement("i",{class:"zmdi zmdi-delete",onClick:function(){return e.getCurrentItems(l)}})))))}()}return g.default.createElement("div",null,g.default.createElement(z.default,null),g.default.createElement("div",{class:"container"},g.default.createElement(v.Heading,null,"Checkout"),g.default.createElement("div",{class:"row"},g.default.createElement("div",{class:"col-8"},g.default.createElement(H,{className:"container"},g.default.createElement(J,{className:"row"},g.default.createElement("div",{class:"col-8"},"PRODUCT"),g.default.createElement("div",{class:"col-2"},"PRICE"),g.default.createElement("div",{class:"col-1"},"TRY"),g.default.createElement("div",{class:"col-1"})),t),g.default.createElement("a",{onClick:function(){return e.setState({items:[],total:0})}},"Clear")),g.default.createElement("div",{class:"col-4"},g.default.createElement("hr",null),g.default.createElement(G,{className:"container"},"Total : ",this.state.total),g.default.createElement("hr",null),g.default.createElement(U,{class:"row"},g.default.createElement(A,null,"Proceed"),g.default.createElement(F,null,"Go Back"))))),g.default.createElement("br",null),g.default.createElement(w.default,null))}}]),t}(x.Component);t.default=K},240:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(9),i=a(l),s=n(0),r=a(s),d=n(4),c=a(d),u=(0,i.default)(["\n    width: 100%;\n    background: #ccc;\n    height: 150px;\n"],["\n    width: 100%;\n    background: #ccc;\n    height: 150px;\n"]),o=c.default.div(u),f=function(){return r.default.createElement(o,null)};t.default=f}},[238]);
            return { page: comp.default }
          })
        