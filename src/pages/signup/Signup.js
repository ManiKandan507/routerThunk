import React, { useState } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import "../../assests/Style.css"
import { useDispatch, useSelector } from 'react-redux';
import { getvalue } from '../../actions/SignupAction';
import { SubmitForm } from '../../actions/SignupAction';


function Signup(props) {
    const [error, setError] = useState();

    const data = useSelector(State => State.signup);

    const dispatch = useDispatch();
    return (
        <div>
            <h3>Register User</h3>
            <div className='outer-box'>
                <img className='signup-image' src='https://cdn-icons-png.flaticon.com/512/428/428933.png' />

                <form className='signup-form' action='#' onSubmit={(event) =>{ 
                    dispatch(SubmitForm(data,setError,props));
                    event.preventDefault()}}>
                    <label className='signup-label' >First Name</label>
                    <input required className='signup-input' name='first_name' onChange={(e) => { dispatch(getvalue(e, setError)) }} type='text' placeholder='Enter First Name' />

                    <label className='signup-label' >Last Name</label>
                    <input required className='signup-input' name='last_name' onChange={(e) => { dispatch(getvalue(e, setError)) }} type='text' placeholder='Enter Last Name' />

                    <label className='signup-label'>Email Address</label>
                    <input required className='signup-input' name='email' onChange={(e) => { dispatch(getvalue(e, setError)) }} type='email' placeholder='Enter Email Address' />

                    <label className='signup-label'>Password</label>
                    <input required className='signup-input' name='password' onChange={(e) => { dispatch(getvalue(e, setError)) }} type='password' placeholder='Enter Password' />

                    <div className='errorMessage'>{error}</div>

                    <button className='signup-button'>Register</button>
                    
                </form>
                <span>Already have an account ? <NavLink to='/'>Login</NavLink></span>
            </div>

        </div>
    );
}

export default Signup;