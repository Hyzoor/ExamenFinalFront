import "./styles.css"

const SearchFilter = ({name, setName, setFinalName}: {

	name: string,
	setName: (name: string) => void,
	setFinalName: (name: string) => void

}) => {


	return (

		<div className="search-container">
			<input
				value={name}
				onChange={(e) => {
					setName(e.target.value);
				}}
				onKeyDown={(e) => { if (e.key == "Enter") setFinalName(name) }}
			/>
		</div>
	)
}

export default SearchFilter;



