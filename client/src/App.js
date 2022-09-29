import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobVacancyList from "./components/JobVacancyList";
import AddNewJob from "./pages/AddNewJob";
import DetailJobPage from "./pages/DetailJobPage";
import AppliedJobPage from "./pages/AppliedJobPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />}>
				<Route path="" element={<JobVacancyList />} />
				<Route path="buat-lowongan-pekerjaan" element={<AddNewJob />} />
				<Route path="detail-lowongan-perkerjaan/:jobVacancyCode" element={<DetailJobPage/>} />
				<Route path="lamaran-terkirim" element={<AppliedJobPage/>} />
			</Route>
		</Routes>
	);
}

export default App;
