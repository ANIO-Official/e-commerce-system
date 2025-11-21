/*
 Import the Products to make new Array variable that holds objects
 of the class.
 Inside an async function
 1. Get all the products from an API (An object called 'products' holding an array of product objects)
 2. For each product object in the product's array, create a new instance of the Product class and set up their property values.
 3. Place the fetch request within the try. Catch the error when Promise fails."
 4. Update Catch with Custom Error imported from Error Handler Module.
*/
import Product from "../models/Product"

export let products: Product[] = []

export async function createProducts(){
	try{
		//Fetch all the products data from the API
		const productData = await fetch('https://dummyjson.com/products')
		const data = await productData.json()
		
		/*
         Create New Products & Push to products Array
         Do not type product of type object, the base object type does not
         contain properties these specific objects. Instead type by object
         containing specific values
         */
		return products = data.map((product: { id: number; title: string; description: string; category: string; price: number; discountPercentage: number }) => new Product (product.id, product.title, product.description,
		product.category, product.price, product.discountPercentage))
		
	}catch(e){
        console.error('Fetch Error', 'Could not fetch data from API to create class.')
    }
}