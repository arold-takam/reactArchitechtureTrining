import '../general/style/header.css'
import notif from "../../../../../assets/images/apps.png";
import trophy from "../../../../../assets/images/trophy.png";
import {Link} from "react-router-dom";

export function Header() {
	return (
		<header>
			<button type="button" className="menuOpen"><img src={notif} alt="app icon"/>
			</button>
            <Link to="/" className="logo">Wise</Link>
            <a href="#" className="cup"><img src={trophy} alt="trophy icon"/></a>
        </header>
    );
}