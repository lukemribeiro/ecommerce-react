import '../../css/cart.css'
import { useState, useEffect } from "react";
import OrderItem from "../../SingleItems/OrderItem";
import api_client from "../../../config/api-client";

function CheckoutPage() {
  const [orderId, setOrderId] = useState(localStorage.getItem('orderId'));
  const [addressId, setAddressId] = useState(localStorage.getItem('addressId'));
  const [orderData, setOrderData] = useState([]);
  const [addressData, setAddressData] = useState({});

  const fetchOrderItems = () => {
    api_client.get(`/orderItems?order_id=${orderId}`).then(res => {
      setOrderData(res.data);
    });
    api_client.get(`/addresses/${addressId}`).then(res => {
      setAddressData(res.data);
    });
  };

  useEffect(() => {
    fetchOrderItems();
  }, [orderId]);

  const orderItems = orderData.map((order_item, index) => {
    if(orderData) {
      return (<OrderItem order_item={order_item} key={index} />)
    } else {
      return (<></>)
    }
  });

  return (
    <div className="container pt-3 pb-3">
      <h3>Checkout</h3>

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
        { orderItems }
      </div>
      <div className="col-4 bg-checkout">
        <div className="row">
          <div className="col-2" />
          <div className="col-9">
            <br />
            <div className="pl-5">
              <h4>Cart Total - <strong>102166.83$</strong></h4>
              <br />
              <div className="form-check pl-5">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  I agree to <a className="terms-and-consent">Terms & Consent</a>
                </label>
              </div>
              <br />
                <div>
                  <p>Number: {addressData.address_lane_1}</p>
                  <p>Street: {addressData.address_lane_2}</p>
                  <p>Postal Code: {addressData.postal_code}</p>
                  <p>City: {addressData.city}</p>
                  <p>State: {addressData.state}</p>
                  <p>Country: {addressData.country}</p>
                </div>
              <br />
              <button className="btn btn-danger">Pay</button>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default CheckoutPage;