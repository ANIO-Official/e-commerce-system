/*
 Import the Tax & Discount Calculator for Product
 method getPriceWithDiscount
*/
import taxCalculator from "../utils/taxCalculator.js";
import calculateDiscount from "../utils/discountCalculator.js";
export default class Product {
    id;
    title;
    description;
    category;
    price;
    discountPercentage;
    constructor(id, title, description, category, price, discountPercentage) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
    }
    /*
     Display a template literal of the current product details.
     Ideally shows these details to check changes in the product details after an update.
    */
    displayDetails() {
        return `${this.title}| product ID: ${this.id} | category: ${this.category} 
        ${this.description}
        Base Price: ${this.price}
        Current Discount: ${this.discountPercentage}`;
    }
    /*
     Display a template literal of price after discount then taxes are applied.
     1. Apply the discount first. (Taxes cannot be discounted)
     2. Apply and return the taxes to the discounted price to get final price.
    */
    getPriceWithDiscount() {
        const withDiscount = this.price - calculateDiscount(this);
        const finalPrice = withDiscount - taxCalculator(this, withDiscount); //apply Tax after discount
        return `The final cost of ${this.title} with tax and applied discount is $${finalPrice}.`;
    }
}
//# sourceMappingURL=Product.js.map