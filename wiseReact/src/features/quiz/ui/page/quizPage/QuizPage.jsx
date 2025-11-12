import {Header} from "../../components/general/Header.jsx";
import {Link, useParams} from "react-router-dom";
import UseQuiz from "../../../application/UseQuiz.js";
import './quizPage.css';

export default function QuizPage() {
    const {quizID} = useParams();
    const {getQuizByID} = UseQuiz();

    const quiz = getQuizByID(quizID);
    if (!quiz) {
        return <h1>Quiz non trouvé ou en chargement...</h1>;
    }

    return (
        <div className="quizPage">
            <Header />
            <div className="up">
                <h1>{quiz.label}</h1>
                <h2>Score: {quiz.scorePlai} / 10</h2>
            </div>
            <section className="all">
                <div className="quizOnboarding"> Here will be the onboarding !</div>
            </section>
            {
                (quiz.listQuestion.length === 0) ?
                <div className= "questionList">
                    <h2>There is no question now</h2>
                    <Link to={`/formAddQuestion/${quiz.id}`} className="addQuest">Add new question</Link>
                </div>
                    :
                <div className="questionList">
                    <div className="tit">
                        <h2>Question</h2>
                        <b>UPDATE</b>
                    </div>
                    <form className="takingQuestion">
                        <ul className="listQuest">
                            <li className="quest">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aperiam at beatae commodi error in inventore obcaecati officia sunt suscipit!</p>
                                <ul className="listAnswer">
                                    <li>
                                        <input type="radio" name="answerGroup1" className="checker"></input>
                                        <div className="answer">Yo, from doloje !</div>
                                    </li>
                                    <li>
                                        <input type="radio" name="answerGroup1" className="checker"></input>
                                        <div className="answer">Yo, from doloje !</div>
                                    </li>
                                    <li>
                                        <input type="radio" name="answerGroup1" className="checker"></input>
                                        <div className="answer">Yo, from doloje !</div>
                                    </li>
                                </ul>
                            </li>
                            <li className="quest">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aperiam at beatae commodi error in inventore obcaecati officia sunt suscipit!</p>
                                <ul className="listAnswer">
                                    <li>
                                        <input type="radio" name="answerGroup2" className="checker"></input>
                                        <div className="answer">Yo, from doloje !</div>
                                    </li>
                                    <li>
                                        <input type="radio" name="answerGroup2" className="checker"></input>
                                        <div className="answer">Yo, from doloje !</div>
                                    </li>
                                    <li>
                                        <input type="radio" name="answerGroup2" className="checker"></input>
                                        <div className="answer">Yo, from doloje !</div>
                                    </li>
                                </ul>
                            </li>
                            <li className="quest">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aperiam at beatae commodi error in inventore obcaecati officia sunt suscipit!</p>
                                <ul className="listAnswer">
                                    <li>
                                        <input type="radio" name="answerGroup3" className="checker"></input>
                                        <div className="answer">Yo, from doloje !</div>
                                    </li>
                                    <li>
                                        <input type="radio" name="answerGroup3" className="checker"></input>
                                        <div className="answer">Yo, from doloje !</div>
                                    </li>
                                    <li>
                                        <input type="radio" name="answerGroup3" className="checker"></input>
                                        <div className="answer">Yo, from doloje !</div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="ctaQuestion">
                            <button type="submit" className="send">REPONDRE</button>
                            <p>OU</p>
                            <button type="reset" className="clear">EFFACER</button>
                        </div>
                    </form>
                </div>
            }
        </div>
    );
}