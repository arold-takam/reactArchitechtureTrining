import './App.css'
import Home from "./features/quiz/ui/page/home/Home.jsx";
import {Route, Routes} from "react-router-dom";
import FormQuiz from "./features/quiz/ui/page/formQuiz/FormQuiz.jsx";

function App() {

	return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formQuiz" element={<FormQuiz />} />
        </Routes>
	)
}

export default App
