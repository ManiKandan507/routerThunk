
export const submit = (data, setError, props) => async () => {
    const valueLength = Object.values(data).filter(Boolean).length;
    if (valueLength === 4) {
        if (/^[https]/i.test(data.profile_picture)) {
            setError();
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': JSON.parse(localStorage.getItem("token")),
                },
                body: JSON.stringify({
                    name: data.name,
                    gender: data.gender,
                    job: data.job,
                    profile_img: data.profile_picture
                })
            };
            await fetch('http://node.mitrahsoft.co.in/user', requestOptions)
                .then((data) => data.json())
                .then(data => console.log(data, "datsss"))
                .catch(err => console.log(err))
                
            props[0].history.push("/userlist")
        }
        else setError(`Enter valid link`)
    }
    else setError("Please fill all the details")
}