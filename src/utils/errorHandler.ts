/*
 Custom Error Classes:
 Data Error for Displaying Details (method in Product objects)
 Fetch Error for Getting Product Catalog (createProducts in apiService)
 Indexing Error for products outside the index range (don't exist)
*/
	export class DataError extends Error {
		constructor(message:string){
		super(message)
		this.name = "Data Error"
		}
	}	

	export class FetchError extends Error {
		constructor(message:string){
		super(message)
		this.name = "Fetch Error"
		}
	}

	export class IndexingError extends Error {
		constructor(message:string){
		super(message)
		this.name = "Indexing Error"
		}
	}