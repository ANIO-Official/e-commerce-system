/*
 Takes parameter of object of type product.
 Get the price and discount percentage from Product input.
 Returns a number value of the discount dollar amount to be subtracted
 from the price.
*/
import Product from "../models/Product.js";
export default function calculateDiscount(product) {
    return parseFloat((product.price * (product.discountPercentage / 100)).toFixed(2));
}
//# sourceMappingURL=discountCalculator.js.map