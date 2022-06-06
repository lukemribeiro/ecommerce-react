import '../../css/cart.css'
import CartItem from '../../SingleItems/CartItem';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import _ from 'lodash';
import api_client from '../../../config/api-client';

function CartPage() {

  const [cartId, setCartId] = useState(localStorage.getItem('cartId'));
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const fetchCartItems = () => {
    api_client.get(`/cartItems?cart_id=${cartId}`).then(res => {
      setCartData(res.data);
    });
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  useEffect(() => {
    cartData.map((cart_item) => {
      let price = cart_item.price_in_cents/100;
      let singleTotalPrice = price * cart_item.quantity;
      setTotalPrice(totalPrice + singleTotalPrice);
    })
  }, [cartData]);

  const cartItems = cartData.map((cart_item, index) => {

    if(cartData) {
      return (<CartItem totalPrice={totalPrice} cart_item={cart_item} loadCallback={fetchCartItems} key={index} />)
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
                <h4>Cart Total: <strong>{totalPrice}</strong></h4>
                <p>Shopping & Taxes calculated at Checkout</p>
                <br />
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
