/*
 Import Product class for type checking.
 Import entire API service module for access to exported
 products array of Product objects and async fetch Request function.
*/
import Product from "./models/Product.js";
import * as APIService from "./services/apiService.js";
import { DataError, FetchError } from "./utils/errorHandler.js";
export let products = [];
//Try catch due to products needing to grab data that was fetched in apiService.
//A double check.
try {
    APIService.fetchProducts();
    products = APIService.data.map((product) => new Product(product.id, product.title, product.description, product.category, product.price, product.discountPercentage));
}
catch (e) {
    new DataError('Unable to instance new products with parsed data from API.');
}
async function fetchAndDisplayProductDetails(product) {
    try {
        return fetch(product.displayDetails());
    }
    catch (e) {
        new FetchError(`Unable to fetch and perform displayDetails method of ${product.title}.`);
    }
}
//Sample Product information being display: Log product details & final price to console.
console.log(fetchAndDisplayProductDetails(products[10]), products[10].getPriceWithDiscount);
console.log(fetchAndDisplayProductDetails(products[11]), products[11].getPriceWithDiscount);
//# sourceMappingURL=main.js.map