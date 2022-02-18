import React, { useContext } from "react";
import axios from "axios";
import { Bar, Line, Pie } from "react-chartjs-2";
import Pusher from "pusher-js";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { GlobalContext } from "../Global/GlobalContext";
import { useDispatch, useSelector } from "react-redux";
import { removingUser } from "../Global/ReduxState";
import { useNavigate } from "react-router-dom";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
);

const PresidentPage = () => {
	const { current } = useContext(GlobalContext);

	const navigate = useNavigate();

	const dispatch = useDispatch();

	const readUser = useSelector((state) => state.persistedReducer.users);

	console.log("reding", readUser);
	const [answer, setAnswer] = React.useState("");
	const [fetchData, setFetchData] = React.useState([]);
	const [counter, setCounter] = React.useState(0);
	// console.log(val);

	ChartJS.register(BarElement, LinearScale, CategoryScale);

	const dataV = {
		answer: answer,
		ids: current?._id,
		col: "president",
	};

	const ids = current?._id;

	console.log(ids);

	const onSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();

		formData.append("answer", answer);

		await axios
			.post("http://localhost:4000/api/poll", dataV)
			// .then((res) => res.json())
			.then((data) => console.log(data));
		// .catch((err) => console.log("cannot send data"));
	};

	// Pusher.logToConsole = true;

	var pusher = new Pusher("4f50e19de914cb7872cc", {
		cluster: "eu",
	});

	const getData = async () => {
		axios.get("http://localhost:4000/api/").then((res) => {
			console.log("this is the data", res.data.votes);
			setFetchData(res.data.votes);
		});
	};

	let voteCounts = {
		Malush: 0,
		GoodLuck: 0,
		Timothy: 0,
		Romanus: 0,
		Judith: 0,
		Kelechi: 0,
		Olorunda: 0,
		Lucky: 0,
		Osas: 0,
		Cynthia: 0,
		Gideon: 0,
	};

	voteCounts = fetchData.reduce(
		(acc, vote) => (
			(acc[vote.answer] = (acc[vote.answer] || 0) + parseInt(vote.points)), acc
		),
		{},
	);

	if (fetchData.values === "president") {
		voteCounts = fetchData.reduce(
			(acc, vote) => (
				(acc[vote.answer] = (acc[vote.answer] || 0) + parseInt(vote.points)),
				acc
			),
			{},
		);
	}

	const addCount = () => {
		setCounter(counter + 1);
		// window.location.reload();
	};

	const Questions = ["Choose Your CodeLab Fellow President"];

	React.useEffect(() => {
		getData();
	}, []);

	return (
		<div style={{ margin: "50px" }}>
			<h4> welcome {current?.name}</h4>
			<h2>{Questions[counter % Questions.length]}?</h2>{" "}
			{current ? (
				<button
					onClick={() => {
						localStorage.removeItem("voteUser");
						window.location.reload();
						dispatch(removingUser(readUser));
					}}>
					Logout
				</button>
			) : null}
			<br />
			<br />
			<div style={{ fontSize: "20px", paddding: "20px" }}>
				<input
					onChange={(e) => {
						setAnswer(e.target.value);
					}}
					type='radio'
					name='Malush'
					value='Malush'
				/>
				<label for='Malush'>Malush</label>
				<br />
				<input
					onChange={(e) => {
						setAnswer(e.target.value);
					}}
					type='radio'
					name='GoodLuck'
					value='GoodLuck'
				/>
				<label for='GoodLuck'>GoodLuck</label>
				<br />
				<input
					onChange={(e) => {
						setAnswer(e.target.value);
					}}
					type='radio'
					name='Timothy'
					value='Timothy'
				/>
				<label for='Timothy'>Timothy</label>
				<br />
				<input
					onChange={(e) => {
						setAnswer(e.target.value);
					}}
					type='radio'
					name='Romanus'
					value='Romanus'
				/>
				<label for='Romanus'>Romanus</label>
				<br />
				<input
					onChange={(e) => {
						setAnswer(e.target.value);
					}}
					type='radio'
					name='Judith'
					value='Judith'
				/>
				<label for='Judith'>Judith</label>
				<br />
				<input
					onChange={(e) => {
						setAnswer(e.target.value);
					}}
					type='radio'
					name='Kelechi'
					value='Kelechi'
				/>
				<label for='Kelechi'>Kelechi</label>
				<br />
				<input
					onChange={(e) => {
						setAnswer(e.target.value);
					}}
					type='radio'
					name='Olorunda'
					value='Olorunda'
				/>
				<label for='Olorunda'>Olorunda</label>
				<br />
				<input
					onChange={(e) => {
						setAnswer(e.target.value);
					}}
					type='radio'
					name='Lucky'
					value='Lucky'
				/>
				<label for='Lucky'>Lucky</label>
				<br />
				<input
					onChange={(e) => {
						setAnswer(e.target.value);
					}}
					type='radio'
					name='Osas'
					value='Osas'
				/>
				<label for='Osas'>Osas</label>
				<br />
				<input
					onChange={(e) => {
						setAnswer(e.target.value);
					}}
					type='radio'
					name='Cynthia'
					value='Cynthia'
				/>
				<label for='Cynthia'>Cynthia</label>
				<br />
				<input
					onChange={(e) => {
						setAnswer(e.target.value);
					}}
					type='radio'
					name='Gideon'
					value='Gideon'
				/>
				<label for='Gideon'>Gideon</label>
				<br />
				<div
					style={{
						display: "flex",
						width: "270px",
						justifyContent: "space-between",
						marginTop: "30px",
					}}>
					{" "}
					{fetchData?.find(
						(el) => el.ids === current?._id && el.col === "president",
					) ? null : (
						<button
							onClick={onSubmit}
							style={{
								height: "40px",
								width: "120px",
								background: "#123456",
								color: "white",
							}}>
							Vote
						</button>
					)}
					<button
						onClick={() => {
							navigate(-1);
						}}
						style={{
							height: "40px",
							width: "200px",
							background: "red",
							color: "white",
							border: "none",
							cursor: "pointer",
							borderRadius: "5px",
						}}>
						Go Back to Continue Vote
					</button>
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<h1>Presidential record</h1>
			{fetchData.find((el) => el.col === "president") ? (
				<Bar
					data={{
						labels: [
							"Malush",
							"GoodLuck",
							"Timothy",
							"Romanus",
							"Judith",
							"Kelechi",
							"Olorunda",
							"Lucky",
							"Osas",
							"Cynthia",
							"Gideon",
						],
						datasets: [
							{
								data: voteCounts,
								backgroundColor: "#123456",
							},
						],
					}}
					style={{ width: "50%" }}></Bar>
			) : null}
		</div>
	);
};

export default PresidentPage;
