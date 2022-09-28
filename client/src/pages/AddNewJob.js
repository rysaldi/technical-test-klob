import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewJob } from "../store/actions/jobActions";

export default function AddNewJob() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [newJob, setNewJob] = useState({
		corporateLogo: "",
		corporateName: "",
		positionName: "",
		status: "",
		salaryFrom: "",
		salaryTo: "",
		postedDate: "",
		applied: "false",
	});

	const changeInputNewJob = (e) => {
		const { name, value } = e.target;
		setNewJob({
			...newJob,
			[name]: value,
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();

		dispatch(addNewJob(newJob));
		navigate("/");
	};

	return (
		<div className="container">
			<h1>Buat Lowongan :</h1>

			<form onSubmit={submitHandler}>
				<div className="mb-3">
					<label className="form-label">Logo Perusahaan</label>
					<input
						type="text"
						name="corporateLogo"
						className="form-control"
						placeholder="Ketikan Logo Perusahaan"
						value={newJob.corporateLogo}
						onChange={changeInputNewJob}
					/>
					<span className="text-muted">Dalam bentuk link url</span>
				</div>
				<div className="mb-3">
					<label className="form-label">Nama Perusahaan</label>
					<input
						type="text"
						name="corporateName"
						className="form-control"
						placeholder="Ketikan Nama Perusahaan"
						value={newJob.corporateName}
						onChange={changeInputNewJob}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Nama Lowongan</label>
					<input
						type="text"
						name="positionName"
						className="form-control"
						placeholder="Ketikan Nama Lowongan"
						value={newJob.positionName}
						onChange={changeInputNewJob}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Status Karyawan</label>
					<input
						type="text"
						name="status"
						className="form-control"
						placeholder="Ketikan Status Karyawan"
						value={newJob.status}
						onChange={changeInputNewJob}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Kisaran Gaji Karyawan</label>
					<div className="row">
						<div className="col">
							<input
								type="Number"
								name="salaryFrom"
								className="form-control"
								placeholder="1.000.000"
								value={newJob.salaryFrom}
								onChange={changeInputNewJob}
							/>
						</div>
						<div className="col-2 d-flex align-items-center justify-content-center">
							<label>sampai dengan</label>
						</div>
						<div className="col">
							<input
								type="Number"
								name="salaryTo"
								className="form-control"
								placeholder="10.000.000"
								value={newJob.salaryTo}
								onChange={changeInputNewJob}
							/>
						</div>
					</div>
				</div>
				<div className="mb-3">
					<label className="form-label">Tanggal Posting</label>
					<input
						type="date"
						name="postedDate"
						className="form-control"
						value={newJob.postedDate}
						onChange={changeInputNewJob}
					/>
				</div>
				<div>
					<button type="submit" className="btn btn-primary">
						SIMPAN
					</button>
				</div>
			</form>
		</div>
	);
}
