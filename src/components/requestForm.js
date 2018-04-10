import React from 'react';

const RequestedForm = (props) => {
	return (
			<form>
				
				<label htmlFor="username"> Username: </label> 
				<input type="text" id="name" tabIndex="0" onKeyUp={props.onKeyUp} />

				<br/>
				<br/>
				
				<label htmlFor="age"> AGE: </label>
				<input type="number" id="age" tabIndex="1" onKeyUp={props.onKeyUp} />
				

				<br/>
				<br/>
				<label htmlFor="company"> Company: </label>
				<input type="text" id="company" tabIndex="2" onKeyUp={props.onKeyUp} />
				
				<br/>
				<br/>
				<label htmlFor="sex"> Gender: </label>
				<select onChange={props.onChange} id="sex">
					{
						props.genderOptions.map((opt, index) => {
						return (
								
								<option key={index}>{opt}</option>						
								
								) 
						})
					}
				</select>
				<br/>
				<br/>
				<button onClick={props.onClick}>ADD Data</button>
			</form> 
		)
}

export default RequestedForm;