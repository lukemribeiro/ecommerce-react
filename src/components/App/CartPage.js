import './css/cart.css'
import CartItem from '../SingleItems/CartItem';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api_client from '../../config/api-client';

function CartPage() {
  const cart_data = [
    {
      "name": "EarthBound HD for Nintendo Switch",
      "price": "99999.99$",
      "qty": "1",
      "ttl_price": "99999.99$",
      "img": "/img/Earthboundhd.png"
    },
    {
      "name": "Nintendo Switch",
      "price": "300$",
      "qty": "2",
      "ttl_price": "600$",
      "img": "/img/switch.png"
    },
    {
      "name": "Super Nintendo",
      "price": "1499.99$",
      "qty": "1",
      "ttl_price": "1499.99$",
      "img": "/img/SuperNintendo.png"
    },
    {
      "name": "Zelda: A Link to The Past for Super Nintendo",
      "price": "59.99$",
      "qty": "1",
      "ttl_price": "59.99$",
      "img": "/img/Zelda.png"
    },
  ]

  // const [cartId, setCartId] = useState('');
  // const [cartData, setCartData] = useState({});
  // const { id } = useParams();

  // useEffect(() => {
  //   console.log('id', id)
  //   async function fetchData() {
  //     await api_client.get(`/carts/${id}`).then(res => {
  //       console.log(res.data[0].id.toString())
  //       setCartId(res.data[0].id.toString());
        
  //     });
  //     console.log(cartId);
  //     await api_client.get(`/cart_items/${cartId}`).then(res => {
  //       setCartData(res.data[0]);
  //       console.log(cartData);
  //     });
  //   };

  //   fetchData();

  // }, [id])

  const cartItems = cart_data.map(({ name, price, qty, ttl_price, img }, index) => {
    return (
      <CartItem name={name} price={price} qty={qty} ttl_price={ttl_price} img={img} key={index} />
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
