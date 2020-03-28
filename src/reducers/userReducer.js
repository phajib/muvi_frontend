const initialState = {
    isLogin: false,
    user: {
        username: '',
        password: '',
        about: '',
        profile_picture: ''
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'CREATE_USER': 
            return action.payload
            // return {
            //     ...state.user,
            //     isLogin: true,
            //     user: {
            //         username: action.username,
            //         password: action.password,
            //         about: action.about,
            //         profile_picture: action.profile_picture
            //     },
        // };
        case 'CREATE_USER_ERROR': 
            return {isLogin: false}
        case 'SIGN_OUT':
            return action.payload
        case "UPDATE_USER":
            return action.payload
        default:
            return state;
    }
}

