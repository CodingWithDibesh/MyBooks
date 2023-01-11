import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../data/db.json";
import {
	IResponse,
	isObjEmpty,
	replacePublic,
	responseHandler,
} from "../../helper";

export interface IAuthor {
	id: number;
	name: string;
	books: number;
	bestSeller: string[];
	image: string;
	bio: string[];
	authorsBooks?: {
		id: number;
		title: string;
		image: string;
	}[];
}

interface IAuthorConfig {
	authorId?: number;
	authorName?: string;
}

export const authorDetails = ({
	authorId,
	authorName,
}: IAuthorConfig = {}): IAuthor[] => {
	const dataPreparation = database["authors:"].map((items) => {
		return {
			...items,
			image: replacePublic(items.image, `/`),
		};
	});
	if (authorId) {
		return dataPreparation.filter((item) => {
			return item.id === authorId;
		});
	}
	if (authorName) {
		return dataPreparation.filter((item) => {
			return item.name.toLowerCase().includes(authorName.toLowerCase());
		});
	}
	return dataPreparation;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IResponse<IAuthor>>
) {
	if (!isObjEmpty(req.query)) {
		if (req.query.id) {
			res.status(200).json(
				responseHandler(
					authorDetails({ authorId: Number(req.query.id) })
				)
			);
			return;
		} else if (req.query.name) {
			res.status(200).json(
				responseHandler(
					authorDetails({ authorName: `${req.query.name}` })
				)
			);
			return;
		} else res.status(200).json(responseHandler([]));
	} else res.status(200).json(responseHandler(authorDetails()));
}
