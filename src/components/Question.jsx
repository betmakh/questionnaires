import React, { Component } from 'react';

import { Button, Paper } from './UIElements.jsx';

const inputHandler = event => {};

class Question extends Component {
	inputChangeHandler(event) {
		const { questionoObject, onQuestionUpdate, email } = this.props;
		this.props.onQuestionUpdate({
			id: email ? 'email' : questionoObject.id,
			value: event.target.value
		});
	}

	render() {
		const { questionoObject, email, onQuestionUpdate, response } = this.props;
		return (
			<Paper>
				<h2>{email ? 'please enter your email to complete' : questionoObject.value}</h2>
				{email ? (
					<input type="email" value={response} onChange={this.inputChangeHandler.bind(this)} />
				) : (
					<textarea name="" id="" cols="30" rows="10" value={response} onChange={this.inputChangeHandler.bind(this)} />
				)}
			</Paper>
		);
	}
}

export default Question;
