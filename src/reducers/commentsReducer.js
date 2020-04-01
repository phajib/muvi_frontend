const initialState = {
    content: '',
    movies: [],
    loading: false,
    movieComments: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'FETCH_COMMENTS':
            return {
                ...state,
                text: action.payload,
                loading: false
            };
        case 'FETCH_MOVIE_COMMENTS':
            return {
                ...state,
                movies: action.payload,
                loading: false
            };
        case 'NEW_COMMENT':
            return {
                ...state,
                movie: action.payload,
                loading: false
            };
        case 'DELETE_COMMENT':
            return {
                ...state,
                loading: false
            };
        case 'LOADING':
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
