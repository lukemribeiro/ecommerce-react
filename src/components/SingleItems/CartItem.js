import api_client from '../../config/api-client';
import { useState } from 'react';

function CartItem({cart_item, loadCallback}) {
  const [productQuantity, setProductQuantity] = useState(cart_item.quantity);

  const onClickDelete = () => {
    api_client.delete(`/cartItems/${cart_item.id}`).then(res => {
      loadCallback();
    });
  };

  const onQuantityChange = (e) => {
    let quantity = e.target.value
    setProductQuantity(quantity);
    console.log('IM IN THE CHANGE FUNCTION');

    api_client.put(`/cartItems/${cart_item.id}`, {
      "product_id": cart_item.product_id,
      "cart_id": cart_item.cart_id,
      "quantity": quantity
    }).then(res => {
      loadCallback();
    });
  };

  const price = cart_item.price_in_cents / 100;
  const ttl_price = price * cart_item.quantity;

  return (
    <div className="row">
      <div className="col-3">
        <br />
        <img className="rounded" src={cart_item.image_url} style={{"maxHeight": "250px", "maxWidth": "200px"}} alt="" />
        <h5>{cart_item.name}</h5>
        
      </div>
      <div className="col-3">
        <h5 className="pt-5">${price}</h5>
        <button className="btn" onClick={onClickDelete}>
          <img src="/img/trash-can.png" style={{"maxHeight": "50px", "maxWidth": "200px"}} />
        </button>
      </div>
      <div className="col-2 pt-5">
        <input onChange={onQuantityChange} value={productQuantity} type="number" className='form-control' min={1} />
      </div>
      <div className="col-1" />
      <div className="col-3">
        <h5 className="pt-5">${ttl_price}</h5>
      </div>
    </div>
  );
};

export default CartItem;
