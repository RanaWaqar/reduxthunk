import axios from 'axios';

const fetched = "FETCHED";
const error = "ERROR";

export function requestResponses(request) {
	return {
		type: fetched,
		payload: request
	}
}


export function getRequestToAPI(){
	return (dispatch, getState) => {
			dispatch(requestResponses(axios.get('http://rest.learncode.academy/api/waqar/waqarpractice')));
	}
}

export function postRequestToAPI(body){
	return (dispatch, getState) => {
		axios.post('http://rest.learncode.academy/api/waqar/waqarpractice', body)
				.then((response) => {
					dispatch(getRequestToAPI());
				})
				.catch((error) => {
					dispatch(handleError(error))
				});
	}
}

export function handleError(errorObject) {
	return {
		type: error,
		payload: errorObject
	}
}