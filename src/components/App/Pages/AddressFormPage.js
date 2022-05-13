import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api_client from '../../../config/api-client';

function AddressFormPage() {
  const naviagte = useNavigate();

  useEffect(() => {
    console.log(localStorage.getItem('token'))
    if (!localStorage.getItem('token')) {
      naviagte('/signup');
    }
  }, []);

  return (
    <>
      <div className="container pt-3">
        <h3>Enter your address details:</h3>
        <div className="form">
          <div className="row ">
            <div className="col-4">
              <input type="text" placeholder="Number" className="form-control" />
            </div>
            <div className="col-4">
              <input type="text" placeholder="Street" className="form-control" />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-4">
              <input type="text" className="form-control" placeholder="City" />
            </div>
            <div className="col-4">
              <input type="text" className="form-control" placeholder="State" />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-4">
              <input type="text" className="form-control" placeholder="Postal Code" />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-4">
              <input type="text" placeholder="Country" className="form-control" />
            </div>
          </div>
          
          <div className="row pt-3 pb-3">
            <div className="col-1 pb-3 pl-0">
              <Link to="/checkout" className="btn btn-danger form-control">Submit</Link>
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
