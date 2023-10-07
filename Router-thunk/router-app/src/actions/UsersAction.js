
export const getUsers = () => async (dispatch) => {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': JSON.parse(localStorage.getItem("token")),
        }
    }
    const details = await fetch('http://node.mitrahsoft.co.in/users', requestOptions)
        .then((data) => data.json())
        .then(data => { return { type: "success", payload: data.recordset } })
        .catch(err => console.log("error", err))
    dispatch(details);
}

export const Delete = (getUser, event) => async (dispatch) => {
    if (window.confirm("Did you want to delete ?")) {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': JSON.parse(localStorage.getItem("token")),
            }
        }
        await fetch(`http://node.mitrahsoft.co.in/user/${getUser[event.target.value].id}`, requestOptions)
            .then((data) => data.json())
            .then(data => { console.log(data, "data"); })
            .catch(err => console.log("error", err))
        dispatch(getUsers());
    }
}

export const update = (editValue, setError, value, id, props) => async (dispatch) => {
    const keyLength = Object.keys(editValue).filter(Boolean).length;
    const valueLength = Object.values(editValue).filter(Boolean).length;
    const image = editValue.profile_img ? editValue.profile_img : value.profile_picture;
    if ( keyLength && valueLength && keyLength === valueLength) {
        if (/^[https]/i.test(image)) {
            setError();
            const requestOptions = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': JSON.parse(localStorage.getItem("token")),
                },
                body: JSON.stringify({
                    ...value,
                    ...editValue,
                    profile_img: image
                })
            }
            await fetch(`http://node.mitrahsoft.co.in/user/${id}`, requestOptions)
                .then((data) => data.json())
                .then(data => { console.log(data, "data"); })
                .catch(err => console.log("error", err))
            props[0].history.push("/userlist");
        }
        else setError(`Enter valid link`)
    }
    else
        setError("Please fill all the details")
    dispatch(getUsers());
}



