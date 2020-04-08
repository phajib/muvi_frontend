export default function (state = [], action) {
    switch (action.type) {
        case 'USER_MOVIES':
            return action.payload
        default:
            return state;
    }
}
