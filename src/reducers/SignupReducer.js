const initialVal = {
    first_name: '',
    last_name: '',
    email: "",
    password: ''
}
export const SignupReducer = (state = initialVal, { type, payload }) => {
    switch (type) {
        case "first_name":
            return { ...state, first_name: payload }
        case "last_name":
            return { ...state, last_name: payload }
        case "email":
            return { ...state, email: payload }
        case "password":
            return { ...state, password: payload }
        default:
            return state
    }
}
