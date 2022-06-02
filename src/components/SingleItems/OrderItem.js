import { Link } from 'react-router-dom';
import '../../css/CartItem.css'

function OrderItem({order_item}) {
  const price = order_item.price_in_cents / 100;
  const ttl_price = price * order_item.quantity;

  return (
    <div className="row">
      <Link to={`/products/${order_item.product_id}`} className="col-3 linkText">
        <br />
        <img className="rounded productImage" src={order_item.image_url} alt="" />
        <h5>{order_item.name}</h5>
        
      </Link>
      <div className="col-3">
        <h5 className="pt-5">${price}</h5>
      </div>
      <div className="col-2 pt-5">
        <h5>{order_item.quantity}</h5>
      </div>
      <div className="col-1" />
      <div className="col-3">
        <h5 className="pt-5">${ttl_price}</h5>
      </div>
    </div>
  );
};

export default OrderItem;
