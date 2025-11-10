import arrow_circle_left from "../../../../../assets/images/arrow_circle_left.png"
import arrow_circle_right from "../../../../../assets/images/arrow_circle_right.png"
import QuizType from "./QuizType.jsx";
import UseQuiz from "../../../application/UseQuiz.js";


export default function QuizList() {
	const {listQuiz} = UseQuiz();

	return (
		<section className="sliderQuiz">
			<ul>
				{listQuiz.map((quiz) => (
					<QuizType key = {quiz.id} quiz={quiz} />
				))}
			</ul>
			<div className="paginator">
				<button type="button" className="left"><img src={arrow_circle_left} alt="arrow left"/></button>
				<button type="button" className="right"><img src={arrow_circle_right}  alt="arrow right"/></button>
			</div>
		</section>
	);
}