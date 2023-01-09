import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../data/db.json";
import { replacePublic } from "../../helper";

type Data = {
	id: number;
	name: string;
	books: number;
	bestSelling: string[];
	image: string;
	bio: string[];
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data[]>
) {
	console.log(req.query);
	const dataPreparation = database["authors:"].map((items) => {
		return {
			...items,
			image: replacePublic(
				items.image,
				`http://${process.env.BASE_URL}/`
			),
		};
	});
	if (req.query.id) {
		res.status(200).json(
			dataPreparation.filter((item) => {
				return item.id === Number(req.query.id);
			})
		);
		return;
	} else if (req.query.name) {
		res.status(200).json(
			dataPreparation.filter((item) => {
				return item.name === req.query.name;
			})
		);
		return;
	}
	res.status(200).json(dataPreparation);
}
