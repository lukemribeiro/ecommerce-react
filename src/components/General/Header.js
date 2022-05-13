import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const onSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSignOutClick = (e) => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const performSearch = (e) => {
    setSearchParams({ searchTerm });
    navigate(`/productList?searchTerm=${searchTerm}`)
  }

  function renderButtons() {
    if (localStorage.getItem('token')) {
      console.log('HAS TOKEN');
      return (
        <>
          <div className="col-2">
              <button onClick={onSignOutClick} className="btn btn-dark">Sign Out</button>
          </div>
        </>
      );
    } else {
      console.log('NO TKOEN HER');
      return (
        <>
          <div className="col-1">
              <Link to="/signin" className="btn btn-primary">Sign In</Link>
          </div>
          <div className="col-1">
              <Link to="/signup" className="btn btn-info">Sign Up</Link>
          </div>
        </>
      );
    }
  };

  return (
    <header>
      <div className="container pb-3">
        <div className="row pt-3">
          <div className="col-9">
            <Link to="/"><img src={"/img/eccommerce_logo.png"} alt="" style={{"maxWidth": "100px"}} /></Link>
          </div>
          <div className="col-1">
            <Link to="/cart" className="btn btn-warning position-relative">
              Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                4
                <span className="visually-hidden">cart items</span>
              </span>
            </Link>
          </div>
          { renderButtons() }
        </div>
      </div>
      <div action="" className="container">
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Search for anything" className="textField form-control" value={searchTerm} onChange={onSearchTermChange} />
          </div>
          <div className="col-1 pb-3 pl-0">
            <button onClick={performSearch} className="btn btn-success form-control">Search</button>
          </div>  
        </div>
      </div>
    </header>
  )
}

export default Header;
