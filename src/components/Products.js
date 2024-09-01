import React from 'react';
import Product from "./Product.js";

function Products(props){
    const {products} = props;
 
    return (
        <div className='product'>
               {products.map((product) => (
                <Product key={product.id} product={product} />
                ))}
        </div>
    );
}
export default Products;