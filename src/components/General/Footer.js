import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{"background-color": "darkgoldenrod"}}>
      <div class="container text-center img-center">
        <div class="row">
          <Link class="link-dark pt-3 pb-3" to="/">Home</Link>
          <img src="../../img/eccommerce_logo.png" class="rounded mx-auto d-block" style={{"max-width": "150px"}} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;