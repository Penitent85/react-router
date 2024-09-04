import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Products = () => {
  return (
    <>
      <input type='text' placeholder='Search product ....' />
      <nav>
      <Link to='featured'> Featured</Link>
      <Link to='new'>New</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
