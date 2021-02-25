import axios from 'axios';

export const FETCH_JOKES_LOADING = "FETCH_JOKES_LOADING";
export const FETCHING_SUCCESSFUL = "FETCHING_SUCCESSFUL";
export const FETCHING_ERROR = "FETCHING_ERROR";

export const getJoke = () => {

    return dispatch => {

        dispatch({ type: FETCH_JOKES_LOADING });

        axios
            .get("https://v2.jokeapi.dev/joke/Dark?blacklistFlags=racist&type=single")
            .then(res => {
                dispatch({ type: FETCHING_SUCCESSFUL, payload: res.data.joke });
            })
            .catch(err => {
                dispatch({ type: FETCHING_ERROR, payload: err.data.error })
            })
    }
}
