/* code goes here */
//var order = {};
//order.product = "Self potrait in a straw hat";
//order.price = 15.0;
//order.quantity = 2;
//order.total = function(){
    //order["product"]	=	"Self	Portrait	in	a	Straw	Hat";
    //order["price"]	=	15.0;	order["quantity"]	=	2;
  //  order["total"]	=	function()	{	return	this.price	*	this.quantity;	};	
    //return this.price * this.quantity;
//}
var	order	=	{
    product:	"Self	Portrait	in	a	Straw	Hat",
    price:	15.0,
    quantity:	2,
    total:	function()	{	return	this.price	*	this.quantity;	}					};	
document.write("Product = " + order.product);
document.write("<br>Price="	+	order.price);
    document.write("<br>Quantity="	+	order.quantity);
    	document.write("<br>Total="	+	order.total());