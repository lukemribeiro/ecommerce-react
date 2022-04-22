import './css/cart.css'
import CartItem from '../SingleItems/CartItem';

function Cart() {
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

  const cartItems = cart_data.map(({ name, price, qty, ttl_price, img }) => {
    return (
      <CartItem name={name} price={price} qty={qty} ttl_price={ttl_price} img={img} />
    );
  })

  return (
    <div class="container pt-3">
      <div class="row">
        <div class="col-8">
          <div class="row">
            <div class="col-3">
              <h4 class="pb-3"><strong>PRODUCT</strong></h4>
            </div>
            <div class="col-3">
              <h4 class="pb-3"><strong>PRICE</strong></h4>
            </div>
            <div class="col-3">
              <h4 class="pb-3"><strong>QTY</strong></h4>
            </div>
            <div class="col-3">
              <h4 class="pb-3"><strong>TOTAL</strong></h4>
            </div>
          </div>
          { cartItems }
        </div>
        <div class="col-4 bg-checkout">
          <div class="row">
            <div class="col-2"></div>
            <div class="col-9">
              <br />
              <div class="pl-5">
                <h4>Cart Total - <strong>102166.83$</strong></h4>
                <p>Shopping & Taxes calculated at Checkout</p>
                <br />
                <div class="form-check pl-5">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    I agree to <a class="terms-and-consent">Terms & Consent</a>
                  </label>
                </div>
                <br />
                <a href="" class="btn btn-danger">Go To Checkout</a>
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

export default Cart;