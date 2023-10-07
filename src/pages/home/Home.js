import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../actions/UsersAction';
function Home(props) {
    const details = { Totalusers: 0, Tester: 0, BackendDeveloper: 0, WebDeveloper: 0, male: 0, female: 0 }
    const dispatch = useDispatch();
    useEffect(() => { dispatch(getUsers()) }, []);
    const getUser = useSelector(s => s.users);

    const adduser = () => props[0].history.push("/userlist");

    const handleLogout = () => props.setToken(null);

    if (getUser.length)
        getUser.forEach(data => {
            details[data.job] = details[data.job] + 1
            details[data.gender] = details[data.gender] + 1
            details.Totalusers += 1
        });

    return (
        <div>
            <button className='Home-Button1' onClick={adduser}>User List</button>
            <button className='Home-Button2' onClick={handleLogout}>Logout</button>
            <h2 className='home-heading'>User Data's</h2>
            <div className='outer-box home'>

                <tr className='trow'>
                    <th>Total User's : </th>
                    <td>{details.Totalusers}</td>
                </tr>
                <h3>Gender</h3>
                <tr className='trow'>
                    <th>Male : </th>
                    <td>{details.male}</td>
                </tr>
                <tr className='trow'>
                    <th>Female : </th>
                    <td>{details.female}</td>
                </tr>
                <h3>Role</h3>
                <tr className='trow'>
                    <th>WebDeveloper : </th>
                    <td>{details.WebDeveloper}</td>
                </tr>
                <tr className='trow'>
                    <th>BackendDeveloper : </th>
                    <td>{details.BackendDeveloper}</td>
                </tr>
                <tr className='trow'>
                    <th>Tester : </th>
                    <td>{details.Tester}</td>
                </tr>
            </div>
        </div>
    );
}

export default Home;