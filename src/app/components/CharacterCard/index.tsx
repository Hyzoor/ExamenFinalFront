import "./styles.css"

import { getCharacterByID } from "@/api/characters";
import { CharacterType } from "@/app/types/character";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";

const CharacterCard = (params : {id: number}) => {

	const idCharacter = params.id;

	const router = useRouter();

	const [character, setCharacter] = useState<CharacterType | null>(null);
	const [error, setError] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {

		setLoading(true);
		getCharacterByID(idCharacter)
			.then((e) => { setCharacter(e); setError("") })
			.catch((e) => setError(e.message))
			.finally(() => setLoading(false))

	}, [idCharacter]);
	return (

		<div className="character-card">

			{character &&
				<>
					<div className="character-card-text-container">
						<h1>{character?.name}</h1>
						<h2>{character?.status}</h2>
						<h2>{character?.gender}</h2>
					</div >

					{character?.image && (<img src={character?.image} />)}

					<button onClick={() => router.push("characters/" + character?.id)}>
						Ver detalles
					</button>
				</>
			}

			{error && <h3>Error: {error}</h3>}
			{loading && <h2>Loading...</h2>}

		</div >
	)
}

export default CharacterCard;
