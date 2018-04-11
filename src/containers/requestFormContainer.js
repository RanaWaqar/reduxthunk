import {connect} from 'react-redux';
import RootComponent from '../components/index';
import * as actions from '../actions/addItem';


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


const saveData = function(body){
	return (dispatch, getState) => {
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
				dispatch(actions.handleError({message: `Please enter your ${field}`}));
				return;
			}

			dispatch(actions.postRequestToAPI(body));	
		}
	
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
			dispatch(actions.startRequest());
			dispatch(saveData(postBody));
			
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