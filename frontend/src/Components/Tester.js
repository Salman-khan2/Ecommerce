import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
const Tester = ()=>{
    const [products,setProducts]= useState([]);

    useEffect(()=>{
        getProducts();
    },[]);

    const getProducts = async()=>{
        let result = await fetch('http://localhost:5000/products',{
       headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
       }
    });
        result = await result.json();
        setProducts(result);

    }
    return(
        <div className="product-list">
            <h1>
                Which Product you want to Update Please Update here
            </h1>
            <ul>
                <li>S. No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>
                
            </ul>
           {
            products.length>0 ? products.map((item,index)=>
            <ul key={item._id}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.category}</li>
                <li>{item.company}</li>
                <li><Link to={"/update/"+item._id} >Update Product</Link></li>
                
            </ul>
            ):<h1>No Result Found</h1>
           }
            
        </div>
    )
}

export default Tester;