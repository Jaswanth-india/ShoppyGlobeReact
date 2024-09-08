import { useState,useEffect } from "react";

function useFetchHook(url){
    let [data,setData]=useState([]);
    
    //Renders after rendering component
    useEffect(()=>{
        if(url.includes("category")){
            document.getElementById("productContainer").children[2].style.display="flex";
        }
        try{
            //Fetching data from dummyJson
            fetch(url).then(result=>result.json()).then((res)=>{
                setData(res);
                if(url.includes("category")){
                    document.getElementById("productContainer").children[2].style.display="none";
                }
            });
        }catch(err){
            console.log("An unexpected error occurred", err);
        }
        
    },[url])
    return data;
}

export default useFetchHook;