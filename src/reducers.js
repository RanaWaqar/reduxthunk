
const initailState = {
	startFetchingData: false,
	fetchedData: false, 
	error: false,
	errorMessage: '',
	payload: []
}

const Reducers = (state = initailState, actions) => {
	switch(actions.type){
		case 'START_FETCHING': 
				state = {...state, startFetchingData: true, fetchedData: false, error: false, payload: []}
				break;
		case 'FETCHED': 	
				state = {...state, fetchedData: true, startFetchingData: false, error: false, payload: actions.payload}
				break;
		case 'ERROR': 
				state = {...state, fetchedData: false, startFetchingData: false, error: true, errorMessage: actions.payload.message}
				break;
		default: 
			  state = {...state}
	}

	return state;
}

export default Reducers;