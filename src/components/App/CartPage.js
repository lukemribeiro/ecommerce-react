import './css/cart.css'
import CartItem from '../SingleItems/CartItem';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import _ from 'lodash';
import api_client from '../../config/api-client';

function CartPage() {

  const [cartId, setCartId] = useState(localStorage.getItem('cartId'));
  const [cartData, setCartData] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    api_client.get(`/cartItems`, { cartId }).then(res => {
      setCartData(res.data);
    });
  }, []);

  useEffect(() => {
    let products = []
    cartData.map(({ product_id }, index) => {
      api_client.get(`/products/${product_id}`).then(res => {
        products = [...products, res.data]
        setProductList(products);
      });
    });
  }, [cartData]);

  const cartItems = productList.map(({ id, name, price_in_cents, image_url }, index) => {
    const quantity = _.filter(cartData, (cartItemData) => cartItemData.product_id == id)[0].quantity;

    // const price = price_in_cents/100;
    // const exactPrice = parseFloat(price);
    // const floatQuantity = parseFloat(quantity);
    const total_price = quantity * price_in_cents / 100;
    return (
      <CartItem name={name} price={`${price_in_cents/100}`} qty={quantity} ttl_price={total_price} img={image_url} key={index} />
    );
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
              <h4 className="pb-3"><strong>QTY</strong></h4>
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
