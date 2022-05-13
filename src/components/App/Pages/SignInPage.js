import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import api_client from '../../../config/api-client';
import '../../css/signup.css';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState();

  const navigate = useNavigate();

  const onSubmitCredentials = () => {
    api_client.post('/tokens', {
      "email": email,
      "password": password
    }).then(res => {
      localStorage.setItem('token', res.data);
      navigate('/');
    }).catch((error) => {
      setErrorMessage('Invalid Credentials!');
    });
  };

  return (
    <div className="container pt-3 pb-3">
      <h3>Welcome Back to E-Commerce</h3>
      <p>
        Don't have an account? <Link className="loginLink" to="/signup">Sign up</Link> here!
      </p>
      <form>
        <div className='row pt-3'>
          <div className='col-5'>
            <h5><strong>Email</strong></h5>
            <input onChange={(e) => setEmail(e.target.value)} value={email} className='form-control col-5'></input>
          </div>
        </div>
        <div className='row'>
          <div className='col-5 pt-5 pb-2'>
            <h5><strong>Password</strong></h5>
            <input onChange={(e) => setPassword(e.target.value)} value={password} className='form-control col-5'></input>
          </div>
        </div>
        <div className='row'>
          {errorMessage && <div className="error col-2">{errorMessage}</div>}
        </div>
        <div className='row pt-5'>
          <div className='col-1'>
            <button onClick={(e) => {e.preventDefault(); onSubmitCredentials()}} className="btn btn-dark form-control">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;