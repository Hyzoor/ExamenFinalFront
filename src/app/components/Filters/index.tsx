import "./styles.css"


const FiltersComponent = ({ status, gender, setStatus, setGender }: {

	status: string,
	gender: string,
	setGender: (name: string) => void,
	setStatus: (status: string) => void

}) => {


	const statusOptions = ["Alive", "Dead", "unknown"];
	const genderOptions = ["Male", "Female", "unknown"];

	const indexGender = genderOptions.indexOf(gender);
	const indexStatus = statusOptions.indexOf(status);
	


	return (

		<div className="filters-container">

			<button onClick={() => {
				
				if (indexGender + 1 >= genderOptions.length) {
					setGender("");
				}
				else {
					setGender(genderOptions[(indexGender + 1)])
				}
			}}>
				{gender ? gender : "No Gender Filter"}
			</button>

			<button onClick={() => {

				if (indexStatus + 1 >= statusOptions.length) {
					setStatus("");
				}
				else {
					setStatus(statusOptions[(indexStatus + 1)])
				}
			}}>
				{status ? status: "No Status Filter"}
			</button>

		</div>
	)
}

export default FiltersComponent;



