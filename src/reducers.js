
const initailState = {
	startFetchingData: false,
	fetchedData: false, 
	error: false,
	errorMessage: '',
	payload: []
}

const Reducers = (state = initailState, actions) => {
	console.log(actions)
	switch(actions.type){
		case 'FETCHED_PENDING': 
				state = {...state, startFetchingData: true, fetchedData: false, error: false, payload: []}
				break;
		case 'FETCHED_FULFILLED': 	
				state = {...state, fetchedData: true, startFetchingData: false, error: false, payload: actions.payload.data}
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