
export function Answer(answerData){
	return {
		id: answerData.id,
		label: answerData.label,
		isRight: answerData.isRight,
		isClicked: answerData.isClicked,
	};
}

export function Question(questionData){
	return {
		id: questionData.id,
		label: questionData.label,
		listAnswer: questionData.listAnswer,
		isAnswered: questionData.isAnswered,
	};
}

export function Quiz(quizData) {
	return {
		id: quizData.id,
		label: quizData.label,
		detail: quizData.detail,
		scorePop: quizData.scorePop,
		scorePlai: quizData.scorePlai,
		listQuestion: quizData.listQuestion
	};
}