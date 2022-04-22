import Header from '../General/Header';
import HomePage from './HomePage'
import ProductDetailsPage from './ProductDetailsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Line from '../General/Line';
import Footer from '../General/Footer';
import ProductListPage from './ProductListPage';
import CartPage from './CartPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Line />
        <Routes>
          <Route exact path="/" element={ <HomePage /> }/>
          <Route exact path="/productDetails" element={ <ProductDetailsPage /> }/>
          <Route exact path="/productList" element={ <ProductListPage /> }/>
          <Route exact path="/cart" element={ <CartPage /> }/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;