import React from "react";
import Product from "./Product";
import { IProduct, IProductConfiguration } from "../interfaces/product.interface";
import { IProductListProps } from "../interfaces/common-product-props.interface";
import { CategoryEnum } from "../enums/application-common.enum";
import TitleHeader from "./TitleHeader";


const ProductList = (props: IProductListProps): JSX.Element => {

    const { products, sectionTitle, showActionHeader, actionText, actionHeaderClickHandler } = props;

    const productConfig: IProductConfiguration = {
        borderRadius: 'rounded-3xl',
        imageHeight: 'h-full',
        imageWidth: 'w-full',
        pricingFontColor: 'text-[#0E42FD]',
        productTileHeight: 'h-60',
        productTileWidth: 'w-full',
        productTitleClasses: 'text-center font-bold text-lg',
        tileBackground: 'bg-white',
    }

    return (
        <>
            {
                products && products.length > 0 && (
                    <>
                        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                            <div className="flex flex-row justify-between items-center">
                                <TitleHeader fontColor={'text-gray-900'} fontSize={'text-2xl'} fontWeight={'font-bold'} title={sectionTitle} />
                                {
                                    showActionHeader && (
                                        <TitleHeader fontColor={'text-gray-900'} fontSize={'text-2xl'} fontWeight={'font-bold'} cursorPointer={'cursor-pointer'} title={actionText ?? ''} onClick={actionHeaderClickHandler} />
                                    )
                                }
                            </div>

                            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">


                                <>
                                    {products.map((product: IProduct, index) => (
                                        <Product
                                            key={index}
                                            {...product}
                                            productConfig={{
                                                ...productConfig,
                                                bottomDescriptionBackgroundColor:
                                                    product.category === CategoryEnum.MensClothingCategory ? 'bg-[#2BD9AF]' :
                                                        product.category === CategoryEnum.WomenClothingCategory ? 'bg-[#FF5E84]' : 'bg-blue-600'
                                            }}
                                        />
                                    ))}
                                </>
                            </div>
                        </div>
                    </>
                )
            }

        </>
    )
}

export default ProductList;