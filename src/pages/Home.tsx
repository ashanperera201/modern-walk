import React, { useState } from "react";
import ProductList from "../shared/components/ProductList";
import Categories from "../shared/components/Categories";
import { useSelector } from "react-redux";
import { IApplicationState } from "../shared/interfaces/application-state.interface";
import { selectProducts } from "../redux/selectors/product-selector";
import MoreFlashSales from "../shared/components/MoreFlashSales";


const Home = (): JSX.Element => {

    const [openModal, setOpenModal] = useState<boolean>(false);

    const products = useSelector((state: IApplicationState) => selectProducts(state));

    return (
        <>
            <ProductList products={products.slice(0, 4)} sectionTitle={'Flash Sale'} showActionHeader actionText="view more...." actionHeaderClickHandler={() => setOpenModal(true)} />
            <Categories />

            <MoreFlashSales open={openModal} onClose={() => setOpenModal(!openModal)} />
        </>
    )
}

export default Home;