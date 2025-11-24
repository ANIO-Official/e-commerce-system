/*
 Import the Tax & Discount Calculator for Product method getPriceWithDiscount
 Import custom error Data Error for data handling
 Export Product class for type checking and instancing
*/
import taxCalculator from "../utils/taxCalculator"
import calculateDiscount from "../utils/discountCalculator"
import { DataError } from "../utils/errorHandler"

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
    */
    displayDetails():string{
        if(!this.title || !this.id || !this.category || !this.description || !this.price){
            throw new DataError(`Failed to load product details. Check that all data fields are valid.`)
        }
        return `${this.title}| product ID: ${this.id} | category: ${this.category} 
        ${this.description}
        Base Price: ${this.price}
        Current Discount: ${this.discountPercentage}`
    }

    /*
     Display a template literal of price after discount then taxes are applied.
     1. Apply the discount first. (Taxes cannot be discounted)
     2. Apply and return the taxes to the discounted price to get final price.
    */
    getPriceWithDiscount():string{
        if(!this.discountPercentage){
            throw new DataError(`${this.title} does not have a discount percentage. Cannot calulate final price with discount. Update discount percentage with a valid input.`)
        }
        const withDiscount:number = this.price - calculateDiscount(this)
	    const finalPrice:number = withDiscount + taxCalculator(this, withDiscount) //apply Tax after discount
	return `The final cost of ${this.title} with tax and applied discount is $${finalPrice}.`
    }
}