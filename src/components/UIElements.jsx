import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const colors = {
	primary: '#2196f3',
	secondary: '#ff4081',
	default: '#e0e0e0',
	black: 'rgba(0, 0, 0, 0.87)',
	red: '#F44336',
	green: '#4CAF50'
};

const spaceUnits = {
	lineHeight: '33px'
};

export const Button = styled.button`
	line-height: ${spaceUnits.lineHeight};
	padding: 0 16px;
	border-radius: 2px;
	text-transform: uppercase;
	min-width: 88px;
	border: none;
	cursor: pointer;
	max-width: 100%;
	width: ${props => (props.fullWidth ? '100%' : 'auto')};
	color: ${props => (props.color && colors[props.color] !== colors.default ? 'white' : colors.black)};
	background: ${props => (props.color && colors[props.color] ? colors[props.color] : colors.default)};
	box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
		0px 3px 1px -2px rgba(0, 0, 0, 0.12);
	& + & {
		margin-left: 4px;
	}
`;

export const Input = styled.input`
	line-height: ${spaceUnits.lineHeight};
	outline: none;
	border: none;
	border-bottom: 2px solid ${colors.primary};
	width: ${props => (props.fullWidth ? '100%' : 'auto')};
	&:focus {
		border-bottom-width: 3px;
	}
`;

export const Textarea = Input.withComponent('textarea').extend`
	width: 100%;
`;

export const ButtonContainer = styled.div`
	margin-left: -8px;
	margin-top: -8px;
	& button {
		margin-top: 8px;
		margin-left: 8px;
	}
`;

export const StyledLink = styled(Link)`
	color: inherit;
	text-decoration: none;
`;

export const Paper = styled.section`
	background: white;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
		0px 1px 10px 0px rgba(0, 0, 0, 0.12);
	border-radius: 2px;
	padding: 16px;
	margin-bottom: 16px;
`;
