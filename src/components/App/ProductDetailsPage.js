import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api_client from '../../config/api-client';

export default function ProductPage() {
  const [productData, setProductData] = useState({});
  const [productQuantity, setProductQuantity] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();

  const onQuantityChange = (e) => {
    setProductQuantity(e.target.value);
  };

  

  useEffect(() => {
    async function fetchData() {
      await api_client.get(`/products/${id}`).then(res => {
        setProductData(res.data);
      });
    };

    fetchData();
    
  }, [id]);

  const submitProductData = () => {
    var cartItemProperties = {
      "product_id": productData.id,
      "quantity": productQuantity
    };

    if (localStorage.getItem('cartId')) {
      cartItemProperties["cart_id"] = localStorage.getItem('cartId');
    }

    api_client.post(`/cartItems`, cartItemProperties).then(res => {
      if (!localStorage.getItem('cartId')) {
        localStorage.setItem('cartId', res.data.cart_id);
      }
      console.log('IM GOING TO NAVIGATE NOW BYE BYE');
      navigate('/cart');
    });
  };
  
  return (
    <div className="container pt-3 pb-3 pl-5">

      <div className="row pt-3">
        <div className="col-5">
          <img src={productData.image_url} className="rounded" style={{"maxHeight": "850px", "maxWidth": "525px"}} alt="" />
        </div>
        <div className="col-6 pt-4">
          <h1>{productData.name}</h1>
          <h3>Average Rating: {productData.average_rating}</h3>
          <h4>${productData.price_in_cents/100}</h4>
          {/* This isnt in the actual database */}
          <p>30$ Shipping & Import Fees Deposit to USA</p>
          <br />
          {/* These values arent actually in the database */}
          <h5><strong>Brand: </strong>Nintendo</h5>
          <h5><strong>Age Range: </strong>Everyone</h5>
          <h5><strong>Year: </strong>2010</h5>
          <h5><strong>Genre: </strong>Fantasy | Video Games</h5>
          <br className="pt-3" />

          <div className="row">
            <div className="col-2 pt-3">
              <button className="btn btn-warning" onClick={submitProductData}>Add to Cart</button>
            </div>
            <div className="col-2 pt-3">
              Quantity:
              <input onChange={onQuantityChange} value={productQuantity} type="number" className='form-control' min={1} />
            </div>
            <div className="col-2 pt-3">
              <a className="btn btn-danger">Go to Checkout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
