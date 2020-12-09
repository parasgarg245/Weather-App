(()=>{"use strict";var n={740:(n,e,t)=>{t.d(e,{Z:()=>o});var a=t(645),r=t.n(a)()((function(n){return n[1]}));r.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\n/* --------HTML5 display-role reset for older browsers-------- */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection { display: block; }\n\nbody { line-height: 1; }\n\nol,\nul { list-style: none; }\n\nblockquote,\nq { quotes: none; }\n\nblockquote::before,\nblockquote::after,\nq::before,\nq::after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n",""]);const o=r},122:(n,e,t)=>{t.d(e,{Z:()=>o});var a=t(645),r=t.n(a)()((function(n){return n[1]}));r.push([n.id,"*,\n*::before,\n*::after { box-sizing: border-box; }\n\nbody {\n  font-family: 'Roboto', sans-serif;\n  color: #49392C;\n}\n\n.overall-wrap {\n  display: flex;\n  align-items: center;\n  padding-left: 225px;\n  /* justify-content: center; */\n  height: 100vh;\n  /* background: radial-gradient(circle, rgba(234,244,251,1) 0%, rgba(156,204,236,1) 100%); */\n  background: radial-gradient(circle, rgba(156,204,236,1) 0%, rgba(234,244,251,1) 100%);\n}\n\n.main-wrap {\n  /* border: 1px solid red; */\n  border: 0.1px solid #6595BB;\n  border-radius: 10px;\n  /* width: 55%; */\n  /* height: 100%; */\n  /* box-shadow: -1px 1px 23px 5px #6595BB; */\n  /* box-shadow: 0px 0px 10px 2px rgba(101, 149, 187, 0.75); */\n  box-shadow: 7px 7px 15px 2px rgba(101,149,187,0.8);\n  font-weight: 500;\n  background: rosybrown;\n  text-align: center;\n}\n\n.menu-toggle {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  border: none;\n  padding: 0 5px 0 0;\n  font-size: 30px;\n  line-height: 0.8;\n  background: none;\n  cursor: pointer;\n}\n\n.toggle-hide {\n  display: none;\n}\n\n.current-weather {\n  display: flex;\n  justify-content: center;\n  height: 250px;\n  /* border: 1px solid green; */\n  margin-bottom: 10px;\n  border-radius: 10px 10px 0 0;\n  padding: 30px 0 15px 0;\n  background: rgba(255, 255, 255, 0.5); /* rgba(244, 252, 252, 0.5); */\n  color: #fff; /* #E1F2FE; /* or white */\n}\n\n.location-time,\n.temperature,\n.details {\n  display: flex;\n  flex-direction: column;\n  /* flex: 1; */\n}\n\n.temperature {\n  margin: 0 20px;\n  justify-content: center;\n}\n\n.location {\n  margin-bottom: 10px;\n  font-size: 25px;\n  font-weight: 600;\n  text-shadow: 0 2px rgba(73, 57, 44, 0.2);\n}\n\n.current-weather-temp  {\n  margin-bottom: 10px;\n  font-size: 50px;\n  font-weight: 600;\n  text-shadow: 1px 4px rgba(73, 57, 44, 0.5);\n}\n\n.date,\n.time,\n.feels-like,\n.detail-heading {\n  margin-bottom: 5px;\n  /* font-size: 18px; */\n}\n\n.description {\n  margin-bottom: 15px;\n  font-size: 20px;\n  font-weight: 600;\n  font-style: italic;\n  text-shadow: 0 2px rgba(73, 57, 44, 0.2);\n}\n\n.measurement-details {\n  display: flex;\n}\n\n.measurement-detail {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 0 10px;\n}\n\n/* .detail-heading {\n  margin-bottom: 5px;\n} */\n\n.forecast {\n  display: flex;\n  justify-content: center;\n  border-radius: 0 0 10px 10px;\n  padding: 15px 0;\n  background: #fff;\n}\n\n.forecast-card {\n  display: flex;\n  flex-direction: column;\n}\n\n.menu {\n  position: absolute;\n  top: 30px;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border: 1px solid #F4FCFC;\n  border-top-left-radius: 10px;\n  padding-top: 5px;\n  width: 20%;\n  height: calc(100% - 30px);\n  background: rgba(244, 252, 252, 0.1); /* hex:  #F4FCFC */\n}\n\n.search-actions {\n  margin-bottom: 15px;\n}\n\n.search-bar {\n  display: block;\n  margin-bottom: 10px;\n  border: none;\n  border-radius: 15px 0 15px 0;\n  border-bottom: 3px solid rgba(101,149,187,0.8);\n  outline: none;\n  padding: 10px 10px;\n  width: 100%;\n  font-size: 16px;\n  font-weight: 600;\n  background: rgba(255, 255, 255, 0.7);\n  transition: 0.2s ease-out;\n}\n\n.search-bar:focus {\n  background: rgba(255, 255, 255, 1);\n}\n\n.save-location,\n.current-location {\n  display: block;\n  margin-bottom: 1px;\n  border: none;\n  padding: 5px;\n  width: 100%;\n  font-size: 14px;\n  text-align: left;\n  background: rgba(101,149,187,0.25);\n  cursor: pointer;\n}\n\n.saved-locations-heading {\n  margin-bottom: 5px;\n  padding-left: 5px;\n}\n\n.saved-list-item {\n  display: flex;\n  margin-bottom: 1px;\n  background: rgba(101,149,187,0.25);\n}\n\n.city-name {\n  flex: 1;\n  text-align: left;\n}\n\n.city-name,\n.delete-city {\n  border: none;\n  padding: 5px;\n  font-size: 14px;\n  background: none;\n  cursor: pointer;\n}\n\n.menu-bottom {\n  display: flex;\n  justify-content: center;\n  border-top: 3px solid rgba(101,149,187,0.8);\n  padding: 10px;\n  background: rgba(101,149,187,0.25);\n}\n\n.temperature-toggle-wrap {\n  margin: 0 5px;\n  border: 2px solid rgba(101,149,187,0.8);\n  border-radius: 10px;\n  width: 35px;\n  line-height: 0;\n}\n\n.temperature-toggle {\n  border: 0;\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  background: #000;\n  cursor: pointer;\n}\n\n.temp-toggle-one {\n  background: #fff;\n}\n\n.temp-toggle-two {\n  background: rgba(101,149,187,1);\n}\n",""]);const o=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,a){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(a)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);a&&r[p[0]]||(t&&(p[2]?p[2]="".concat(t," and ").concat(p[2]):p[2]=t),e.push(p))}},e}},379:(n,e,t)=>{var a,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),o=[];function i(n){for(var e=-1,t=0;t<o.length;t++)if(o[t].identifier===n){e=t;break}return e}function d(n,e){for(var t={},a=[],r=0;r<n.length;r++){var d=n[r],p=e.base?d[0]+e.base:d[0],l=t[p]||0,s="".concat(p," ").concat(l);t[p]=l+1;var c=i(s),u={css:d[1],media:d[2],sourceMap:d[3]};-1!==c?(o[c].references++,o[c].updater(u)):o.push({identifier:s,updater:f(u,e),references:1}),a.push(s)}return a}function p(n){var e=document.createElement("style"),a=n.attributes||{};if(void 0===a.nonce){var o=t.nc;o&&(a.nonce=o)}if(Object.keys(a).forEach((function(n){e.setAttribute(n,a[n])})),"function"==typeof n.insert)n.insert(e);else{var i=r(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var l,s=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function c(n,e,t,a){var r=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(n.styleSheet)n.styleSheet.cssText=s(e,r);else{var o=document.createTextNode(r),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(o,i[e]):n.appendChild(o)}}function u(n,e,t){var a=t.css,r=t.media,o=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=a;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(a))}}var h=null,b=0;function f(n,e){var t,a,r;if(e.singleton){var o=b++;t=h||(h=p(e)),a=c.bind(null,t,o,!1),r=c.bind(null,t,o,!0)}else t=p(e),a=u.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return a(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;a(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var t=d(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var a=0;a<t.length;a++){var r=i(t[a]);o[r].references--}for(var p=d(n,e),l=0;l<t.length;l++){var s=i(t[l]);0===o[s].references&&(o[s].updater(),o.splice(s,1))}t=p}}}}},e={};function t(a){if(e[a])return e[a].exports;var r=e[a]={id:a,exports:{}};return n[a](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),a=t(740);e()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;var r=t(122);e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var o=window.Skycons;(function(){var n=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=document.createElement(n);return a&&(r.id=a),r.className=e,t&&(r.textContent=t),r},e=n("div","overall-wrap"),t=n("main","main-wrap");document.body.appendChild(e),e.appendChild(t);var a=function(e,t){var a=n("div","measurement-detail"),r=n("span","detail-heading",e),o=n("span","detail-measure",t);return a.appendChild(r),a.appendChild(o),a},r=function(e,t,a,r){var o=n("div","forecast-card"),i=n("span","day",e),d=n("canvas",t,"",a);d.setAttribute("width","128"),d.setAttribute("height","128");var p=n("span","forecast-temp",r);return o.appendChild(i),o.appendChild(d),o.appendChild(p),o},i=function(e){var t=n("li","saved-list-item"),a=n("button","city-name",e);a.setAttribute("type","button"),t.appendChild(a);var r=n("button","delete-city","x");return r.setAttribute("type","button"),t.appendChild(r),t},d=function(n,e){var t=new o({monochrome:!1});t.add(n,o[e]),t.play()};return{weatherPage:function(){var o=n("button","menu-toggle");o.setAttribute("data-toggle",""),e.appendChild(o);var p=n("span","toggle-show","☰"),l=n("span","toggle-hide","X");o.appendChild(p),o.appendChild(l);var s=n("section","current-weather");t.appendChild(s);var c=n("div","location-time"),u=n("span","location","LONDON, GB"),h=n("span","date","6 December 2020"),b=n("span","time","5 O'Clock");c.appendChild(u),c.appendChild(h),c.appendChild(b);var f=n("section","temperature"),g=n("span","current-weather-temp","5° C");g.setAttribute("data-temparature","");var m=n("span","feels-like","Feels like, 2° C"),x=n("span","min-max","1° C / 10° C");f.appendChild(g),f.appendChild(m),f.appendChild(x);var v=n("section","details"),C=n("canvas","icon-one","","icon1");C.setAttribute("width","128"),C.setAttribute("height","128");var y=n("span","description","CLOUDY"),w=n("div","measurement-details"),k=a("Pressure","5 HPA"),A=a("Humidity","9%"),S=a("Wind","20 M/S");w.appendChild(k),w.appendChild(A),w.appendChild(S),v.appendChild(C),v.appendChild(y),v.appendChild(w),s.appendChild(c),s.appendChild(f),s.appendChild(v),d("icon1","PARTLY_CLOUDY_DAY");var N=n("section","forecast");t.appendChild(N);var O=r("Monday","icon2","icon2","3°/14°"),F=r("Tuesday","icon3","icon3","0°/17°"),j=r("Wednesday","icon4","icon4","4°/18°"),L=r("Thursday","icon5","icon5","8°/20°"),M=r("Friday","icon6","icon6","10°/19°");N.appendChild(O),N.appendChild(F),N.appendChild(j),N.appendChild(L),N.appendChild(M),d("icon2","RAIN_SNOW_SHOWERS_DAY"),d("icon3","FOG"),d("icon4","RAIN_SNOW_SHOWERS_NIGHT"),d("icon5","WIND"),d("icon6","HAIL");var T=n("section","menu");e.appendChild(T);var D=n("div","menu-top");T.appendChild(D);var E=n("div","search-actions");D.appendChild(E);var q=n("input","search-bar");q.setAttribute("placeholder","Enter a City...");var z=n("button","save-location","Save this Location");z.setAttribute("type","button");var B=n("button","current-location","Go to Current Location");B.setAttribute("type","button"),E.appendChild(q),E.appendChild(z),E.appendChild(B);var _=n("section","saved-locations");D.appendChild(_);var H=n("h4","saved-locations-heading","Saved Locations");_.appendChild(H);var R=n("ul","saved-locations-list");_.appendChild(R);var I=i("London, GB"),W=i("Buenos Aires, AR"),P=i("Lagos, NG");R.appendChild(I),R.appendChild(W),R.appendChild(P);var G=n("div","menu-bottom");T.appendChild(G);var Y=n("span","celsius","°C");G.appendChild(Y);var Z=n("div","temperature-toggle-wrap");G.appendChild(Z);var J=n("button","temperature-toggle");Z.appendChild(J);var U=n("span","fahrenheit","°F");G.appendChild(U)},formatDate:function(n,e){var t=n.getDate(),a=["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()],r=n.getFullYear();e.textContent="".concat(t," ").concat(a," ").concat(r)},updateWeatherContent:function(n,e,t,a,r,o,i,d,p,l,s,c){n.textContent,e.textContent,t.textContent,a.textContent,r.textContent,o.textContent,i.textContent}}})().weatherPage()})()})();