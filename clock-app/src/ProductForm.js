import React, { useState } from "react";

function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={product.name}
        onChange={handleChange}
      />
      <br />
      <br />

      <label htmlFor="price">Price:</label>
      <input
        type="number"
        id="price"
        name="price"
        value={product.price}
        onChange={handleChange}
      />
      <br />
      <br />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={product.description}
        onChange={handleChange}
      />
      <br />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ProductForm;