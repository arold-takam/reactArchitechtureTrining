import "./home.css"
import Main from "../../components/homeComp/Main.jsx";
import Up from "../../components/homeComp/Up.jsx";

export default function Home(){
	return (
        <div className="app">
            <Up />
            <Main />
        </div>
	);
}