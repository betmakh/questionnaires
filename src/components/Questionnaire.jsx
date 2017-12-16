import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
	background: white;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
		0px 1px 10px 0px rgba(0, 0, 0, 0.12);
	border-radius: 2px;
	padding: 16px;
`;

const Quesstionnaire = props => {
	var ques = 'tyche sooqa padla?',
		ans = 'da';
	return (
		<Wrapper>
			<h2>{ques}</h2>
			<p>{ans}</p>
		</Wrapper>
	);
};

export default Quesstionnaire;