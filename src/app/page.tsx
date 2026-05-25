'use client'

import "./page.css"
import { useEffect, useState } from "react";
import { AllCharactersQueryResponse, CharacterType, Gender, Status } from "./types/character";
import { getCharactersByFilters } from "@/api/characters";
import CharacterCard from "./components/CharacterCard";
import SearchFilter from "./components/SearchFilter";
import FiltersComponent from "./components/Filters";
import Paginator from "./components/Paginator";


const MainPage = () => {

	const [resultCharacters, setResultCharacters] = useState<AllCharactersQueryResponse | null>()
	const [page, setPage] = useState<number>(0);
	const [pages, setPages] = useState<number>(0);

	const [name, setName] = useState<string>("");
	const [finalName, setFinalName] = useState<string>("");
	
	const [statusFilter, setStatusFilter] = useState<string> ("");
	const [genderFilter, setGenderFilter] = useState<string> ("");
	


	const [error, setError] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(true);

	const fetchCharacters = async (
		name?: string,
		statusFilter?: string,
		genderFilter?: string,
		page?: number
	) => {

		setLoading(true);
		
		await getCharactersByFilters(name, statusFilter, genderFilter, page)
			.then((e) => { setResultCharacters(e); setPages(e.info.pages); setError("") })
			.catch((e) => setError(e.message))
			.finally(() => setLoading(false))
	}


	useEffect(() => {
		fetchCharacters(finalName, statusFilter, genderFilter, page);
	}, [page, finalName, statusFilter, genderFilter])


	return (
		<div className="main-container">

			{loading && <h2>Loading...</h2>}
			{error && <h3>Error: {error}</h3>}

			<h1> Personajukis de rick y morty </h1>

			<SearchFilter name={name} setName={setName} setFinalName={setFinalName} />
			
			<FiltersComponent status={statusFilter} gender={genderFilter} setGender={setGenderFilter} setStatus={setStatusFilter}/>
			
            <Paginator next={!!resultCharacters?.info.next} prev={!!resultCharacters?.info.prev} page={page} setPage={setPage} pages={pages}/>



			<div className="characters-cards-container">

				{resultCharacters && !loading && resultCharacters.results.map((e) => {
					return <CharacterCard key={e.id} id={e.id} />
				})}

			</div>

		</div>

	)
}

export default MainPage;
