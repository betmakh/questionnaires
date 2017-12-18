import React, { Component } from 'react';

import { Button, Paper, Textarea, Input } from './UIElements.jsx';

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
					<Input placeholder="email" type="email" value={response} onChange={this.inputChangeHandler.bind(this)} />
				) : (
					<Textarea
						name=""
						id=""
						cols="30"
						rows="10"
						value={response}
						placeholder="write your answer here..."
						onChange={this.inputChangeHandler.bind(this)}
					/>
				)}
			</Paper>
		);
	}
}

export default Question;
