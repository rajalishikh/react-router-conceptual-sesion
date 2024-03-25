import { Link } from "react-router-dom";

const ProductsDetails = ({ ProductsDetails }) => {
    const {id
,price,thumbnail
,
description
,rating

    
    
    } = ProductsDetails;
    return (
        <div className="border-solid border-2 border-sky-400 p-11 m-5">
            
            <img src={thumbnail} alt="" className="w-full h-72" />
            <div className="rating gap-2">
                <div>
                <p>{rating}</p>

                </div>
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" />
                
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" />
                
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" />
                
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" />
                
                <input type="radio" name="rating-4" className="mask mask-star-2  bg-red-500" />

                
            </div>
            
          
            <p>{description}</p>
            
            <p>{price}</p>
            
            <Link to={ `/product/${id}`}>
                <button className="bg-blue-700 p-5 m-5 text-slate-200 font-medium">
                    View Details
            </button>
            </Link>
            
        </div>
    );
};

export default ProductsDetails;