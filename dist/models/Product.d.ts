export default class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    constructor(id: number, title: string, description: string, category: string, price: number, discountPercentage: number);
    displayDetails(): string;
    getPriceWithDiscount(): string;
}
//# sourceMappingURL=Product.d.ts.map