webpackJsonp([22],{96:function(e,t,n){"use strict";function r(e){var t=e.context.theme,n=e.props,r=n.style,o=(n.renderContentWidth,n.renderContentHeight);return{root:(0,t.prepareStyles)(i({},l.default(4,a(t.baseHigh).setAlpha(.025).toRgbString(),"transparent"),{fontSize:14,color:t.baseMediumHigh,padding:40,width:"100%",minHeight:o,margin:"0 auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},r)),icon:{fontSize:280,color:t.accent},desc:{marginTop:40,borderLeft:"12px solid "+t.accent,padding:"0 10px",fontWeight:"lighter",color:t.accent},descTitle:{fontSize:36,lineHeight:1,fontWeight:"lighter"},descSubtitle:{fontWeight:"lighter",lineHeight:1.6,fontSize:16}}}var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),i=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e};Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),s=n(3),a=n(22),l=n(23),p=n(4),h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={},t}return o(t,e),t.prototype.render=function(){var e=this.props,t=(e.screenType,e.renderContentWidth,e.renderContentHeight,this.context.theme,r(this));return c.createElement("div",{style:t.root},c.createElement(p.default,{style:t.icon},"MapDirections"),c.createElement("div",{style:t.desc},c.createElement("h5",{style:t.descTitle},"ERROR CODE: 404"),c.createElement("p",{style:t.descSubtitle},"We can't seem to find the page you're looking for.")))},t}(c.Component);h.defaultProps={},h.contextTypes={theme:s.object},t.default=h}});