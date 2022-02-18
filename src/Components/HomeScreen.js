import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeScreen = () => {
	return (
		<Container>
			<h3>WELCOME TO CODELAB VOTING APP</h3>
			<p>
				Please select and vote for each position...
				<br /> <span>vote wisely</span>
			</p>
			<br />
			<Link style={{ textDecoration: "none" }} to='/president'>
				<Button>PRESIDENTIAL VOTE</Button>
			</Link>
			<Link style={{ textDecoration: "none" }} to='/secretary'>
				<Button>VP/SECRETARY </Button>
			</Link>
			<Link style={{ textDecoration: "none" }} to='/'>
				<Button>PROGRAM CORDINATOR </Button>
			</Link>
			<Link style={{ textDecoration: "none" }} to='/'>
				<Button>FINEC/WELFARE</Button>
			</Link>
			<Link style={{ textDecoration: "none" }} to='/'>
				<Button>TREASURER</Button>
			</Link>
		</Container>
	);
};

export default HomeScreen;

const Button = styled.div`
	height: 70px;
	width: 300px;
	background-color: #123456;
	border-radius: 10px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
	font-weight: bold;

	transition: all 350ms;

	:hover {
		transform: scale(0.9);
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin-top: 50px;

	p {
		text-align: center;

		@media screen and (min-width: 768px) {
			width: 200px;
		}
	}

	span {
		font-weight: bold;
	}
`;
