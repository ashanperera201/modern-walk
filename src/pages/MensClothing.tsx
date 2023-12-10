import React from "react";
import ProductList from "../shared/components/ProductList";
import { useSelector } from "react-redux";
import { selectMensProducts } from "../redux/selectors/product-selector";
import { IApplicationState } from "../shared/interfaces/application-state.interface";


const MensClothing = (): JSX.Element => {

    const products = useSelector((state: IApplicationState) => selectMensProducts(state));

    return (
        <ProductList products={products} sectionTitle={'Men\'s Clothing'} />
    )
}

export default MensClothing;