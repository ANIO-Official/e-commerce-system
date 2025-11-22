/*
 Import the Products to make new Array variable that holds objects
 of the class.
 Inside an async function
 1. Get all the products from an API (An object called 'products' holding an array of product objects)
 2. For each product object in the product's array, create a new instance of the Product class and set up their property values.
 3. Place the fetch request within the try. Catch the error when Promise fails."
 4. Update Catch with Custom Error imported from Error Handler Module.
*/
import Product from "../models/Product.js";
import { DataError, FetchError } from "../utils/errorHandler.js";
export let data = [];
export async function fetchProducts() {
    try {
        //Fetch all the products data from the API
        const productData = await fetch('https://dummyjson.com/products');
        if (!productData.ok) {
            throw new FetchError('Failed to fetch product catalog from API.');
        }
        data = await productData.json();
    }
    catch (e) {
        new DataError('Could not parse data from API.');
    }
}
//# sourceMappingURL=apiService.js.map