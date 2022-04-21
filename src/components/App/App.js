import Header from '../General/Header';
import HomePage from './HomePage'
import ProductPage from './ProductPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={ <HomePage /> }/>
          <Route exact path="/product" element={ <ProductPage /> }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;