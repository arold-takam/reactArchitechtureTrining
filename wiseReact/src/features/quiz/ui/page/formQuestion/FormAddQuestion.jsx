import {useParams} from "react-router-dom";
import UseQuiz from "../../../application/UseQuiz.js";
import {Header} from "../../components/general/Header.jsx";

export default function FormAddQuestion(){
    const {quizID} = useParams();

    const {getQuizByID} = UseQuiz();

    const quiz = getQuizByID(quizID);
    if (!quiz) {
        return <h1>Quiz non trouvé ou en chargement...</h1>;
    }

    return (
        <div className="formAddQuestion">
            <Header />
            <h1>Add new question for: {quiz.label}</h1>
            <form className="addQuest">
                <input type="text" name="title" id="title" className="title" placeholder="Enter your question label here"/>
                <input type="text" name="answer" id="answer" className="answer" placeholder="Enter the answer here"/>
                <button type="submit" className="add">Add It</button>
            </form>
        </div>
    );
}