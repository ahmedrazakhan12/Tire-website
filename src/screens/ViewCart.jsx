import React, { useEffect, useState } from 'react';

const ViewCart = ({cartItems, setCartItems , removeFromCart}) => {
  console.log("cartItems", cartItems);

  useEffect(() => {
    // Fetch cart items from local storage when the component mounts
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    console.log("storedCartItems", storedCartItems);
    
    // Ensure that storedCartItems is an array before using reduce
    if (Array.isArray(storedCartItems)) {
      // Create a map to count the occurrences of each item
      const itemCounts = storedCartItems.reduce((acc, item) => {
        const key = JSON.stringify(item);
        acc[key] = (acc[key] || 0) + 1;
        return acc;
      }, {});

      // Create an array of unique items with their respective count (starting with 1)
      const uniqueCartItems = Object.keys(itemCounts).map(key => {
        const item = JSON.parse(key); // Parse the item back to object form
        return {
          ...item,
          quantity: itemCounts[key] // Set the quantity to the number of duplicates (minimum 1)
        };
      });

      // Set unique cart items with quantity to state
      setCartItems(uniqueCartItems);
    } else {
      console.error('Cart items are not an array:', storedCartItems);
    }
  }, []);
  
 

  const addToCart = (newItem) => {
    // Check if the item already exists in the cart
    const existingItem = cartItems.find(item => item.id === newItem.id);

    if (existingItem) {
      // If it exists, increase the quantity
      const updatedCartItems = cartItems.map(item => {
        if (item.id === newItem.id) {
          return { ...item, quantity: item.quantity + newItem.quantity }; // Increase quantity
        }
        return item;
      });

      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Update local storage
    } else {
      // If it doesn't exist, add the new item to the cart
      const updatedCartItems = [...cartItems, { ...newItem, quantity: newItem.quantity }];
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Update local storage
    }
  };

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subtotal * 0.05; // Assuming 5% tax
  const shipping = 15.00; // Fixed shipping cost
  const grandTotal = subtotal + tax + shipping;



  return (
    <div className='container'>
      <h1 className='my-5' style={{ textAlign: 'left' }}>Shopping Cart</h1>
      {cartItems && cartItems.length === 0 && <p className='text-center'>No items in cart</p>}

     {cartItems && cartItems.length > 0 && (
       <div className="shopping-cart">
       <div className="column-labels">
         <label className="product-image">Cart Items</label>
         <label className="product-details"></label>
         <label className="product-price"></label>
         <label className="product-quantity"></label>
         <label className="product-removal"></label>
         <label className="product-line-price"></label>
       </div>

       {cartItems.map((item , index) => (
         <div className="product" key={item.id}>
           <div className="product-image">
             <img src={item.image} alt={item.name} />
           </div>
           <div className="product-details">
             <div className="product-title d-flex justify-content-between">
               {item.name}
               <div className="product-price">Quantity: {item.quantity}</div>
             </div>
             <div className="product-brand">
               <img src={item.brandLogo} alt={item.brand} style={{ width: '50px' }} />
             </div>
             <p className="product-description">Brand: {item.brand}</p>
             <p className="product-description">Size: {item.size}</p>
             <p className="product-description">Warranty: {item.warranty}</p>
             <p className="product-description">Ranked: {item.ranked}</p>
           </div>
           <div className="product-quantity">
             <input type="number" value={item.quantity} readOnly min={1} max={item.availableQty} />
           </div>
           <div className="product-removal">
             <button className="remove-product" onClick={() => removeFromCart(index)}>Remove All</button>
           </div>
           <div className="product-line-price">${(item.price * item.quantity).toFixed(2)}</div>
         </div>
       ))}

       <div className="totals">
         <div className="totals-item">
           <label>Subtotal</label>
           <div className="totals-value" id="cart-subtotal">${subtotal.toFixed(2)}</div>
         </div>
         <div className="totals-item">
           <label>Tax (5%)</label>
           <div className="totals-value" id="cart-tax">${tax.toFixed(2)}</div>
         </div>
         <div className="totals-item">
           <label>Shipping</label>
           <div className="totals-value" id="cart-shipping">${shipping.toFixed(2)}</div>
         </div>
         <div className="totals-item totals-item-total">
           <label>Grand Total</label>
           <div className="totals-value" id="cart-total">${grandTotal.toFixed(2)}</div>
         </div>
       </div>

       <button className="checkout">Checkout</button>
     </div>
     )}
    </div>
  );
}

export default ViewCart;
