const initialVal = {
    email: "",
    password: ''
}
export const LoginReducer = (state = initialVal, { type, payload }) => {
    switch (type) {
        case "email":
            return { ...state, email: payload }
        case "password":
            return { ...state, password: payload }
        default:
            return state
    }
}
