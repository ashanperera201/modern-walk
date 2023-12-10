import { IProduct, IProductConfiguration, IProductListView } from "./product.interface";

export interface IProductProps extends IProduct {
    productConfig?: IProductConfiguration
}

export interface IProductListProps extends IProductListView {
    sectionTitle: string;
    showActionHeader?: boolean;
    actionText?: string;
    actionHeaderClickHandler?(): void
}