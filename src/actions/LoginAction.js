export const getDetails = (event, setError) => {
    const key = event.target.name;
    const value = event.target.value.trim().replaceAll(/ {2,}/g, "");
    if (key.includes("password") && !/^[a-z0-9]*$/gi.test(value)) {
        setError(`${key} only have Character & number`)
        return { type: key, payload: "" }
    }
    else {
        setError();
        return { type: key, payload: value }
    }
}

export const validate = (data, setError, props) => async (dispatch) => {
    const valueLength = Object.values(data).filter(Boolean).length;
    if (valueLength === 2) {
        setError();
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(data.email)) {
            const loginOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)

            };
            await fetch('http://node.mitrahsoft.co.in/login', loginOptions)
                .then((data) => {
                    if (!data.ok)
                        setError("Invalid Credentials")
                    return data.json()
                })
                .then(data => { props.setToken(data.token) })
                .catch(err => console.log(err))
        }
        else setError(`Enter valid Email Address`)
    }
    else setError("Please fill all the details")
}