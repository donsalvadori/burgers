import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
	return {
		type: actionTypes.AUTH_START
	};
};

export const authSuccess = (authData) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		authData: authData
	};
};

export const authFail = (error) => {
	return {
		type: actionTypes.AUTH_FAIL,
		error: error
	};
};

const API_KEY = process.env.REACT_APP_AUTH_API_KEY;

export const auth = (email, password) => {
	return dispatch => {
		dispatch(authStart());
		const authData = {
			email: email,
			password: password,
			returnSecureToken: true
		};
		axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + API_KEY, authData)
				.then( response => {
					console.log(response);
					dispatch(authSuccess(response.data));
				})
				.catch(err => {
					console.log(err);
					dispatch(authFail(err));
				});
	}
}



