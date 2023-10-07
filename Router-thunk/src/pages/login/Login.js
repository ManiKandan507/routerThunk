import React, { useState } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { getDetails,validate } from '../../actions/LoginAction';
import { useDispatch, useSelector } from 'react-redux';

function Login(props) {
    const dispatch = useDispatch();
    const [error, setError] = useState();
    const data = useSelector(State => State.login);

    return (
        <div>
            <h3>Login User</h3>
            <div className='outer-box'>
                <form className='signup-form' action='#' onSubmit={(event) => {
                    dispatch(validate(data,setError,props));
                    event.preventDefault()}}>
                    <img className='signup-image' src='https://cdn-icons-png.flaticon.com/512/428/428933.png' />
                    <label className='signup-label'>Email Address</label>
                    <input className='signup-input' type='text' name='email' onChange={(e) => { dispatch(getDetails(e, setError)) }} placeholder='Enter Email Address' />

                    <label className='signup-label'>Password</label>
                    <input className='signup-input' type='password' name='password' onChange={(e) => { dispatch(getDetails(e, setError)) }} placeholder='Enter Password' />

                    <div className='errorMessage'>{error}</div>
                    
                    <button className='signup-button' type='Submit'>Login</button>
                    <span>Don't have an account ? <NavLink to='/signup'>Signup</NavLink></span>
                </form>
            </div>
        </div>
    );
}

export default Login;