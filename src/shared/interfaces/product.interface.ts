export interface IProductListView {
    products?: IProduct[];
}

export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: IRating;
}

export interface IRating {
    rate: number;
    count: number;
}


export interface IProductConfiguration {
    borderRadius: 'rounded-sm' | 'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-xl' | 'rounded-2xl' | 'rounded-3xl' | 'rounded-full';
    bottomDescriptionBackgroundColor?: string;
    productTitleClasses: string;
    productTileHeight: string;
    productTileWidth: string;
    imageHeight: string;
    imageWidth: string;
    pricingFontColor: string;
    tileBackground: string;
}