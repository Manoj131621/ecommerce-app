import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { db, addDoc, collection } from '../firebase';

const ProductPage = () => {
  const { id } = useParams();
  const [orderQuantity, setOrderQuantity] = useState(1);

  const handleOrder = async () => {
    try {
      const orderRef = collection(db, 'orders');
      await addDoc(orderRef, { productId: id, quantity: orderQuantity });
      alert('Order placed successfully!');
    } catch (err) {
      console.error("Error placing order: ", err);
    }
  };

  return (
    <div>
      <h2>Product {id}</h2>
      <input
        type="number"
        value={orderQuantity}
        onChange={(e) => setOrderQuantity(Number(e.target.value))}
        min="1"
      />
      <button onClick={handleOrder}>Order Now</button>
    </div>
  );
};

export default ProductPage;
