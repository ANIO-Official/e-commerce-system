/*
 Import Product class for type checking.
 Import entire API service module for access to exported
 products array of Product objects and async fetch Request function.
*/
import Product from "./models/Product"
import * as APIService from "./services/apiService"
import { DataError, FetchError } from "./utils/errorHandler"

export let products: Product[] = []
/*
 Create New Products & Push to products Array
 Do not type product of type object, the base object type does not
 contain properties these specific objects have nor are they of
 type Product yet. Instead type by an interface that contains 
 the shape a product object should have. Appeases TypeScript's
 type checking for product in map method. 
*/
interface isProduct{
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number 
}

//Try catch due to products needing to grab data that was fetched in apiService.
//A double check.
try{
    APIService.fetchProducts()
    products = APIService.data.map((product: isProduct) => new Product (product.id, product.title, product.description,
    product.category, product.price, product.discountPercentage))
}
catch(e){
 new DataError('Unable to instance new products with parsed data from API.')
}

async function fetchAndDisplayProductDetails(product:Product){
    try{
        return fetch(product.displayDetails())
    }
    catch(e){
        new FetchError(`Unable to fetch and perform displayDetails method of ${product.title}.`)
    }
}

//Sample Product information being display: Log product details & final price to console.

console.log(fetchAndDisplayProductDetails(products[10]), products[10].getPriceWithDiscount) 

console.log(fetchAndDisplayProductDetails(products[11]), products[11].getPriceWithDiscount ) 