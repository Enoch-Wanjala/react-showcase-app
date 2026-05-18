import style from "./shop.module.css";
import SearchBar from "../searchbar";
import ProductList from "../productList";

//our shop component 
// receives product, isLoading and onSearch as a prop
function Shop({ products, isLoading, onSearch }) {

    return (
        <>
            <div className={style.shopContainer}>
                <div className={style.sideBar}>
                    <SearchBar onSearch={onSearch} />
                    {products.map((product) => (
                        <p className={style.location} key={product.id}>{product.origin}</p>
                    ))}
                </div>
                <div className={style.mainSection}>
                    {isLoading ? (
                        <p>Loading products...</p>
                    ) : products.length > 0 ? (
                        <ProductList products={products} />
                    ) : (
                        <p>No coffee products found.</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default Shop;
