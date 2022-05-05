import './css/cart.css'
import CartItem from '../SingleItems/CartItem';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import _ from 'lodash';
import api_client from '../../config/api-client';

function CartPage() {

  const [cartId, setCartId] = useState(localStorage.getItem('cartId'));
  const [cartData, setCartData] = useState([]);

  const fetchCartItems = () => {
    api_client.get(`/cartItems`, { cartId }).then(res => {
      setCartData(res.data);
    });
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const cartItems = cartData.map((cart_item, index) => {

    if(cartData) {
      return (<CartItem cart_item={cart_item} loadCallback={fetchCartItems} key={index} />)
    } else {
      return (<></>)
    }
  })

  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col-3">
              <h4 className="pb-3"><strong>PRODUCT</strong></h4>
            </div>
            <div className="col-3">
              <h4 className="pb-3"><strong>PRICE</strong></h4>
            </div>
            <div className="col-3">
              <h4 className="pb-3"><strong>QUANTITY</strong></h4>
            </div>
            <div className="col-3">
              <h4 className="pb-3"><strong>TOTAL</strong></h4>
            </div>
          </div>
          { cartItems }
        </div>
        <div className="col-4 bg-checkout">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-9">
              <br />
              <div className="pl-5">
                <h4>Cart Total - <strong>102166.83$</strong></h4>
                <p>Shopping & Taxes calculated at Checkout</p>
                <br />
                <div className="form-check pl-5">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    I agree to <a className="terms-and-consent">Terms & Consent</a>
                  </label>
                </div>
                <br />
                <Link to="/addressForm" className="btn btn-danger">Go To Checkout</Link>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
      <br />
    </div>
  );
};

export default CartPage;
