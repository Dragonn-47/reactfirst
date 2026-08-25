import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Product.css"

function Products() {
    
    const [products,setProducts] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data));
}, []);
    
    return (
        <>
        <h1 className="heading">Hello product </h1>    
        <div>
            {products.map((item) => (
                <ProductCard
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    />
                ))}
        </div>
        </>
    )
}
export default Products; 