import { Icon } from "@iconify/react";
import { Button, Card } from "flowbite-react";
import Link from "next/link";
import { lenSlice } from "../../../helper";

interface IListItem {
	title: string;
	imgSrc: string;
	description: string;
	link: string;
}

export const ListItem = ({ title, imgSrc, description, link }: IListItem) => {
	return (
		<>
			<Card imgSrc={imgSrc} horizontal={true} className="!max-w-[100%]">
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{title}
				</h5>
				<p className="font-normal text-gray-700 dark:text-gray-400 text-clip overflow-hidden">
					{lenSlice(description)}
				</p>
				<div className="inline-flex justify-center">
					<Link href={link}>
						<Button color="gray" className="m-2">
							Read More
							<Icon
								icon="la:readme"
								className="ml-2"
								width={20}
							/>
						</Button>
					</Link>
				</div>
			</Card>
		</>
	);
};
