import axios from "axios";
import { z } from "zod";
import { TSuccessResponse } from "../helper";

const backendURL = process.env.BACKEND_URL;
const ZAuthor = z.object({
	id: z.number(),
	name: z.string(),
	books: z.number(),
	bestSeller: z.string().array(),
	image: z.string(),
	bio: z.string().array(),
	authorsBooks: z
		.object({
			id: z.number(),
			title: z.string(),
			image: z.string(),
		})
		.array(),
});
const ZAuthors = ZAuthor.array();
const ZAuthorNames = z
	.object({
		params: z.object({
			name: z.string(),
		}),
	})
	.array();

export type TAuthors = z.infer<typeof ZAuthors>;
export type TAuthor = z.infer<typeof ZAuthor>;
export type TAuthorNames = z.infer<typeof ZAuthorNames>;

export const fetchAllAuthors = async (): Promise<TAuthors> => {
	try {
		const authors: TSuccessResponse<TAuthors> = await axios
			.get(`${backendURL}/api/authors`)
			.then((resp) => resp.data);
		if (!authors.success) throw new Error("Problem Fetching data");
		// Schema validation
		const tempValidation = ZAuthors.safeParse(authors.data);
		if (tempValidation.success) {
			return tempValidation.data;
		}
		return [];
	} catch (error) {
		// Do Sanity Checks if required
		if (axios.isAxiosError(error))
			console.error(`Error Picked from:`, error.message);
		else {
			console.error(error);
		}
		return [];
	}
};

export const fetchAllAuthorsName = async (): Promise<TAuthorNames> => {
	try {
		const authors: TAuthorNames = (await fetchAllAuthors()).map(
			(author) => {
				return {
					params: {
						name: author.name,
					},
				};
			}
		);
		// Schema validation
		const tempValidation = ZAuthorNames.safeParse(authors);
		if (tempValidation.success) {
			return tempValidation.data;
		}
		return [];
	} catch (error) {
		// Do Sanity Checks if required
		if (axios.isAxiosError(error))
			console.error(`Error Picked from:`, error.message);
		else {
			console.error(error);
		}
		return [];
	}
};

export const fetchAuthorByName = async (
	name: string | undefined
): Promise<TAuthor | null> => {
	try {
		if (!name) throw new Error("Error:Name field is Empty");
		const author = await axios
			.get(`${backendURL}/api/authors?name=${name}`)
			.then((resp) => resp.data);
		if (!author.success) throw new Error("Problem Fetching data");
		// Schema validation
		const tempValidation = ZAuthor.safeParse(author.data[0]);
		if (tempValidation.success) {
			return tempValidation.data;
		}
		return null;
	} catch (error) {
		// Do Sanity Checks if required
		if (axios.isAxiosError(error))
			console.error(`Error Picked from:`, error.message);
		else {
			console.error(error);
		}
		return null;
	}
};
