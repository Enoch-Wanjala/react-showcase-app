//  this is our product card component, we will be using this component to display the products in our store. 
// we will be using the useState hook to manage the state of the products and the useEffect hook to fetch the products from the API.
import style from "./productcard.module.css";

//this is our ProductCard
// receives name, description, price as props
function ProductCard({ name, description, price }) {

    return (
        <>
            <div className={style.productCard}>
                <h2 className={style.productName}>{name}</h2>
                <p className={style.productDescription}>{description}</p>
                <p className={style.productPrice}>Price: {price}</p>
            </div>
        </>
    )

}

export default ProductCard;
