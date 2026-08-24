import "./ProductCard.css";

function ProductCard({ title, price, image}) {
    return (
        <div className="card">
    <img className="card" src={image} alt={title} />
    <h3 className="title">{title}</h3>
    <p className="price">${price}</p>
</div>
    )
}

export default ProductCard;