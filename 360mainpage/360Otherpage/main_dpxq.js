requirejs.config({
	baseUrl:"lib",
	paths:{
		jquery:"jquery",
		underscore:"underscore",
		backbone:"backbone"
	},
});

require(["jquery","moduleJS/dpxq_product.js"],function($,product){
	$(function(){
		product.showProduct();
	})
})