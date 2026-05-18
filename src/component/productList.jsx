import ProductCard from "./productcard";

// this is our ProductCard component
// receives products as a prop
function ProductList({ products }) {
    
    return (
        <>
        {products.map((product) => (
            <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
            />
        ))}
        </>
    )

}

export default ProductList; 
