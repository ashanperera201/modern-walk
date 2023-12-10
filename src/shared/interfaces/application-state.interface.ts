import { IProduct } from "./product.interface";

export interface IApplicationState {
    productPackage: IProductPackage;
}


export interface IProductPackage {
    productList: IProduct[];
}