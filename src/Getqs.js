import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from './axios';
import './chatbot/style.css';

function Getqs() {
	const [questions, setQuestion] = useState([]);
	const [option, setOption] = useState();
	const [index, setIndex] = useState(0);
	const [score, setScore] = useState(0);
	const history = useNavigate();
	var skillcode = 1;

	// var temp = 0;
	var results = new Array();

	useEffect(() => {
		async function fetchData() {
			const req = await axios.get(
				'/questions/' + `${skillcode}`
				// +props.match.params.id  changes here
			);
			setQuestion(req.data);
		}
		fetchData();
		// console.log("loaded")
	}, []);

	// console.log(questions);
	const nextQues = () => {
		if (index + 1 === questions.length) {
			// var results=new Array();

			results = [checkScore(score), score];
			postResult(results);
			// fetch('http://localhost:5000',{})
			history('/');
		} else {
			setIndex(index + 1);
		}
	};

	const postResult = (values) => {
		const submission = {
			score: values[1],
			result: values[0],
		};
		axios
			.post('/user', submission)
			.then((values) => {
				console.log(values);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const checkResponse = (response) => {
		// console.log(Object.values(response))
		console.log(questions[index].answer);
		if (Object.values(response) == questions[index].answer) {
			console.log('correct');
			setScore(score + 1);
		} else {
			console.log('response=>' + Object.values(response));
		}

		console.log(score);
		nextQues();
	};

	const checkScore = (score) => {
		const minscore = 1;
		console.log(score);
		var scorecheck = false;
		if (score > minscore) {
			scorecheck = true;
		}

		console.log(scorecheck);
		return scorecheck;
	};

	const handleResponse = (event) => {
		event.preventDefault();
		// console.log("===>", event.target.value)
		// console.log("===>", event.target)
		let jsonRes = {
			response: option,
		};
		console.log('JSONRES : ', jsonRes);

		// Post Values
		// postValues(jsonRes)
		checkResponse(jsonRes);
	};

	return (
		<div>
			<div class="wrapper">
				<div class="title">Simple Chatbot</div>
				<div class="box">
					<div class="item">
						<div class="icon">
							<i class="fa fa-user"></i>
						</div>
						<div class="msg">
							<p>Hello everyone, How are you?</p>
							{questions.map((ques) => (
								<div>
									<form onSubmit={handleResponse}>
										<label key={questions[index].__id}>
											{questions[index].question}
										</label>
										<select
											id="response"
											type="select"
											placeholder="Answer"
											name="response"
											value={`${questions[index].option1}`}
											onChange={(e) => {
												console.log(e.target.value);
												setOption(e.target.value);
											}}
										>
											<option value={`${questions[index].option1}`}>
												{questions[index].option1}
											</option>
											<option value={`${questions[index].option2}`}>
												{questions[index].option2}
											</option>
											<option value={`${questions[index].option3}`}>
												{questions[index].option3}
											</option>
											<option value={`${questions[index].option4}`}>
												{questions[index].option4}
											</option>
										</select>
										<button
											type="submit"
											//  onClick={nextQues}
										>
											Submit
										</button>
									</form>
								</div>
							))}
						</div>
					</div>
					<br clear="both" />
					<div class="item right">
						<div class="msg">
							<p></p>
						</div>
					</div>
				</div>

				<div class="typing-area">
					<div class="input-field">
						<input type="text" placeholder="Type  your message" required />
						<button>Send button</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Getqs;
