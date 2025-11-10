import add_circle from "../../../../../assets/images/add_circle.png"
import QuizList from "./QuizList.jsx";
import {Link} from "react-router-dom";

export default function Main() {
	return (
		<main>
			<div className="title">
				<h1>Our quiz</h1>
				<Link to="/formQuiz" className="add">
					<p>ADD</p>
					<img src={add_circle} alt="add icon"/>
				</Link>
			</div>
			<QuizList />
		</main>
	);
}