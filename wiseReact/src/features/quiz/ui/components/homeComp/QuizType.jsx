import {Link} from "react-router-dom";

export default function QuizType({ quiz }) {
	return (
		<li>
			<h2>{quiz.label}</h2>
			<div className="det">
				<p>{quiz.detail}</p>
				<div className="stat"><i>Popularity: <b>{quiz.scorePop}</b>/10</i></div>
				<Link to={`/quizPage/${quiz.id}`} className="quizCta">Play</Link>
			</div>
		</li>
	);
}