import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Header from './components/Header';
import NavBar from './components/NavBar';
import OrderSummery from './components/OrderSummery';
import Products from './components/Products';
import FeaturedProduct from './components/FeaturedProduct';
import NewProducts from './components/NewProducts';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
const Lazyloding = React.lazy(() => import('./components/About'));

const App = () => {
  return (
    <div>
      <Router>
        {/* Layout */}
        <NavBar />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route path='about' element={<React.Suspense fallback='Loading ........... '>
            <Lazyloding />
          </React.Suspense>} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
          <Route path='order-summery' element={<OrderSummery />} />
          <Route path='products' element={<Products />}>
            <Route index element={<FeaturedProduct />} />
            <Route path='featured' element={<FeaturedProduct />} />
            <Route path='new' element={<NewProducts />} />
          </Route>
          <Route path='/users' element={<Users />}>
            <Route path=':userId' element={<UserDetails />} />
            <Route path='admin' element={<Admin />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
