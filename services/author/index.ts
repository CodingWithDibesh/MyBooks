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
});
const ZAuthors = ZAuthor.array();

export type TAuthors = z.infer<typeof ZAuthors>;
export type TAuthor = z.infer<typeof ZAuthor>;

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
