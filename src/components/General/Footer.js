import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{"backgroundColor": "darkgoldenrod"}}>
      <div className="container text-center img-center">
        <div className="row">
          <Link className="link-dark pt-3 pb-3" to="/">Home</Link>
          <img src="../../img/eccommerce_logo.png" className="rounded mx-auto d-block" style={{"maxWidth": "150px"}} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
