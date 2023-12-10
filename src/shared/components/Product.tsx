import React from "react";
import { IProductProps } from "..";

const Product = (props: IProductProps): JSX.Element => {

    const { id, image, title, price, description, productConfig } = props;

    return (
        <>
            <div key={id} className={`group relative shadow-md ${productConfig?.tileBackground ?? 'bg-white'} ${productConfig?.borderRadius ?? 'rounded-3xl'}`}>
                <div className={`aspect-h-1 aspect-w-1 ${productConfig?.productTileWidth ?? 'w-full'} 
                                ${productConfig?.productTileHeight ?? 'h-60'} lg:${productConfig?.productTileHeight ?? 'h-60'} 
                                overflow-hidden lg:aspect-none group-hover:opacity-75 flex flex-col items-center justify-center gap-6 cursor-pointer`}>
                    <h3 className={`w-5/6 line-clamp-1 text-ellipsis overflow-hidden ${productConfig?.productTitleClasses ?? 'text-center font-bold text-sm'}`}>{title}</h3>
                    <div className="h-40 w-auto">
                        <img
                            src={image}
                            alt={'prod-img'}
                            className={`${productConfig?.imageHeight ?? 'h-full'} ${productConfig?.imageWidth ?? 'w-full'} object-cover object-center lg:${productConfig?.imageHeight ?? 'h-full'} lg:${productConfig?.imageWidth}`}
                        />
                    </div>
                </div>

                <div className={`${productConfig?.bottomDescriptionBackgroundColor} ${productConfig?.borderRadius ?? 'rounded-3xl'} mt-4 flex justify-between h-auto flex flex-col item-center p-4 gap-2`}>
                    <h3 className="text-2xl font-bold text-[#0E42FD] text-center">
                        Rs {price}
                    </h3>
                    <h4 className='text-center text-sm font-semibold whitespace-pre-wrap line-clamp-3 text-ellipsis overflow-hidden'>
                        {description}
                    </h4>
                </div>
            </div>
        </>
    )
}

export default Product;