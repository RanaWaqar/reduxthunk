
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

export function handleError(errorObject) {
	return {
		type: error,
		payload: errorObject
	}
}