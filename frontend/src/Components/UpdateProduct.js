import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const params = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
      getProductDetails();
    }, []);
  
    const getProductDetails = async () => {
      console.log(params.id);
      let result = await fetch(`http://localhost:5000/product/${params.id}`, {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      result = await result.json();
      console.log(result)
      setName(result.name);
      setPrice(result.price);
      setCategory(result.category);
      setCompany(result.company); // This should update the state correctly.
    };
  
    const handleUpdateProduct = async () => {
      let result = await fetch(`http://localhost:5000/product/${params.id}`, {
        method: "Put",
        body: JSON.stringify({ name, price, category, company }),
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      result = await result.json();
      console.log(result);
      navigate("/");
    };
  
    return (
      <div className="addproduct-box">
        <h1>Update Product</h1>
        <input
          type="text"
          placeholder="Enter Product Name"
          className="input-field"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
  
        <input
          type="text"
          placeholder="Enter Product Price"
          className="input-field"
          onChange={(event) => setPrice(event.target.value)}
          value={price}
        />
  
        <input
          type="text"
          placeholder="Enter Product Category"
          className="input-field"
          onChange={(event) => setCategory(event.target.value)}
          value={category}
        />
  
        <input
          type="text"
          placeholder="Enter Product Company"
          className="input-field"
          onChange={(event) => setCompany(event.target.value)}
          value={company} 
        />
  
        <button onClick={handleUpdateProduct} className="update-button">
          Update Product
        </button>
      </div>
    );
  };
  
  export default UpdateProduct;