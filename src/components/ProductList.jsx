import useFetchHook from "../utils/useFetchHook.js";
import { useState,useContext } from "react";
import ProductItem from "./ProductItem.jsx";
import "./ProductList.css";
import userInputContext from "../utils/userInput.js";

function ProductList(){
    let [category,setCategory] = useState("beauty");
    let categories=useFetchHook('https://dummyjson.com/products/category-list');
    let products=useFetchHook("https://dummyjson.com/products/category/"+category).products;
    let filteredProducts=[];
    let userInput=useContext(userInputContext).userInput;

    if(products){
        for(let i=0;i<products.length;i++){
            if(products[i].title.toLowerCase().includes(userInput.toLowerCase())){
                filteredProducts.push(products[i]);
            }
        }
    }

    function handleClick(category){
        setCategory(category);
    }

    return(
        <section id="productContainer">
            <div>
                {categories && categories.map((category,index)=>{
                    return <div key={index}><button onClick={()=>{handleClick(category)}}>{category}</button></div>
                })}                  
            </div>
            <div>
                {filteredProducts && filteredProducts.map((product)=>{
                    return <ProductItem key={product.id} product={product}/>
                })}
            </div>
            <div>Loading....</div>
        </section>

    )
}

export default ProductList;