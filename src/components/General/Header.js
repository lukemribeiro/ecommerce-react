import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div class="container pb-3">
        <div class="row pt-3">
          <div class="col-9">
            <Link to="/"><img src={"/img/eccommerce_logo.png"} alt="" style={{"max-width": "100px"}} /></Link>
            <Link to="/productDetails">Product</Link>
          </div>
          <div class="col-1">
            <Link to="/cart" class="btn btn-warning position-relative">
              Cart
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                4
                <span class="visually-hidden">cart items</span>
              </span>
            </Link>
          </div>
          <div class="col-1">
            <button class="btn btn-primary">Log In</button>
          </div>
          <div class="col-1">
            <button class="btn btn-info">Sign Up</button>
          </div>
        </div>
      </div>
      <form action="" class="container">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Search for anything" class="form-control" />
          </div>
          <div class="col-1 pb-3 pl-0">
            <Link to="/productList" class="btn btn-success form-control">Search</Link>
          </div>  
        </div>
      </form>
    </header>
  )
}

export default Header;