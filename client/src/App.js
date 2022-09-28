import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobVacancyList from "./components/JobVacancyList";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />}>
				<Route path="" element={<JobVacancyList />} />
			</Route>
		</Routes>
	);
}

export default App;
