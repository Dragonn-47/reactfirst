import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Products() {
    
    const [products,setProducts] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data));
}, []);
    
    return (
        <>
            {products.map((item) => (
                <ProductCard
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                />
            ))}
        <h1>Hello product </h1>    
        </>
    )
}
export default Products;