import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import api_client from '../../../config/api-client';
import '../../css/signup.css';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onSubmitCredentials = () => {
    api_client.post('/users', {
      "email": email,
      "username": username,
      "password": password
    }).then(res => {
      console.log(res.data);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    });
  };

  return (
    <div className="container pt-3 pb-3">
      <h3>Welcome to E-Commerce</h3>
      <p>
        Create an account or <Link className="loginLink" to="/signin">log in</Link>
      </p>
      <form>
        <div className='row pt-3'>
          <div className='col-5'>
            <h5><strong>Email</strong></h5>
            <input onChange={(e) => setEmail(e.target.value)} value={email} className='form-control col-5'></input>
          </div>
        </div>
        <div className='row pt-5'>
          <div className='col-5'>
            <h5><strong>Username</strong></h5>
            <input onChange={(e) => setUsername(e.target.value)} value={username} className='form-control col-5'></input>
          </div>
        </div>
        <div className='row pt-5'>
          <div className='col-5'>
            <h5><strong>Password</strong></h5>
            <input onChange={(e) => setPassword(e.target.value)} value={password} className='form-control col-5'></input>
          </div>
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

export default SignUpPage;