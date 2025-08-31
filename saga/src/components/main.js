import { useDispatch, useSelector } from "react-redux";
import { addToCart, emptyCart, removeToCart } from "../redux/action";
import { ProductList } from "../redux/productAction";

const Main = () => {
    let dispatch = useDispatch();

    let output = useSelector((state) => state?.products);
    console.log('product listtttt', output);

    const Product = {
        id: 1,
        name: 'Frock',
        price: '2000/-'
    }
    return (
        <div className="App">
            <button onClick={() => dispatch(addToCart(Product))}>
                Add to cart
            </button>

            <button onClick={() => dispatch(removeToCart(Product))}>
                Remove to cart
            </button>

            <button onClick={() => dispatch(emptyCart(Product))}>
                Empty cart
            </button>

            <button onClick={() => dispatch(ProductList())}>
                Call list of products
            </button>
        </div>
    );
}

export default Main