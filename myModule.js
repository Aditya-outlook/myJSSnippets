// var module = (function(){})(module);


var Module = (
	function() {
		"use strict";
		
		var module = {},
		publicVar1, 
		privateVar1;
		
		function publicMethod1(){
		};
		function publicMethod2(){
		};
		
		function privateMethod1(){
		};
		
		module.publicVar1 = publicVar1;
		
		module.publicMethod1 = publicMethod1;
		module.publicMethod2 = publicMethod2;
		
		return module;
	}
)(Module);