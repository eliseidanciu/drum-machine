(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),s=a.n(o),c=(a(14),a(1)),i=a(2),d=a(4),u=a(3),l=a(5),m=(a(15),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handlePlay=function(){var e=a.props,t=e.sound,n=e.updateDisplay;document.getElementById(t.keyTrigger).play(),n(t.id)},a.handleKeyPress=function(e){var t=a.props.sound.keyCode;e.keyCode===t&&a.handlePlay()},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props.sound,t=e.url,a=e.keyTrigger,n=e.id;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"drum-pad",id:n,onClick:this.handlePlay},r.a.createElement("audio",{src:t,id:a,className:"clip"}),a))}}]),t}(n.Component)),p=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.soundFX,a=e.updateDisplay;return r.a.createElement("div",null,t.map(function(e){return r.a.createElement(m,{key:e.id,updateDisplay:a,sound:e})}))}}]),t}(n.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.displayText;return r.a.createElement("div",{id:"display"},r.a.createElement("h3",null,e))}}]),t}(n.Component);y.defaultProps={displayText:""};var h=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).updateDisplay=function(e){a.setState({displayText:e})},a.state={soundFX:k,displayText:""},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.soundFX,a=e.displayText;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"drum-machine",className:"mx-auto"},r.a.createElement(y,{displayText:a}),r.a.createElement(p,{updateDisplay:this.updateDisplay,soundFX:t}))))}}]),t}(n.Component),k=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],f=h;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.a4793291.chunk.js.map