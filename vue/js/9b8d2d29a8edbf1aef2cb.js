(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{182:function(t,s,e){"use strict";e.r(s);var n=e(284),o=e(212);for(var i in o)"default"!==i&&function(t){e.d(s,t,function(){return o[t]})}(i);e(282);var a=e(2),h=Object(a.a)(o.default,n.a,n.b,!1,null,null,null);s.default=h.exports},212:function(t,s,e){"use strict";e.r(s);var n=e(213),o=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(s,t,function(){return n[t]})}(i);s.default=o.a},213:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{points:[],canvasTxt:null,startX:0,startY:0,moveY:0,moveX:0,endY:0,endX:0,w:null,h:null,isDown:!1,color:"#000",linewidth:3,isDraw:!1}},mounted:function(){var t=this.$refs.canvasF;t.height=this.$refs.canvasHW.offsetHeight+100,t.width=this.$refs.canvasHW.offsetWidth+100,this.canvasTxt=t.getContext("2d"),this.canvasTxt.strokeStyle=this.color,this.canvasTxt.lineWidth=this.linewidth},methods:{mouseDown:function(t){(t=t||event).preventDefault();var s={x:t.offsetX,y:t.offsetY};this.startX=s.x,this.startY=s.y,this.canvasTxt.beginPath(),this.points.push(s),this.isDown=!0},touchStart:function(t){if((t=t||event).preventDefault(),1==t.touches.length){this.isDraw=!0;var s={x:t.targetTouches[0].clientX,y:t.targetTouches[0].clientY-(.5*document.body.offsetHeight+.1*this.$refs.canvasHW.offsetHeight)};this.startX=s.x,this.startY=s.y,this.canvasTxt.beginPath(),this.points.push(s)}},mouseMove:function(t){if((t=t||event).preventDefault(),this.isDown){var s={x:t.offsetX,y:t.offsetY};this.moveY=s.y,this.moveX=s.x,this.canvasTxt.moveTo(this.startX,this.startY),this.canvasTxt.lineTo(s.x,s.y),this.canvasTxt.stroke(),this.startY=s.y,this.startX=s.x,this.points.push(s)}},touchMove:function(t){if((t=t||event).preventDefault(),1==t.touches.length){var s={x:t.targetTouches[0].clientX,y:t.targetTouches[0].clientY-(.5*document.body.offsetHeight+.1*this.$refs.canvasHW.offsetHeight)};this.moveY=s.y,this.moveX=s.x,this.canvasTxt.moveTo(this.startX,this.startY),this.canvasTxt.lineTo(s.x,s.y),this.canvasTxt.stroke(),this.startY=s.y,this.startX=s.x,this.points.push(s)}},mouseUp:function(t){(t=t||event).preventDefault();var s={x:t.offsetX,y:t.offsetY};this.canvasTxt.closePath(),this.points.push(s),this.points.push({x:-1,y:-1}),this.isDown=!1},touchEnd:function(t){if((t=t||event).preventDefault(),1==t.touches.length){var s={x:t.targetTouches[0].clientX,y:t.targetTouches[0].clientY-(.5*document.body.offsetHeight+.1*this.$refs.canvasHW.offsetHeight)};this.canvasTxt.closePath(),this.points.push(s),this.points.push({x:-1,y:-1})}},overwrite:function(){this.canvasTxt.clearRect(0,0,this.$refs.canvasF.width,this.$refs.canvasF.height),this.points=[],this.isDraw=!1}}}},214:function(t,s,e){var n=e(283);"string"==typeof n&&(n=[[t.i,n,""]]);var o={transform:void 0};e(15)(n,o);n.locals&&(t.exports=n.locals)},282:function(t,s,e){"use strict";var n=e(214);e.n(n).a},283:function(t,s,e){(t.exports=e(14)(!1)).push([t.i,".draw-wrap canvas {\n  border: 1px solid #333;\n}\n",""])},284:function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"draw-wrap"},[e("canvas",{ref:"canvasF",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd,mousedown:t.mouseDown,mousemove:t.mouseMove,mouseup:t.mouseUp}}),t._v(" "),e("canvas",{ref:"canvasHW",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd,mousedown:t.mouseDown,mousemove:t.mouseMove,mouseup:t.mouseUp}}),t._v(" "),e("div",[e("span",{on:{click:t.overwrite}},[t._v("重写")])])])},o=[];e.d(s,"a",function(){return n}),e.d(s,"b",function(){return o})}}]);