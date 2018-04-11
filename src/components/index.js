import React, {Component} from 'react';
import PropTypes from 'prop-types'

import RequestedForm from './requestForm';
import * as actions from '../actions/addItem';

export default class RootComponent extends Component {
	componentWillMount(){
		const dispatch = this.props.dispatch;
		dispatch(actions.getRequestToAPI());
	}

	render(){
		let props = this.props;
		return (
			<div>
				<RequestedForm onClick={props.onClick.bind(this)} onKeyUp={props.onKeyUp.bind(this)} onChange={props.onChange.bind(this)} genderOptions={this.props.genderOptions}/>
				{props.startFetchingData === true && props.fetchedData === false && <p>loading</p>}
				{props.error === true && <strong>{props.errorMessage}</strong>}					
					<ul>
					{this.props.error === false && this.props.fetchedData === true && this.props.payload.map(
						(list, index) => {
							return (
								<li key={index}>
								<label>Username: {list.name} </label><br/>
								<label>AGE : {list.age}</label><br/>
								<label>Company: {list.company}</label><br/>
								<label>Gender: {list.sex}</label><br/>
								</li>
								)

						})
				}
				</ul>	
			</div>
			   )
	}
}

RootComponent.propTypes = {
	onKeyUp: PropTypes.func.isRequired,
	genderOptions: PropTypes.array.isRequired,
	onClick: PropTypes.func.isRequired,
	payload: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	errorMessage: PropTypes.string.isRequired

}
