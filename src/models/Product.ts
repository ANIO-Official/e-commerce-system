/*
 Import the Tax & Discount Calculator for Product
 method getPriceWithDiscount
*/

export default class Product {
    id: number
    title: string
    description: string
    category: string
    price: number
    discountPercentage: number

    constructor(id: number, title: string, description: string,
    category: string, price: number, discountPercentage: number){
        this.id = id
        this.title = title
        this.description = description
        this.category = category
        this.price = price
        this.discountPercentage = discountPercentage
    }

    /*
     Display a template literal of the current product details.
     Ideally shows these details to check changes in the product details after an update.
    */
    displayDetails():string{
        
    }

    /*
     Display a template literal of price after discount then taxes are applied.
     1. Apply the discount first. (Taxes cannot be discounted)
     2. Apply and return the taxes to the discounted price to get final price.
    */
    getPriceWithDiscount(){

    }
}