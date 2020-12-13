'use strict';function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var WebSocketClient=/*#__PURE__*/function(){function d(a,b){_classCallCheck(this,d),this.instance=null,this.url=a,this.options=b||this.defaultOptions(),this.options&&(this.reconnectEnabled=b.reconnectEnabled||!1,this.reconnectEnabled&&(this.reconnectInterval=b.reconnectInterval)),this.onOpen=null,this.onMessage=null,this.onClose=null,this.onError=null}return _createClass(d,[{key:"defaultOptions",value:function(){return{reconnectEnabled:!1,reconnectInterval:0}}},{key:"connect",value:function(){var c=this;this.instance=new WebSocket(this.url),this.instance.onopen=function(){"function"==typeof c.onOpen&&c.onOpen()},this.instance.onmessage=function(a){"function"==typeof c.onMessage&&c.onMessage(a)},this.instance.onclose=function(a){"function"==typeof c.onClose&&c.onClose(a),!a.wasClean&&c.reconnectEnabled&&c.reconnect()},this.instance.onerror=function(a){"function"==typeof c.onError&&c.onError(a)}}},{key:"reconnect",value:function(){var b=this;delete this.instance,setTimeout(function(){b.connect()},this.reconnectInterval)}},{key:"sendObj",value:function(b){this.instance.send(JSON.stringify(b))}},{key:"removeListeners",value:function(){this.onOpen=null,this.onMessage=null,this.onClose=null,this.onError=null}}]),d}(),Main={install:function(e,a){var b=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},c=new WebSocketClient(a,b);b.connectManually||c.connect(),e.prototype.$socketClient=c}};module.exports=Main;
//# sourceMappingURL=VueSimpleWebSocket.js.map
