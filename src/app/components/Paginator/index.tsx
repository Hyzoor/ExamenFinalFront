import "./styles.css"


const Paginator = ({ pages, page, next, prev, setPage }: {
	pages: number
	page: number,
	next: boolean,
	prev: boolean,
	setPage: (page: number) => void
}) => {

	const indexes: number[] = [0, 1, 2, page, pages - 2, pages - 1, pages];

	const pagesShortcuts = indexes.filter((x, index) => {
		indexes.indexOf(x) === index
	})

	const sortedPages = pagesShortcuts.sort((n1, n2) => n1 - n2);


	return (
		<div className="pagination-container">

			{prev &&
				<div className="arrow-container" onClick={() => setPage(page - 1)}>
					<p>{"<"}</p>
				</div>
			}


			{next &&
				<div className="arrow-container" onClick={() => setPage(page + 1)}>
					<p>{">"}</p>
				</div>
			}

			<>

				{sortedPages.map((i) => {
					<div className="shortcut" onClick={() => setPage(i)}>
						{i}
					</div>
				})}
			</>


		</div>
	)
}


export default Paginator;
