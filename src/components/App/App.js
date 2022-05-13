import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../General/Header';
import HomePage from './Pages/HomePage';
import SignUpPage from './Pages/SignUpPage';
import SignInPage from './Pages/SignInPage';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import Line from '../General/Line';
import Footer from '../General/Footer';
import ProductListPage from './Pages/ProductListPage';
import CartPage from './Pages/CartPage';
import AddressFormPage from './Pages/AddressFormPage';
import CheckoutPage from './Pages/CheckoutPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Line />
        <Routes>
          <Route exact path="/" element={ <HomePage /> }/>
          <Route exact path="/signup" element={ <SignUpPage /> }/>
          <Route exact path="/signin" element={ <SignInPage /> }/>
          <Route exact path="/products/:id" element={ <ProductDetailsPage /> }/>
          <Route exact path="/productList" element={ <ProductListPage /> }/>
          <Route exact path="/cart" element={ <CartPage /> }/>
          <Route exact path="/addressForm" element={ <AddressFormPage /> }/>
          <Route exact path="/checkout" element={ <CheckoutPage /> }/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;