import { useParams } from "react-router-dom";
import useFetchHook from "../utils/useFetchHook.js";

function ProductDetails(){
    let id=useParams().id;
    let product=useFetchHook("https://dummyjson.com/products/"+id);

    return(
        <main>

        </main>
    )
}

export default ProductDetails;