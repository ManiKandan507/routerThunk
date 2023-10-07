import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getUsers, update } from '../../actions/UsersAction';

function EditUserForm(props) {
    const dispatch = useDispatch();
    const params = useParams();
    const id = parseInt(params.id);
    const getDetails = useSelector(state => state.users);
    const [error, setError] = useState();
    const [editValue, setEditValue] = useState({});
    const [userDetails, SetUserDetails] = useState({
        id: "",
        name: "",
        job: "",
        gender: "",
        profile_picture: ""
    });

    useEffect(() => {
        const value = getDetails.filter((data) => id === data.id ? data : "");
        if (value.length)
            SetUserDetails(...value);
    }, [getDetails])

    useEffect(() => { dispatch(getUsers()) }, []);
    const handleBack = () => props[0].history.push("/userlist");

    const getvalue = (event) => {
        const value = event.target.value.trim().replaceAll(/ {2,}/g, "");
        const key = event.target.name;
        if (key.includes("name") && !/^[a-z ]*$/gi.test(value))
            setError(`Character only Allowed in ${key}`)
        else {
            setError();
            setEditValue({
                ...editValue,
                [key]: value,
            })
            userDetails[key] = value;
        }
    }

    return (
        <div>
            <button className='signup-backButton' onClick={handleBack}>back</button>
            <h3 className='signup-heading'>Edit User Form</h3>
            <div className='outer-box'>
                <form className='signup-form' action='#' onSubmit={(event) => {
                    dispatch(update(editValue, setError, userDetails, id, props));
                    event.preventDefault()
                }}>
                    <label >Name</label>
                    <input className='signup-input' type='text' name='name' onChange={getvalue} defaultValue={userDetails.name} />
                    <label >Profile Image Url</label>
                    <input className='signup-input' type='text' name='profile_img' onChange={getvalue} defaultValue={userDetails.profile_picture} />
                    <label >Job</label>
                    <select className='signup-option' name='job' onChange={getvalue}
                        value={userDetails.job} >
                        <option>---Select Job---</option>
                        <option>WebDeveloper</option>
                        <option>BackendDeveloper</option>
                        <option>Tester</option>
                    </select>

                    <div className='editUser-gender'>
                        <label >Gender</label>
                        <input type='radio' name='gender' onChange={getvalue} checked={userDetails.gender === 'male'} value="male" />
                        <label >Male</label>
                        <input type='radio' name='gender' onChange={getvalue} checked={userDetails.gender === 'female'} value="female" />
                        <label >Female</label>
                    </div>
                    <div className='errorMessage'>{error}</div>
                    <button className='signup-button' type='Submit'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default EditUserForm;