function CartItem({ name, price, qty, ttl_price, img }) {
  return (
    <div className="row">
      <div className="col-3">
        <br />
        <img className="rounded" src={img} style={{"maxHeight": "250px", "maxWidth": "200px"}} alt="" />
        <h5>{name}</h5>
      </div>
      <div className="col-3">
        <h5 className="pt-5">${price}</h5>
      </div>
      <div className="col-3">
        <h5 className="pt-5">- {qty} +</h5>
      </div>
      <div className="col-3">
        <h5 className="pt-5">${ttl_price}</h5>
      </div>
    </div>
  );
};

export default CartItem;
