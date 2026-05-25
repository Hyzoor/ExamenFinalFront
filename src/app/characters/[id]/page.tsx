'use client'

import { CharacterType } from "@/app/types/character";
import "./page.css"
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCharacterByID } from "@/api/characters";


const CharacterPageById = () => {

	const { id } = useParams();

	const router = useRouter();

	const [character, setCharacter] = useState<CharacterType | null>(null);
	const [error, setError] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {

		getCharacterByID(Number(id))
			.then((e) => { setCharacter(e); setError("") })
			.catch((e) => setError(e.message))
			.finally(() => setLoading(false))

	}, [id])


	return (

		<div className="character-info-container">

			{character &&
				<div className="image-info-container">
					<img src={character.image} />
					<div className="info-text-container">
						<h1> {character.name} </h1>
						<h2> {"Gender: " + character.gender} </h2>
						<h2> {"Status: " + character.status} </h2>
						<h2> {"Specie: " + character.species} </h2>
						<h2> {"ID: " + character.id} </h2>
						<h2> {"Origin: " + character.origin.name} </h2>
						<h2> {"Location: " + character.location.name} </h2>
					</div>
				</div>
			}

			<button onClick={router.back}> Tirame patras loquete</button>

			{loading && <h1>Loading...</h1>}
			{error && <h2> Error: {error} </h2>}

		</div>
	)
}

export default CharacterPageById;






