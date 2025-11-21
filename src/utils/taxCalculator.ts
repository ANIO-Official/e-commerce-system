/*
 Takes parameter of object of type product
 Checks if product is of grocery category before applying appropriate taxing.
 Return price after tax.
 Use price (number type) parameter to apply tax to the result of discounted Price.
 Called in the getPriceWithDiscount method of the Product class and subclasses.
*/
import Product from "../models/Product"

export default function taxCalculator(product: Product, price:number):number{
if (product.category === 'groceries'){
	return price * (1 * 0.03)
}
return price * (1 * 0.0475)
}