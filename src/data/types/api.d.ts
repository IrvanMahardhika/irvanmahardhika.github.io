import { ProductType } from "./product";

export interface ProductResponse {
	info: {
		count: number;
		pages: number;
		next: string;
		prev: string;
	};
	results: Array<ProductType>;
}
