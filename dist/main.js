/*
 Import Product class for type checking.
 Import entire API service module for access to exported
 products array of Product objects and async fetch Request function.
*/
import Product from "./models/Product.js";
import * as APIService from "./services/apiService.js";
import { DataError, FetchError } from "./utils/errorHandler.js";
/*
 1. Run the Fetch Products Function
 2. Map the resulting catalog to new Products. Cache into an array variable.
 3. In another function, pass specific array items to return details of the item, including price.
*/
await APIService.fetchProducts();
const products = APIService.catalog.map((product) => new Product(product.id, product.title, product.description, product.category, product.price, product.discountPercentage));
function fetchProductInformation(product) {
    try {
        console.log(product.displayDetails());
        console.log(product.getPriceWithDiscount());
        return "------------------------------------"; //separator
    }
    catch (e) {
        console.error(new FetchError(`Failed to fetch ${product.title}'s details and final price.`));
    }
}
function fetchAllProductInformation() {
    try {
        return products.map((product) => fetchProductInformation(product));
    }
    catch (e) {
        console.error(new DataError(`Failed to load product catalog.`));
    }
}
//Product Fetch Examples | Simulate On Click Event of Choosing Products to View
console.log(fetchProductInformation(products[0])); //Clicked Product 1
console.log(fetchProductInformation(products[5])); //Clicked Product 6
console.log(fetchProductInformation(products[7])); //Clicked Product 8
/*
 Product Fetch All Example | Simulate Loading all Products. [194 products]
 Commented out due to the quantity of products to load. Uncomment to see all
 product information in the console.
*/
//console.log(fetchAllProductInformation())
//# sourceMappingURL=main.js.map