import * as api from "../infrastructures/QuizService.js";
import {useEffect, useState} from "react";

export default function UseQuiz() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

//QUIZ Hook----------------------------------------------------------------------------------
	const [listQuiz, setListQuiz] = useState([]);

	useEffect(() => {
		try {
			setListQuiz(api.getListQuiz());
		}catch (error) {
			setError("Something went wrong!: "+error);
		}finally {
			setLoading(false);
		}
	}, []);

	const addQuiz  = (quiz)=>{
		try {
			api.addQuiz(quiz);
			setListQuiz(api.getListQuiz());
		}catch (error) {
			setError("Something went wrong!: "+error);
		}
	}

	const removeQuiz  = (quizID)=>{
		try {
			api.deleteQuiz(quizID);
			setListQuiz(api.getListQuiz());
		}catch (error) {
			setError("Something went wrong!: "+error);
		}
	}

	return {
		loading,
		error,

		listQuiz,

		addQuiz,
		removeQuiz,
	};
}