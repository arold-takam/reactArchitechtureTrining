import './App.css'
import Home from "./features/quiz/ui/page/home/Home.jsx";
import {Route, Routes} from "react-router-dom";
import FormQuiz from "./features/quiz/ui/page/formQuiz/FormQuiz.jsx";
import QuizPage from "./features/quiz/ui/page/quizPage/QuizPage.jsx";
import FormAddQuestion from "./features/quiz/ui/page/formQuestion/FormAddQuestion.jsx";

function App() {

	return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formQuiz" element={<FormQuiz />} />
            <Route path="/quizPage/:quizID" element={<QuizPage />} />
            <Route path="/formAddQuestion/:quizID" element={<FormAddQuestion />} />
        </Routes>
	)
}

export default App
