import { FC } from "react";

import { About } from "components/About/Main";
import { Contact } from "components/Contact/Main";
import { ProductsLists } from "components/ProductsList/Main";
import { Testimonials } from "components/Testimonials/Main";
import { OrderInstructions } from "components/OrderInstructions/Main";

export const Home: FC = () => {
    return (
        <>
            <ProductsLists />
            <About />
            <OrderInstructions />
            <Contact />
            <Testimonials />
        </>
    )
}