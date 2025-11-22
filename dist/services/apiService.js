/*
 Import:
 - Error Classes to Add custom error handline.
 Export:
 - catalog variable that contain specifically the products property
   containing the array of product objects of the parsed response.
 Inside an async function
 1. Fetch all the products from an API (An object holding a property called 'products' holding an array of product objects)
 2. Place the fetch request within the try. Catch the error when Promise fails."
 3. Add a conditional to check ok property of response (productData)
 4. Add Custom Errors imported from Error Handler Module.
*/
import { DataError, FetchError } from "../utils/errorHandler.js";
export let catalog;
export async function fetchProducts() {
    try {
        //Fetch all the products data from the API
        const productData = await fetch('https://dummyjson.com/products');
        if (!productData.ok) {
            console.error(new FetchError('Failed to fetch product catalog from API.'));
        }
        const data = await productData.json();
        catalog = data.products;
    }
    catch (e) {
        console.error(new DataError('Could not  parse data from API to create class.'));
    }
    return catalog;
}
//# sourceMappingURL=apiService.js.map