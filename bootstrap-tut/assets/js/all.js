(function(){
var App = App || {};

var i = 0;

i+= 1;

console.log('i = ' + i);

}());
(function(){

	window.App = window.App || {};

	App.slider = (function(){

		function init(){
			console.log('init slider');
		}

		return {
			init: init
		};

	}());

	App.slider.init();
}());

