import {connect} from 'react-redux';
import RootComponent from '../components/index';
import {startRequest, requestResponses, handleError} from '../actions/addItem';
import axios from 'axios';

const mapStateToProps = (state) => {
		return {
			genderOptions: ['Male', "Female"],
			payload: Object.assign([], state.payload),
			fetchedData: state.fetchedData,
			startFetchingData: state.startFetchingData,
			errorMessage: state.errorMessage,
			error: state.error
		}
}

const fetchedData = function(dispatch){
	axios.get('http://rest.learncode.academy/api/waqar/waqarpractice')
				.then((response) => {
					dispatch(requestResponses(response.data));
				})
				.catch((error) => {
					dispatch(handleError(error))
				});
}

const saveData = function(dispatch, body){
	
	let error = false; 
	let field = ''
	
	for(let fields in body){
		if(!body[fields]){
		error = true;
		field = fields;
		break;			
		}
		
	}
	
	if(error){
		dispatch(handleError({message: `Please enter your ${field}`}));
		return;
	}

	axios.post('http://rest.learncode.academy/api/waqar/waqarpractice', body)
				.then((response) => {
					fetchedData(dispatch)
				})
				.catch((error) => {
					dispatch(handleError(error))
				});
}

const mapdispatchedToProps = (dispatch) => {
	
	let postBody = {
		    "name": "",
		    "age": 0,
		    "company": "",
		    "sex": "Male"
		}

	return {
		onClick: (event) => {
			event.preventDefault();
			dispatch(startRequest());
			saveData(dispatch, postBody);
			
			},
		onChange: (event) => {
			postBody[event.target.id] = event.target.value;			
		},
		onKeyUp: (event) => {
			postBody[event.target.id] = event.target.value;	
		},
		dispatch: dispatch
	}
}

export default connect(mapStateToProps, mapdispatchedToProps)(RootComponent);