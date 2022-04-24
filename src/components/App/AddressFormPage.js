import { Link } from 'react-router-dom';

function AddressFormPage() {
  return (
    <>
      <div class="container pt-3">
        <h3>Enter your address details:</h3>
        <div class="form">
          <div class="row ">
            <div class="col-4">
              <input type="text" placeholder="Number" class="form-control" />
            </div>
            <div class="col-4">
              <input type="text" placeholder="Street" class="form-control" />
            </div>
          </div>
          <div class="row pt-3">
            <div class="col-4">
              <input type="text" class="form-control" placeholder="City" />
            </div>
            <div class="col-4">
              <input type="text" class="form-control" placeholder="State" />
            </div>
          </div>
          <div class="row pt-3">
            <div class="col-4">
              <input type="text" class="form-control" placeholder="Postal Code" />
            </div>
          </div>
          <div class="row pt-3">
            <div class="col-4">
              <input type="text" placeholder="Country" class="form-control" />
            </div>
          </div>
          
          <div class="row pt-3 pb-3">
            <div class="col-1 pb-3 pl-0">
              <Link to="/checkout" class="btn btn-danger form-control">Submit</Link>
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