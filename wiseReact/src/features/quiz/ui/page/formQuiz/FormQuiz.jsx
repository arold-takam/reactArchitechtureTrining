import '../formQuiz/formQuiz.css';
import {Header} from "../../components/general/Header.jsx";
import {useState} from "react";
import UseQuiz from "../../../application/UseQuiz.js";

export default function FormQuiz(){
    const [label, setLabel] = useState("");
    const [detail, setDetail] = useState("");

    const {addQuiz} = UseQuiz();

    function handleSubmit(e) {
        e.preventDefault();

        const newQuiz = {
            id: Date.now(),
            label: label,
            detail: detail,
            scorePop: 0,
            scorePlai: 0,
            listQuestion: []
        };

        addQuiz(newQuiz);

        console.log(newQuiz);

        setLabel("");
        setDetail("");
    }

    return (
        <div className="formQuiz">
            <Header/>
            <h1>Add New Quiz Easily Here!</h1>
            <form className="manageQuiz" onSubmit={handleSubmit}>
                <div className="put">
                    <label htmlFor="label">Enter your quiz label here</label>
                    <input type="text" name="label" value={label}  id="label" className="label" required onChange={(e)=>setLabel(e.target.value)} />
                </div>
                <div className="det">
                    <label htmlFor="detail">Enter your quiz details here</label>
                    <textarea name="detail" value={detail} id="detail" className="detail" onChange={(e)=>setDetail(e.target.value)}></textarea>
                </div>
                <input type="submit" value="Add It" className="make"/>
            </form>
        </div>
    );
}