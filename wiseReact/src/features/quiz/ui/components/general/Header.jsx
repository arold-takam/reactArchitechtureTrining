import notif from "../../../../../assets/images/apps.png";
import trophy from "../../../../../assets/images/trophy.png";

export function Header() {
	return (
		<header>
			<button type="button" className="menuOpen"><img src={notif} alt="app icon"/>
			</button>
			<a href="/wiseReact/public" className="logo">Wise</a>
			<a href="#" className="cup"><img src={trophy} alt="trophy icon"/></a>
		</header>
	);
}