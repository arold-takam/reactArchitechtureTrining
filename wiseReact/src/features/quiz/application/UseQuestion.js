import * as api from "../infrastructures/QuizService.js";
import {useEffect, useState} from "react";

export default function UseQuestion(){
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

//ANSWER Hook----------------------------------------------------------------------------------
	const [listQuestions, setListQuestions] = useState([]);

	useEffect(() => {
		try {
			setListQuestions(api.getListQuestions());
		}catch(err){
			setError("Error while adding listQuestions: "+err.message);
		}finally{
			setLoading(false);
		}
	}, []);

	const addQuestion = (question) =>{
		try {
			api.addQuestion(question);
			setListQuestions(api.getListQuestions());
		}catch(err){
			setError("Error while adding listQuestions: "+err.message);
		}
	}

	const removeQuestion = (questionID) =>{
		try {
			api.deleteQuestion(questionID);
			setListQuestions(api.getListQuestions());
		}catch(err){
			setError("Error while deleting listQuestions: "+err.message);
		}
	}

	return{
		loading,
		error,

		listQuestions,

		addQuestion,
		removeQuestion,
	}
}