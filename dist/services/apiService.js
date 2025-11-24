/*
 Import:
 - isProduct interface to type the variable catalog that holds the product objects
 - Error Classes to Add custom error handling.
 Export:
 - catalog variable. A data array to access in main file.
 Inside an async function
 1. Fetch all the products from an API (An object holding a property called 'products' holding an array of product objects)
 2. Place the fetch request within the try. Catch the error when Promise fails.
 3. Add a conditional to check ok property of response (productData) to see if it returns as expected.
 4. Add a conditional to check if the data parsed exist.
 5. Apply Custom Errors imported from Error Handler Module.
 6. Finally to confirm operation complete.
 7. Return the value of catalog.
*/
import { DataError, FetchError } from "../utils/errorHandler.js";
export let catalog;
export async function fetchProducts() {
    try {
        //Fetch all the products data from the API
        const productData = await fetch('https://dummyjson.com/products');
        if (!productData.ok) {
            //return error, let user know there was an issue fetching the data
            throw new FetchError('Failed to fetch product catalog from API. Check URL or API status.');
        }
        const data = await productData.json();
        if (data === undefined || null) {
            //return error, let user know data was undefined.
            throw new DataError('Data undefined. Could not parse data from API. Check fetch request, API status, or syntax in apiService module.');
        }
        catalog = data.products;
    }
    catch (e) {
        //return error, preventing catalog returning as undefined causing later issues in code.
        if (e instanceof DataError) {
            return console.error('Data Error:', e.message);
        }
        if (e instanceof FetchError) {
            return console.error('Fetch Error:', e.message);
        }
    }
    finally {
        console.log('Fetch attempt to API complete: Fetch all products from dummyjson.');
    }
    return catalog;
}
//# sourceMappingURL=apiService.js.map