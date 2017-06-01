webpackJsonp([20],{103:function(t,e,o){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__assign||Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++){e=arguments[o];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},r=this&&this.__rest||function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&(o[n[i]]=t[n[i]]);return o};Object.defineProperty(e,"__esModule",{value:!0});var l=o(0),s=o(1),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={showTooltip:!1},e.timer=null,e.unShowTimer=null,e.showTooltip=function(t){clearTimeout(e.unShowTimer);var o=function(){e.setState({showTooltip:!0})};e.props.autoClose?(o(),e.timer=setTimeout(function(){e.setState({showTooltip:!1})},e.props.timeout)):o()},e.notShowTooltip=function(t){e.unShowTimer=setTimeout(function(){e.setState({showTooltip:!1}),clearTimeout(e.unShowTimer)},500)},e.getStyle=function(t,o){void 0===t&&(t=!1),void 0===o&&(o={});var n=e,r=n.context.theme,l=n.props.style;return r.prepareStyles(i({height:28,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",padding:"4px 8px",transition:"all .25s 0s ease-in-out",border:"1px solid "+r.baseLow,color:r.baseMediumHigh,background:r.chromeMedium,opacity:t?1:0,transform:"translateY("+(t?"0px":"10px")+")",position:"absolute",fontSize:14,pointerEvents:t?"all":"none",zIndex:r.zIndex.tooltip},l,o))},e.getTooltipStyle=function(){var t=e.refs,o=t.rootElm,n=t.tooltipElm;if(!o||!n)return e.getStyle();var i=(e.context.theme,e.props),r=i.verticalPosition,l=i.horizontalPosition,s=i.margin,a=o.getBoundingClientRect(),c=a.width,u=a.height,p=n.getBoundingClientRect().width,h=n.getBoundingClientRect().height,d=e.state.showTooltip,f={};if(void 0!==c&&void 0!==u){switch(l){case"left":f.right=0;break;case"center":f.left=(c-p)/2;break;case"right":f.left=0}switch(r){case"top":f.top=-h-s;break;case"center":f.top=(u-h)/2;break;case"bottom":f.top=u+s}}return e.getStyle(d,f)},e}return n(e,t),e.prototype.componentWillUnmount=function(){clearTimeout(this.timer)},e.prototype.render=function(){var t=this.props,e=(t.verticalPosition,t.timeout,t.autoClose,t.margin,t.horizontalPosition,t.show,t.children),o=(t.itemHeigh,t.content),n=t.contentNode,s=r(t,["verticalPosition","timeout","autoClose","margin","horizontalPosition","show","children","itemHeigh","content","contentNode"]);return this.context.theme,l.createElement("div",{style:{position:"relative",display:"inline-block"},ref:"rootElm",onMouseEnter:this.showTooltip,onClick:this.showTooltip,onMouseLeave:this.notShowTooltip},l.createElement("span",i({},s,{ref:"tooltipElm",style:this.getTooltipStyle()}),o||n),e)},e}(l.Component);a.defaultProps={verticalPosition:"bottom",horizontalPosition:"center",margin:4,autoClose:!1,timeout:2500},a.contextTypes={theme:s.object},e.default=a},99:function(t,e,o){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=o(0),r=o(3),l=o(4),s=o(12),a=o(103),c=Object.keys(l.icons),u={display:"flex",flexDirection:"column",alignItems:"center",margin:8,width:80,height:80,padding:"12px 4px 4px"},p={fontSize:24},h={width:"100%",fontSize:10,marginTop:8,wordWrap:"break-word",textAlign:"center"},d={display:"inherit",overflow:"hidden",border:"none",outline:"none",opacity:0,width:40,height:0},f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={currIconNames:c},e.inputTimer=null,e.handleMouseEnter=function(t){Object.assign(t.currentTarget.style,{background:e.context.theme.listLow})},e.handleMouseLeave=function(t){Object.assign(t.currentTarget.style,{background:"none"})},e.handleCopy=function(t){var e=document.activeElement,o=t.currentTarget.children[0].children[0];o.focus(),o.setSelectionRange(0,o.value.length),document.execCommand("copy"),e.focus()},e.handleInput=function(t){clearTimeout(e.inputTimer),e.inputTimer=setTimeout(function(){e.setState({currIconNames:c.filter(function(e){return e.toLowerCase().includes(t.toLowerCase())})}),window.scrollTo(0,0)},250)},e}return n(e,t),e.prototype.render=function(){var t=this,e=this,o=e.context.theme,n=e.state.currIconNames;return u=o.prepareStyles(u),i.createElement("div",{style:{width:"100%",fontSize:14}},i.createElement("div",{style:{position:"relative",width:"100%",height:60}},i.createElement("div",{style:{position:"fixed",height:60,width:"100%",zIndex:o.zIndex.tooltip+1}}),i.createElement("div",{style:{position:"fixed",padding:10,zIndex:o.zIndex.tooltip+1}},i.createElement(s.default,{placeholder:"Search Icons",background:o.altHigh,style:{width:320},onChangeValue:this.handleInput}))),i.createElement("p",{style:{lineHeight:1.8,padding:10}},"Represents an icon that uses a glyph from the Segoe MDL2 Assets font as its content. (",n.length," icon)"),i.createElement("div",{style:o.prepareStyles({width:"100%",display:"flex",alignItems:"flex-start",justifyContent:"flex-start",flexWrap:"wrap"})},n.map(function(e,o){return i.createElement(a.default,{verticalPosition:"bottom",horizontalPosition:"center",onClick:t.handleCopy,contentNode:i.createElement("div",null,i.createElement("input",{value:e,style:d}),i.createElement("p",null,"Copy")),style:{cursor:"pointer"},margin:-6,key:""+o},i.createElement("div",{style:u,onMouseEnter:t.handleMouseEnter,onMouseLeave:t.handleMouseLeave,key:""+o},i.createElement(l.default,{style:p},e),i.createElement("p",{style:h},e)))})))},e}(i.Component);f.contextTypes={theme:r.object},e.default=f}});