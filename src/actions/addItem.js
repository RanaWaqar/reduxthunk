import axios from 'axios';

const startFetching = "START_FETCHING";
const fetched = "FETCHED";
const error = "ERROR";

export function startRequest() {
	return {
		type: startFetching,
		payload: 'loading'
	}
}

export function requestResponses(response) {
	return {
		type: fetched,
		payload: response
	}
}


export function getRequestToAPI(){
	return (dispatch, getState) => {
			axios.get('http://rest.learncode.academy/api/waqar/waqarpractice')
				.then((response) => {
					dispatch(requestResponses(response.data));
				})
				.catch((error) => {
					dispatch(handleError(error))
				});
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