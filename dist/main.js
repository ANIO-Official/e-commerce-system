/*
 Import Product class for type checking.
 Import entire API service module for access to exported
 products array of Product objects and async fetch Request function.
*/
import Product from "./models/Product.js";
import * as APIService from "./services/apiService.js";
import { DataError, IndexingError } from "./utils/errorHandler.js";
/*
 1. Run the Fetch Products Function
 2. Map the resulting catalog to new Products. Cache into an array variable.
 3. In another function, pass specific array items to return details of the item, including price.
*/
await APIService.fetchProducts(); //error handling occurs in the apiService module.
const products = APIService.catalog.map((product) => new Product(product.id, product.title, product.description, product.category, product.price, product.discountPercentage));
//Simulate clicking a product in the system to check.
function getProductInformation(product) {
    //check if product exist
    if (product === undefined || null) {
        throw new IndexingError(`This product does not exist.`);
    }
    //Continue when id does exitst
    try {
        console.log(product.displayDetails());
        console.log(product.getPriceWithDiscount());
    }
    catch (e) {
        if (e instanceof DataError) {
            console.error('Data Error:', e.message);
        }
        if (e instanceof IndexingError) {
            console.error('Indexing Error:', e.message);
        }
    }
    finally {
        console.log(`Loaded all data for ${product.title}`);
        return console.log("------------------------------------"); //separator
    }
}
//simulate loading the full list of products. 
function getAllProductInformation() {
    try {
        return products.map((product) => getProductInformation(product));
    }
    catch (e) {
        if (e instanceof DataError) {
            console.error('Data Error:', `Failed to load product catalog. Reason:`, e.message);
        }
    }
    finally {
        console.log('Loaded All Products in catalog.');
    }
}
//Product Get Examples | Simulate On Click Event of Choosing Products to View
getProductInformation(products[0]); //Clicked Product 1
getProductInformation(products[5]); //Clicked Product 6
getProductInformation(products[7]); //Clicked Product 8
//Product Examples of Error Producing. Interactions
/*
 Simulates clicking a product with invalid properties.
 A product with invalid id but does exist. Should be red underlined as incorrect:
 Shouldreturn an Data error.
*/
products[15].id = null;
getProductInformation(products[15]);
/*
 Simulates clicking a product with invalid properties.
 A product with invalid price but does exist. Should be red underlined as incorrect:
 Should return a Data error
*/
products[16].discountPercentage = null;
getProductInformation(products[16]);
/*
 A product with an invalid index. Does not exist.
 Should return an indexing error.
*/
getProductInformation(products[-1]);
/*
 Product Get All Example | Simulate Loading all Products. [194 products]
 Commented out due to the quantity of products to load. Uncomment to see all
 product information in the console.
*/
//console.log(getAllProductInformation())
//# sourceMappingURL=main.js.map