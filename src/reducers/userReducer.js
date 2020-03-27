import {
    // FETCH_COMMENTS,
    // FETCH_MOVIE_COMMENTS,
    // NEW_COMMENT,
    // DELETE_COMMENT,
    LOADING
} from '../actions/types';

const initialState = {
    // text: '',
    // movies: [],
    // loading: false,
    // movie: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
