import { NextApiRequest, NextApiResponse } from "next";
import database from "../../data/db.json";
import { IResponse, replacePublic, responseHandler } from "../../helper";
import { authorDetails, IAuthor } from "./authors";

interface IBookDetails {
	bookId?: number;
	authorName?: string;
	title?: string;
	authorId?: number;
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
					image: replacePublic(
						items.image,
						`http://${process.env.BASE_URL}/`
					),
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
				return newArr;
			})
	);
};

export const bookDetails = ({
	bookId,
	authorName,
	authorId,
	title,
}: IBookDetails = {}): IBook[] => {
	const books = getAllBooks();
	if (bookId) {
		return books.filter((item) => item.id === bookId);
	}
	if (authorName) {
		return books.filter((item) => item.author.name === authorName);
	}
	if (title) {
		return books.filter((item) => item.title === title);
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
	if (req.query.bookId) {
		resp.status(200).json(
			responseHandler(bookDetails({ bookId: Number(req.query.bookId) }))
		);
		return;
	}
	if (req.query.authorName) {
		resp.status(200).json(
			responseHandler(
				bookDetails({ authorName: `${req.query.authorName}` })
			)
		);
		return;
	}
	if (req.query.title) {
		resp.status(200).json(
			responseHandler(bookDetails({ title: `${req.query.title}` }))
		);
		return;
	}
	if (req.query.authorId) {
		resp.status(200).json(
			responseHandler(
				bookDetails({ authorId: Number(req.query.authorId) })
			)
		);
		return;
	}
	resp.status(200).json(responseHandler(bookDetails()));
}
