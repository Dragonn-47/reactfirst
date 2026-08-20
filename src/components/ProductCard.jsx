import "./ProductCard.css";

function ProductCard({ title, price, image}) {
    return (
        <div>
            <img src={image}  width="100" />
            <h3>{title}</h3>
            <h3>${price}</h3>

        </div>
    )
}

export default ProductCard;