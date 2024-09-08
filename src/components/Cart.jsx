import { useSelector } from "react-redux";
import CartItem from "./CartItem.jsx";

function Cart (){
    let products=useSelector((store)=>store.cart.items);
    return(
        <div id="cart">
            {
                products.map((product, index)=>{return product && <CartItem key={index} product={product} index={index}/>})
            }
        </div>
    )
}

export default Cart;