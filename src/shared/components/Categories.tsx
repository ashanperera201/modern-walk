import React from "react";
import { useNavigate } from 'react-router-dom';

import Tile from "./Tile";
import TitleHeader from "./TitleHeader";
import { ICategory } from "../interfaces/category.interface";

const Categories = (): JSX.Element => {
    // HINT: CATEGORIES ARE ALSO RE-USABLE

    const categoryDataSet: ICategory[] = [
        {
            id: 1,
            tileConfigs: {
                id: 1,
                backgroundColor: 'bg-[#2BD9AF]',
                borderRadius: 'rounded-3xl',
                height: 'h-52',
                width: 'full',
                title: 'Men\'s Clothing',
                fontSize: 'text-4xl',
                fontColor: 'text-white',
                fontWeight: 'font-bold',
                onClick: () => navigate('/mens-clothing')
            }
        },
        {
            id: 2,
            tileConfigs: {
                id: 2,
                backgroundColor: 'bg-[#FF5E84]',
                borderRadius: 'rounded-3xl',
                height: 'h-52',
                width: 'full',
                title: 'Women\'s Clothing',
                fontSize: 'text-4xl',
                fontColor: 'text-white',
                fontWeight: 'font-bold',
                onClick: () => navigate('/womens-clothing')
            }
        }
    ]

    const navigate = useNavigate();

    return (
        <>
            <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
                <TitleHeader fontColor="text-gray-900" fontSize="text-2xl" fontWeight="font-bold" title="Categories" />
                <div className="flex flex-row w-full items-center justify-between gap-12 mt-8">
                    {
                        categoryDataSet && categoryDataSet.length > 0 && (
                            <>
                                {
                                    categoryDataSet.map(item => (
                                        <Tile key={item.id} {...item.tileConfigs} />
                                    ))
                                }
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Categories;