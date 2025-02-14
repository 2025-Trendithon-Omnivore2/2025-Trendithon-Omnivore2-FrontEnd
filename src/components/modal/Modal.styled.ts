import styled from 'styled-components';

export const ModalWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalContent = styled.div`
	color: #000;
	width: 350px;
	height: 500px;
	background-color: #e2daeb;
	border-radius: 12px;
`;

export const ExitButton = styled.button`
	width: 100%;
	padding: 1rem;
	display: flex;
	font-size: 1.2rem;
	flex-direction: column;
	align-items: flex-end;
	background-color: transparent;
	cursor: pointer;
`;
