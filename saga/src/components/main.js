import { useDispatch } from "react-redux";
import { addToCart, emptyCart, removeToCart } from "../store/action";

const Main = () => {
    let dispatch = useDispatch();
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
        </div>
    );
}

export default Main