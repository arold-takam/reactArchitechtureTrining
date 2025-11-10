import * as api from "../infrastructures/QuizService.js"
import {useEffect, useState} from "react";

export default function UseAnswer() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

//ANSWER Hook----------------------------------------------------------------------------------
	const [listAnswers, setListAnswers] = useState([]);

	useEffect(() => {
		try {
			setListAnswers(api.getListAnswers());
		}catch(error){
			setError("Error getting list answers: " + error.message);
		}finally{
			setLoading(false);
		}
	}, []);

	const addAnswer = (answerData) => {
		try {
			api.addAnswer(answerData);

			setListAnswers(api.getListAnswers());
			setError(null);
		}catch(error){
			setError("Error adding answer: " + error.message);
		}
	}

	const removeAnswer = (answerID) => {
		try {
			api.deleteAnswer(answerID);
			setListAnswers(api.getListAnswers());
			setError(null);
		}catch(error){
			setError("Error deleting answer: " + error.message);
		}
	}

	return {
		loading,
		error,

		listAnswers,

		addAnswer,
		removeAnswer,
	};
}