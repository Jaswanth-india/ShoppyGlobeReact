import { useState,useEffect } from "react";

function useFetchHook(url){
    let [data,setData]=useState([]);
    useEffect(()=>{
        if(url.includes("category")){
            document.getElementById("productContainer").children[2].style.display="flex";
        }
        fetch(url).then(result=>result.json()).then((res)=>{
            setData(res);
            if(url.includes("category")){
                document.getElementById("productContainer").children[2].style.display="none";
            }
        });
    },[url])
    return data;
}

export default useFetchHook;