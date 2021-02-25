import { FETCH_JOKES_LOADING, FETCHING_SUCCESSFUL, FETCHING_ERROR } from './../actions/index';

const initialState = {
    joke: null,
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case(FETCH_JOKES_LOADING):
            return ({
                ...state,
                isFetching: true,
                joke: null
            });
        case(FETCHING_SUCCESSFUL):
            return ({
                ...state,
                joke: action.payload,
                isFetching: false
            });
        case(FETCHING_ERROR):
            return ({
                ...state,
                error: action.payload,
                isFetching: false
            });
        default:
            return state;
    }
}