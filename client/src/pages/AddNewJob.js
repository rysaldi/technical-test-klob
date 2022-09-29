import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewJob } from "../store/actions/jobActions";
import Swal from "sweetalert2";

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
		Swal.fire({
			position: "top-end",
			icon: "success",
			title: "New job vacancy successfully added",
			showConfirmButton: false,
			timer: 1000,
		});
		navigate("/");
	};

	return (
		<div className="container px-5">
			<h1 className="mb-4">Buat Lowongan :</h1>

			<form onSubmit={submitHandler} className="needs-validation">
				<div className="mb-3">
					<label className="form-label">Logo Perusahaan</label>
					<input
						type="text"
						name="corporateLogo"
						className={`form-control ${!newJob.corporateLogo.length ? "is-invalid" : "is-valid"}`}
						placeholder="Ketikan Logo Perusahaan"
						value={newJob.corporateLogo}
						onChange={changeInputNewJob}
						required
					/>
					<span className="text-muted">Dalam bentuk link url</span>
					<div className="valid-feedback">Looks good!</div>
					<div id="validationServerUsernameFeedback" class="invalid-feedback">
						This input is required.
					</div>
				</div>
				<div className="mb-3">
					<label className="form-label">Nama Perusahaan</label>
					<input
						type="text"
						name="corporateName"
						className={`form-control ${!newJob.corporateName.length ? "is-invalid" : "is-valid"}`}
						placeholder="Ketikan Nama Perusahaan"
						value={newJob.corporateName}
						onChange={changeInputNewJob}
						required
					/>
					<div className="valid-feedback">Looks good!</div>
					<div id="validationServerUsernameFeedback" class="invalid-feedback">
						This input is required.
					</div>
				</div>
				<div className="mb-3">
					<label className="form-label">Nama Lowongan</label>
					<input
						type="text"
						name="positionName"
						className={`form-control ${!newJob.positionName.length ? "is-invalid" : "is-valid"}`}
						placeholder="Ketikan Nama Lowongan"
						value={newJob.positionName}
						onChange={changeInputNewJob}
						required
					/>
					<div className="valid-feedback">Looks good!</div>
					<div id="validationServerUsernameFeedback" class="invalid-feedback">
						This input is required.
					</div>
				</div>
				<div className="mb-3">
					<label className="form-label">Status Karyawan</label>
					<input
						type="text"
						name="status"
						className={`form-control ${!newJob.status.length ? "is-invalid" : "is-valid"}`}
						placeholder="Ketikan Status Karyawan"
						value={newJob.status}
						onChange={changeInputNewJob}
						required
					/>
					<div className="valid-feedback">Looks good!</div>
					<div id="validationServerUsernameFeedback" class="invalid-feedback">
						This input is required.
					</div>
				</div>
				<div className="mb-3">
					<label className="form-label">Kisaran Gaji Karyawan</label>
					<div className="row">
						<div className="col">
							<input
								type="Number"
								name="salaryFrom"
								className={`form-control ${!newJob.salaryFrom.length ? "is-invalid" : "is-valid"}`}
								placeholder="1.000.000"
								value={newJob.salaryFrom}
								onChange={changeInputNewJob}
								required
							/>
							<div className="valid-feedback">Looks good!</div>
							<div id="validationServerUsernameFeedback" class="invalid-feedback">
								This input is required.
							</div>
						</div>
						<div className="col-2 d-flex align-items-center justify-content-center">
							<label>sampai dengan</label>
						</div>
						<div className="col">
							<input
								type="Number"
								name="salaryTo"
								className={`form-control ${!newJob.salaryTo.length ? "is-invalid" : "is-valid"}`}
								placeholder="10.000.000"
								value={newJob.salaryTo}
								onChange={changeInputNewJob}
								required
							/>
							<div className="valid-feedback">Looks good!</div>
							<div id="validationServerUsernameFeedback" class="invalid-feedback">
								This input is required.
							</div>
						</div>
					</div>
				</div>
				<div className="mb-3">
					<label className="form-label">Tanggal Posting</label>
					<input
						type="date"
						name="postedDate"
						className={`form-control ${!newJob.postedDate.length ? "is-invalid" : "is-valid"}`}
						value={newJob.postedDate}
						onChange={changeInputNewJob}
						required
					/>
					<div className="valid-feedback">Looks good!</div>
					<div id="validationServerUsernameFeedback" class="invalid-feedback">
						This input is required.
					</div>
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
