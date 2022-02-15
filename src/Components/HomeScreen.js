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

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
);

const HomeScreen = () => {
	const { current } = useContext(GlobalContext);

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
		peter: 0,
		bukky: 0,
		ubani: 0,
	};

	voteCounts = fetchData.reduce(
		(acc, vote) => (
			(acc[vote.answer] = (acc[vote.answer] || 0) + parseInt(vote.points)), acc
		),
		{},
	);

	const addCount = () => {
		setCounter(counter + 1);
		// window.location.reload();
	};

	const Questions = ["Who is Your Best Instructor in Codelab"];

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
					name='peter'
					value='peter'
				/>
				<label for='peter'>Peter</label>
				<br />
				<input
					onChange={(e) => {
						setAnswer(e.target.value);
					}}
					type='radio'
					name='bukola'
					value='bukola'
				/>
				<label for='bukola'>bukola</label>
				<br />
				<input
					onChange={(e) => {
						setAnswer(e.target.value);
					}}
					type='radio'
					name='ubani'
					value='ubani'
				/>
				<label for='ubani'>ubani</label>
				<br />
				<div
					style={{
						display: "flex",
						width: "270px",
						justifyContent: "space-between",
						marginTop: "30px",
					}}>
					{fetchData.find((el) => el.ids === current?._id) ? null : (
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
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<h1>Points record</h1>
			<Bar
				style={{ width: "50%" }}
				data={{
					labels: ["peter", "bukola", "ubani"],
					datasets: [
						{
							data: voteCounts,
							backgroundColor: "#123456",
						},
					],
				}}></Bar>
		</div>
	);
};

export default HomeScreen;
