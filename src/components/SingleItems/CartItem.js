function CartItem({ name, price, qty, ttl_price, img }) {
  return (
    <div class="row">
      <div class="col-3">
        <br />
        <img class="rounded" src={img} style={{"max-height": "250px", "max-width": "200px"}} alt="" />
        <h5>{name}</h5>
      </div>
      <div class="col-3">
        <h5 class="pt-5">{price}</h5>
      </div>
      <div class="col-3">
        <h5 class="pt-5">- {qty} +</h5>
      </div>
      <div class="col-3">
        <h5 class="pt-5">{ttl_price}</h5>
      </div>
    </div>
  );
};

export default CartItem;