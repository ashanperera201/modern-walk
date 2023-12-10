import React from "react";
import { Modal } from "react-responsive-modal";
import { IMoreFlashSalesProp } from "../interfaces/more-flash-sales-prop.interface";
import ProductList from "./ProductList";
import { useSelector } from "react-redux";
import { IApplicationState } from "../interfaces/application-state.interface";
import { selectProducts } from "../../redux/selectors/product-selector";

const MoreFlashSales = (props: IMoreFlashSalesProp): JSX.Element => {

    const { onClose, open } = props;

    const products = useSelector((state: IApplicationState) => selectProducts(state));

    return (
        <>
            <Modal classNames={{modal: 'w-full max-w-screen-2xl'}} center open={open} onClose={onClose}>
                <ProductList products={products} sectionTitle={'All Flash Sales'} />
            </Modal>
        </>
    )
}

export default MoreFlashSales;