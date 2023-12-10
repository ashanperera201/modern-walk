import React from "react";
import { useSelector } from "react-redux";
import ProductList from "../shared/components/ProductList";
import { selectWomenProducts } from "../redux/selectors/product-selector";
import { IApplicationState } from "../shared/interfaces/application-state.interface";

const WomenClothing = (): JSX.Element => {

    const products = useSelector((state: IApplicationState) => selectWomenProducts(state));

    return (
        <ProductList products={products} sectionTitle={'Women\'s Clothing'} />
    )
}

export default WomenClothing;