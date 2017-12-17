import React, { Component } from 'react';
import styled from 'styled-components';

import { Button, Paper } from './UIElements.jsx';

const Quesstionnaire = props => {
	var ques = 'tyche sooqa padla?',
		ans = 'da';
	return (
		<Paper>
			<h2>{ques}</h2>
			<p>{ans}</p>
			<Button>DA</Button>
		</Paper>
	);
};

export default Quesstionnaire;
