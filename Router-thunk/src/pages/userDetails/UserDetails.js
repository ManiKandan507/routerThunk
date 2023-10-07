import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getUsers } from '../../actions/UsersAction';

function UserDetails(props) {
    
    const dispatch = useDispatch();
    const params = useParams();
    const id = parseInt(params.id);
    const getDetails = useSelector(s => s.users);
    useEffect(() => { dispatch(getUsers()) }, []);
    const back = () => props[0].history.push("/userlist");

    return (
        <div>
            <button className='userdetails-backButton' onClick={back}>Back</button>
            <h2 className='userdetails-title'>User Details</h2>
            <div className='userdetails-outerbox1'>
                {getDetails.map((data) => {
                    if (data.id === id)
                        return (
                            <div className='userdetails-outerbox'>
                                <div className='outer-box userdetails-box'>
                                    <h3>{data.name}</h3>
                                    <p>id : {data.id}</p>
                                    <p>{data.job}</p>
                                    <p>{data.name} is a {data.job}</p>
                                </div>
                                <div>
                                    <img className='userdetails-image' onError={(e) => { e.target.src = "https://techofide.com/media/profile/media/images/avatars/avatar_sUCeTqF_zLP4wUX_eh9MmlS_V9JYGv4_hwiEMU4_1j4vsKZ.jpg" }} src={data.profile_picture} alt='Image Not Found'></img>
                                </div>
                            </div>
                        )
                })}
            </div>
        </div>
    );
}
export default UserDetails;