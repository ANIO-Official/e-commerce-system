/*
 Takes parameter of object of type product.
 Get the price and discount percentage from Product input.
 Returns a number value of the discount dollar amount to be subtracted
 from the price.
*/
import Product from "../models/Product"

export default function calculateDiscount(product: Product):number{
	return product.price * product.discountPercentage
}
