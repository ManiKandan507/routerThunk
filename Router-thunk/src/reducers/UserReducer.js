export const UserReducer=(state =[],{type,payload})=> {
    switch (type) {
        case "success":
           return payload
        default:
           return state
    }
}