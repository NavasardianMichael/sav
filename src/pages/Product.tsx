import { FC } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { RootState } from "index";
import { T_Product } from "store/products/types";

export const Product: FC = () => {
    const id = useParams().id as T_Product['id']
    const currentProduct = useSelector((state: RootState) => state.products.byId[id])

    if(!currentProduct) return null;

    
    return (
        <h1>{currentProduct.name}</h1>
    )
}