import { Gender, Status } from "@/app/types/character";
import { api } from "./axios";


export const getCharacterByID = async (id: number) => {
	const response = await api.get(`/character/${id}`)
	return response.data;
}


export const getCharactersByFilters = async (

	name?: string,
	status?: string,
	gender?: string,
	page?: number

) => {


	let query = "/character/?";

	const nameFilter = `&name=${name}`;
	const statusFilter = `&status=${status}`;
	const genderFilter = `&gender=${gender}`;
	const pageFilter = `&page=${page}`;


	if (nameFilter) {
		query += nameFilter;
	}

	if (statusFilter) {
		query += statusFilter;
	}

	if (genderFilter) {
		query += genderFilter;
	}

	if (pageFilter) {
		query += pageFilter;
	}

	const response = await api.get(query)

	return response.data;

}
