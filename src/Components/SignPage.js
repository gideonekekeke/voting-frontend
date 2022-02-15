import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userData } from "../Global/ReduxState";

const SignPage = () => {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	const data = {
		email: email,
		password: password,
	};

	// const formData =

	const RegisterUser = async () => {
		await axios
			.post("http://localhost:4000/api/signin", data)
			.then((res) => {
				console.log(res);
				localStorage.setItem("voteUser", JSON.stringify(res.data.data));

				dispatch(userData([res.data.data]));
				window.location.reload(navigate("/"));
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<Container>
			<Card>
				<h3>signin Now!</h3>

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
				<button onClick={RegisterUser}>Sign In</button>
				<p>
					Already have an Account <span>Sign in</span>
				</p>
			</Card>
		</Container>
	);
};

export default SignPage;

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
