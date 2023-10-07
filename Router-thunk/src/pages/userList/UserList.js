import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers,Delete } from '../../actions/UsersAction';

function UserList(props) {
    const dispatch = useDispatch();
    
    const getUser = useSelector(s => s.users);    

    useEffect(() => { dispatch(getUsers()) }, []);

    const logout = () =>  props.setToken(null);

    const edit = (event => props[0].history.push(`/EditUserForm/${getUser[event.target.value].id}`));

    const details = (event => props[0].history.push(`/userdetails/${getUser[event.target.id].id}`));

    const back = () => props[0].history.push("/home");

    const adduser = () => props[0].history.push("/adduser");

    return (
        <div>
            <h2>User List</h2>
            <button className='signup-backButton' onClick={back}>Back</button>
            <button className='Home-Button2' onClick={adduser}>AddUser</button>
            <div className='outer-box userlistbox'>
                {(getUser.length) ?
                    <div className='uselist-Outer'>
                        {getUser.map((data, index) => {
                            return (
                                <div key={index} className='uselist-inner'>
                                    <img className='userlist-image' id={index} onClick={details} onError={(e) => { e.target.src = "https://techofide.com/media/profile/media/images/avatars/avatar_sUCeTqF_zLP4wUX_eh9MmlS_V9JYGv4_hwiEMU4_1j4vsKZ.jpg" }} src={data.profile_picture}></img>
                                    <div className='userlist-card'>
                                        <h4 className='userlist-name'>{data.name}</h4>
                                        <p className='userlist-role'>{data.job}</p>
                                    </div>
                                    <div>
                                        <button className='userlist-edit' value={index} onClick={edit}>EDIT</button>
                                        <button className='userlist-delete' value={index} onClick={(event)=>dispatch(Delete(getUser,event,props))}>DELETE</button>
                                    </div>
                                </div>)
                        })}
                    </div>
                    :
                    <div id='none_content'><h3>No data found</h3></div>}
                <button className='userlist-logout' onClick={logout}>Logout</button>
            </div>
        </div>
    );
}

export default UserList;