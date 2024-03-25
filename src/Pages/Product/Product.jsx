import { useLoaderData } from "react-router-dom";
import ProductsDetails from "../ProductsDetails/ProductsDetails";


const Product = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div>
            This is a product page {products
                .products.length}
            <div className="grid grid-cols-3 gap-5">
                {
                    products.products.map(item1=><ProductsDetails key={item1.id} ProductsDetails={item1}></ProductsDetails>)

                }
            </div>
        </div>
    );
};

export default Product;