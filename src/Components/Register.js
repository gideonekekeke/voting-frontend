import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const navigate = useNavigate();
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	const data = {
		name: name,
		email: email,
		password: password,
	};

	// const formData =

	const RegisterUser = async () => {
		await axios
			.post("http://localhost:4000/api/register", data)
			.then((res) => {
				console.log(res);
				navigate("/signin");
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<Container>
			<h2>Welcome to online Voting App</h2>
			<Card>
				<h3>Register Now!</h3>
				<input
					onChange={(e) => {
						setName(e.target.value);
					}}
					placeholder='name'
				/>
				<input
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					placeholder='email'
				/>
				<input
					onChange={(e) => {
						setPassword(e.target.value);
					}}
					placeholder='password'
				/>
				<button onClick={RegisterUser}>Register</button>
				<p>
					Already have an Account <span>Sign in</span>
				</p>
			</Card>
		</Container>
	);
};

export default Register;

const Card = styled.div`
	display: flex;
	flex-direction: column;

	width: 400px;
	margin-top: 100px;

	input {
		height: 40px;
		border-radius: 5px;
		margin: 10px;
		border: 1px solid silver;
	}
	button {
		height: 40px;
		border-radius: 5px;
		margin: 10px;
		border: 1px solid silver;
		cursor: pointer;

		:hover {
			background-color: #123456;
			color: white;
		}
	}
`;
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
