import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";

export default function HomePage() {
	return (
		<>
			<NavbarComponent />
      <div className="container">
			<Outlet />
      </div>
		</>
	);
}
