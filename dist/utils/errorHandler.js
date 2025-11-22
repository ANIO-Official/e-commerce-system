/*
 Custom Error Classes:
 Data Error for Displaying Details (method in Product objects)
 Fetch Error for Getting Product Catalog (createProducts in apiService)
*/
export class DataError extends Error {
    constructor(message) {
        super(message);
        this.name = "Data Error";
    }
}
export class FetchError extends Error {
    constructor(message) {
        super(message);
        this.name = "Fetch Error";
    }
}
//# sourceMappingURL=errorHandler.js.map