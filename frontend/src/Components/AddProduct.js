import React, { useState } from "react";

const AddProduct = ()=>{
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('');
    const [company,setCompany] = useState('');
    const [error,setError] = useState(false);
    
    const handleAddProduct = async ()=>{
        if(!name || !price || !category || !company){
            setError(true);
            return false;
        }
        // console.log(name,price,category,compnay)
        const userId = JSON.parse(localStorage.getItem('user'))._id
        let result = await fetch('http://localhost:5000/add-product',
        {
            method:"post",
            body:JSON.stringify({name,price,category,company,userId}),
            headers: {
                "Content-Type": 'application/json',
                authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        })
        result = await result.json();
        if(result){
            setName('');
            setPrice('');
            setCategory('');
            setCompany('');
        }
    }

    return (
        <div className="addproduct-box">
           <h1>Add Product</h1>
           <input type='text' placeholder="Enter Product Name" className="input-field"
           onChange={(event)=>setName(event.target.value)}
           value={name}
           />
          {error && !name && <span className="error-box">Please Enter Valid Name</span> }
           <input type='text' placeholder="Enter Product Price" className="input-field"
            onChange={(event)=>setPrice(event.target.value)}
            value={price}
            />
            {error && !price && <span className="error-box">Please Enter Valid Price</span> }
           <input type='text' placeholder="Enter Product Category" className="input-field"
            onChange={(event)=>setCategory(event.target.value)}
            value={category}
           />
           {error && !category && <span className="error-box">Please Enter Valid Category</span> }
           <input type='text' placeholder="Enter Product Company" className="input-field"
            onChange={(event)=>setCompany(event.target.value)}
            value={company}
           />
           {error && !company && <span className="error-box">Please Enter Valid Company</span> }
           <button onClick={handleAddProduct} className="add-button">Add Product</button>
        </div>
    )
}
export default AddProduct;