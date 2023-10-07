import React, { useState } from 'react';
import { submit } from '../../actions/AddUserAction';
import { useDispatch } from 'react-redux';
function AddUser(props) {
    const [data, setData] = useState({});
    const [error, setError] = useState();
    const dispatch = useDispatch();
    
    const getValue = (event) => {
        const value = event.target.value.trim().replaceAll(/ {2,}/g, "");
        const key = event.target.name;
        if (key.includes("Name") && !/^[a-z ]*$/gi.test(value))
            setError(`Character only allowed in ${key}`)
        else {
            setError();
            setData({
                ...data,
                [key]: value
            })
        }
    }

    const handleBack = () => props[0].history.push("/userlist");

    return (
        <div>
            <button className='signup-backButton' onClick={handleBack}>back</button>
            <h3 className='signup-heading'>Add User</h3>
            <div className='outer-box'>
                <form className='signup-form' action='#' onSubmit={(event) => {
                    dispatch(submit(data,setError,props));
                    event.preventDefault()}}>

                    <label >Name</label>
                    <input className='signup-input' name='name' placeholder='Enter a Name'onChange={getValue} />

                    <label >Profile Image Url</label>
                    <input className='signup-input' name='profile_picture' onChange={getValue} placeholder='Photo URL' />

                    <label >Job</label>
                    <select className='signup-option' name='job' onChange={getValue} >

                        <option value={''}>---Select Job---</option>
                        <option >WebDeveloper</option>
                        <option >BackendDeveloper</option>
                        <option >Tester</option>
                    </select>
                    <div className='editUser-gender'>

                        <label >Gender</label>
                        <input type='radio' name='gender' onChange={getValue} value="male" />
                        <label >Male</label>
                        <input type='radio' name='gender' onChange={getValue} value="female" />
                        <label >Female</label>
                    </div>
                    <div className='errorMessage'>{error}</div>
                    <button className='signup-button' type='Submit'>Submit</button>
                </form>
            </div>

        </div>
    );
}
export default AddUser;