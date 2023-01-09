import Head from "next/head";
import { PageLayout } from "../../../components/organisms";

const BookPage = () => {
	return (
		<>
			<Head>
				<title>Rich Dad Poor Dad | My Books</title>
			</Head>
			<PageLayout>
				<div className="font-xl text-gray-500 font-bold text-center">
					Rich Dad Poor Dad - Robert T. Kiyosaki
				</div>
			</PageLayout>
		</>
	);
};

export default BookPage;
