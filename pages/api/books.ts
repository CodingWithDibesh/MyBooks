import { NextApiRequest, NextApiResponse } from "next";
import database from "../../data/db.json";
import {
	IResponse,
	isObjEmpty,
	replacePublic,
	responseHandler,
} from "../../helper";
import { authorDetails, IAuthor } from "./authors";

interface IBookDetails {
	bookId?: number;
	authorName?: string;
	title?: string;
	authorId?: number;
	matchBook?: boolean;
}

interface IBook {
	author: IAuthor;
	image: string;
	id: number;
	title: string;
	summary: string;
	genera: string[];
	publication: string;
	year: number;
}

const getAllBooks = (): IBook[] => {
	return (
		database.books
			// Replace Image URL
			.map((items) => {
				return {
					...items,
					image: replacePublic(items.image, `/`),
				};
			})
			// Fetch all Author details and bind with book
			.map((item) => {
				const newArr = {
					...item,
					author: authorDetails({ authorId: item.authorId })[0],
				};
				newArr;
				// @ts-ignore
				delete newArr.authorId;
				// @ts-ignore
				delete newArr.author.authorsBooks;
				return newArr;
			})
	);
};

export const bookDetails = ({
	bookId,
	authorName,
	authorId,
	title,
	matchBook = false,
}: IBookDetails = {}): IBook[] | IBook => {
	const books = getAllBooks();
	if (bookId) {
		return books.filter((item) => item.id === bookId);
	}
	if (authorName) {
		return books.filter((item) =>
			item.author.name.toLowerCase().includes(authorName.toLowerCase())
		);
	}
	if (title) {
		if (matchBook) return books.filter((item) => item.title === title)[0];
		else {
			return books.filter((item) =>
				item.title.toLowerCase().includes(title.toLowerCase())
			);
		}
	}
	if (authorId) {
		return books.filter((item) => item.author.id === authorId);
	}
	return books;
};

export default function handler(
	req: NextApiRequest,
	resp: NextApiResponse<IResponse<IBook>>
) {
	console.log(req.query);

	if (!isObjEmpty(req.query)) {
		if (req.query.bookId) {
			resp.status(200).json(
				responseHandler(
					bookDetails({ bookId: Number(req.query.bookId) })
				)
			);
			return;
		} else if (req.query.authorName) {
			resp.status(200).json(
				responseHandler(
					bookDetails({ authorName: `${req.query.authorName}` })
				)
			);
			return;
		} else if (req.query.title) {
			if (req.query.match)
				resp.status(200).json(
					responseHandler(
						bookDetails({
							title: `${req.query.title}`,
							matchBook: true,
						})
					)
				);
			else
				resp.status(200).json(
					responseHandler(
						bookDetails({ title: `${req.query.title}` })
					)
				);
			return;
		} else if (req.query.authorId) {
			resp.status(200).json(
				responseHandler(
					bookDetails({ authorId: Number(req.query.authorId) })
				)
			);
			return;
		} else resp.status(200).json(responseHandler([]));
	} else resp.status(200).json(responseHandler(bookDetails()));
}
