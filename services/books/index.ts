import axios from "axios";
import { z } from "zod";
import { ZAuthorBasics } from "../author";
import { TSuccessResponse } from "../helper";

const backendURL = process.env.BACKEND_URL;
const ZBook = z.object({
	id: z.number(),
	title: z.string(),
	summary: z.string(),
	image: z.string(),
	genera: z.string().array(),
	publication: z.string(),
	year: z.number(),
	author: ZAuthorBasics,
});
const ZBooks = ZBook.array();
export const ZBookNames = z
	.object({
		params: z.object({
			name: z.string(),
		}),
	})
	.array();

export type TBook = z.infer<typeof ZBook>;
export type TBooks = z.infer<typeof ZBooks>;
export type TBookNames = z.infer<typeof ZBookNames>;

export const fetchAllBooks = async (): Promise<TBooks> => {
	try {
		const { data: books } = await axios.get<TSuccessResponse<TBooks>>(
			`${backendURL}/api/books`
		);
		if (!books.success) throw new Error("Problem Fetching data");
		// Schema validation
		const tempValidation = ZBooks.safeParse(books.data);
		console.log("FETCH:Books:", books);
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

export const fetchAllBooksName = async (): Promise<TBookNames> => {
	try {
		const books: TBookNames = (await fetchAllBooks()).map((book) => {
			return {
				params: {
					name: book.title,
				},
			};
		});
		// Schema validation
		const tempValidation = ZBookNames.safeParse(books);
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

export const fetchBookByName = async (
	title: string | undefined
): Promise<TBook | null> => {
	try {
		if (!title) throw new Error("Error:Name field is Empty");
		const book = await axios
			.get(`${backendURL}/api/books?title=${title}`)
			.then((resp) => resp.data);
		if (!book.success) throw new Error("Problem Fetching data");
		// Schema validation
		console.log("FETCH:Books:", book);
		const tempValidation = ZBook.safeParse(book.data[0]);
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

export const fetchBookByAuthorName = async (
	authorName: string | undefined
): Promise<TBooks> => {
	try {
		if (!authorName) throw new Error("Error:Name field is Empty");
		const book = await axios
			.get(`${backendURL}/api/books?authorName=${authorName}`)
			.then((resp) => resp.data);
		if (!book.success) throw new Error("Problem Fetching data");
		// Schema validation
		console.log("FETCH:Books:", book);
		const tempValidation = ZBooks.safeParse(book.data);
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
