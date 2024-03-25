import { useLoaderData } from "react-router-dom";


const ProductUN = () => {
    const product = useLoaderData();
    console.log(product)
    const { 
        thumbnail,brand,
        price
    } = product;

    return (
        <div className="grid place-content-center">
            <p className="mb-11">Here is the details of Each Product </p>

            <div className="card card-compact w-96 bg-base-100 shadow-xl justify-center">
                <div>
                <figure><img src={thumbnail} alt="Dynamic" /></figure>
  <div className="card-body">
                    <h2 className="card-title">{brand}</h2>
                    <h2 className="card-title">${ price}</h2>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
                </div>
  
</div>


            
        </div>
    );
};

export default ProductUN;