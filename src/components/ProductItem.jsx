import { Link } from "react-router-dom";
import rating from "../assets/star.png"
import { useDispatch } from "react-redux";
import { addItem,increaseCounter } from "../utils/cartSlice";

function ProductItem (props){
    let dispatch=useDispatch();

    function handleAddItem(e){
        e.preventDefault()
        dispatch(addItem(props.product));
        
    }

    return (
        <div className="product">
            <Link to={"/product/"+props.product.id}>
                <div>{props.product.brand}</div>
                <div><img src={props.product.thumbnail} width="200" height="200"/></div>
                <div>{props.product.title}</div>
                <div>Category: {props.product.category}</div>
                <div>
                    <div>Price: ₹<span>{props.product.price}</span></div>
                    <div><button onClick={(e)=>{handleAddItem(e)}}>Add to Cart</button></div>
                    <div>Ratings: <img src={rating} width="10" height="10"/> {props.product.rating}</div>
                </div>
            </Link>
        </div>
    )
}

export default ProductItem;