import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (err) {
      console.error('Error logging out: ', err);
    }
  };

  return (
    <div>
      <h2>Welcome to our E-commerce Store</h2>
      <button onClick={handleLogout}>Logout</button>
      <br />
      <Link to="/product/1">Product 1</Link>
      <br />
      <Link to="/product/2">Product 2</Link>
    </div>
  );
};

export default Home;
