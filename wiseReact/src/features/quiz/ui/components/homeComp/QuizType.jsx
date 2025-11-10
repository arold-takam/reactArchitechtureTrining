
export default function QuizType({ quiz }) {
	return (
		<li>
			<h2>{quiz.label}</h2>
			<div className="det">
				<p>{quiz.detail}</p>
				<div className="stat"><i>Popularity: <b>{quiz.scorePop}</b>/10</i></div>
				<a href="#" className="quizPage">Play</a>
			</div>
		</li>
	);
}