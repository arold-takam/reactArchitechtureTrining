import add_circle from "../../../../../assets/images/add_circle.png"
import QuizList from "./QuizList.jsx";

export default function Main() {
	return (
		<main>
			<div className="title">
				<h1>Our quiz</h1>
				<a href="#" className="add">
					<p>ADD</p>
					<img src={add_circle} alt="add icon"/>
				</a>
			</div>
			<QuizList />
		</main>
	);
}