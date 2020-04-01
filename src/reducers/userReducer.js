// const initialState = {
//     isLogin: false,
//     user: {
//         username: '',
//         password: '',
//         about: '',
//         profile_picture: ''
//     }
// };

export default function (state = [], action) {
    switch (action.type) {
        case 'CREATE_USER':
            // return {
            //     ...state,
            //     user: action.payload
            // }
            return {
                ...state.user,
                isLogin: true,
                user: {
                    username: action.username,
                    password: action.password,
                    about: action.about,
                    profile_picture: action.profile_picture
                }
            }
        case 'CREATE_USER_ERROR':
            return { isLogin: false }
        case 'CURRENT_USER':
            return action.payload
            // return null
        case 'SIGN_OUT':
            return action.payload
        case "EDIT_USER":
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

