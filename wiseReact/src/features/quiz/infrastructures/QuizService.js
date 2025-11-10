
//ANSWER SERVICE----------------------------------------------------------------------------------

const listAnswer = []; //My data structure here.

export function addAnswer(answer) {
	listAnswer.push(answer);
}

export function getListAnswers() {
	return listAnswer;
}

export function getAnswerByID(answerID){
	return listAnswer.find(answer => answer.id === answerID);
}

export function  updateAnswer(idAnswer, newAnswer) {
	const index = listAnswer.findIndex(answer => answer.id === idAnswer);
	if (index === -1) return null;

	listAnswer[index] = {
		...listAnswer[index],
		...newAnswer
	};

	return listAnswer[index];
}

export function  deleteAnswer(idAnswer) {
	const index = listAnswer.findIndex(answer => answer.id === idAnswer);
	if (index === -1) return null;

	listAnswer.splice(index, 1);

	return true;
}

//QUESTION SERVICE----------------------------------------------------------------------------------

const listQuestion = []; //My data structure here.

export function addQuestion(question) {
	listQuestion.push(question);
}

export function getListQuestions() {
	return listQuestion;
}

export function getQuestionByID(questionID){
	return listQuestion.find(question => question.id === questionID);
}

export function  updateQuestion(idQuestion, newQuestion) {
	const index = listQuestion.findIndex(question => question.id === idQuestion);
	if (index === -1) return null;

	listQuestion[index] = {
		...listQuestion[index],
		...newQuestion
	};

	return listQuestion[index];
}

export function  deleteQuestion(idQuestion) {
	const index = listQuestion.findIndex(question => question.id === idQuestion);
	if (index === -1) return null;

	listQuestion.splice(index, 1);

	return true;
}


//QUIZ SERVICE----------------------------------------------------------------------------------

const listQuiz = [];

// -------------------------------------------------------------------------------------------------------
const data = [
	{
		id: 101,
		label: "Culture Générale",
		detail: "Testez vos connaissances sur divers sujets, de la science à l'art.",
		scorePop: 8.5,
		scorePlai: 910,
		listQuestion: []
	},
	{
		id: 102,
		label: "La Seconde Guerre Mondiale",
		detail: "Un défi pour les passionnés d'histoire militaire et politique.",
		scorePop: 6.2,
		scorePlai: 455,
		listQuestion: []
	},
	{
		id: 103,
		label: "Cinéma Underground",
		detail: "Pour les cinéphiles avertis et les experts en films cultes.",
		scorePop: 3.9,
		scorePlai: 120,
		listQuestion: []
	}
];

data.map((quiz) => {
	addQuiz(quiz);
});
// -------------------------------------------------------------------------------------------------------

export function addQuiz(quiz) {
	listQuiz.push(quiz);
}


export function getListQuiz() {
	return listQuiz;
}

export function getQuizByID(quizID){
	return listQuiz.find(quiz => quiz.id === quizID);
}

export function  updateQuiz(idQuiz, newQuiz) {
	const index = listQuiz.findIndex(quiz => quiz.id === idQuiz);
	if (index === -1) return null;

	listQuiz[index] = {
		...listQuiz[index],
		...newQuiz
	};

	return listQuiz[index];
}

export function  deleteQuiz(idQuiz) {
	const index = listQuiz.findIndex(quiz => quiz.id === idQuiz);
	if (index === -1) return null;

	listQuiz.splice(index, 1);

	return true;
}

