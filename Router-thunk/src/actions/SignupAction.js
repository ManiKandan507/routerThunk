
export const getvalue = (event, setError) => {
    const value = event.target.value.trim().replaceAll(/ {2,}/g, "");
    const key = event.target.name;

    if (key.includes("name") && !/^[a-z ]*$/gi.test(value)) {
        setError(`Character only Allowed in ${key}`)
        return { type: key, payload: "" }
    }
    else if (key.includes("password") && !/^[a-z0-9]*$/gi.test(value)) {
        setError(`${key} only have Character & number`)
        return { type: key, payload: "" }
    }
    else {
        setError();
        return { type: key, payload: value }
    }
}

export const SubmitForm = (data,setError,props) => async (dispatch) => {
    const valueLength = Object.values(data).filter(Boolean).length;
    if (valueLength === 4) {
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(data.email) &&  data.password.length >= 8) {
    
                setError();
                    const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data)
                    };
                    await fetch('http://node.mitrahsoft.co.in/register', requestOptions)
                        .then((data) => data.json())
                        .then(data => console.log(data, "datsss"))
                        .catch(err => err.message.includes("Admin") ? props[0].history.push("/") : setError("Email is already register"))
        }
        else{
            data.password.length >= 8 ?  setError(`Enter valid EmailAddress`):setError("Password should minimum have 8 characters")
        } 
    }
    else setError("Please fill all the details")
}
