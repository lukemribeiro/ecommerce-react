import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api_client from '../../../config/api-client';

function AddressFormPage() {
  const [number, setNumber] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const naviagte = useNavigate();

  useEffect(() => {
    console.log(localStorage.getItem('token'))
    if (!localStorage.getItem('token')) {
      naviagte('/signup');
    }
  }, []);

  const onChangeState = (e, stateCallback) => {
    stateCallback(e.target.value);
  };

  const onSubmitAddress = () => {
    api_client.post('/addresses', {
      "address_line_1": number,
      "address_line_2": street,
      "city": city,
      "state": state,
      "postal_code": postalCode,
      "country": country,
      "cart_id": localStorage.getItem('cartId'),
    }).then(res => {
      localStorage.setItem('orderId', res.data.order_id);
      localStorage.setItem('addressId', res.data.address_id);
      naviagte('/checkout');
    });
  }

  return (
    <>
      <div className="container pt-3">
        <h3>Enter your address details:</h3>
        <div className="form">
          <div className="row ">
            <div className="col-4">
              <input value={number} onChange={(e) => onChangeState(e, setNumber)} type="text" placeholder="Number" className="form-control" />
            </div>
            <div className="col-4">
              <input value={street} onChange={(e) => onChangeState(e, setStreet)} type="text" placeholder="Street" className="form-control" />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-4">
              <input value={city} onChange={(e) => onChangeState(e, setCity)} type="text" className="form-control" placeholder="City" />
            </div>
            <div className="col-4">
              <input value={state} onChange={(e) => onChangeState(e, setState)} type="text" className="form-control" placeholder="State" />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-4">
              <input value={postalCode} onChange={(e) => onChangeState(e, setPostalCode)} type="text" className="form-control" placeholder="Postal Code" />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-4">
              <input value={country} onChange={(e) => onChangeState(e, setCountry)} type="text" placeholder="Country" className="form-control" />
            </div>
          </div>
          
          <div className="row pt-3 pb-3">
            <div className="col-1 pb-3 pl-0">
              <button onClick={() => { onSubmitAddress() }} className="btn btn-danger form-control">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default AddressFormPage;
