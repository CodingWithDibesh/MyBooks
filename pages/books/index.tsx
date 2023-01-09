import Head from "next/head";
import { PageLayout } from "../../components/organisms";

const BooksPage = () => {
	return (
		<>
			<Head>
				<title>Books | My Books</title>
			</Head>
			<PageLayout>
				<div className="font-xl text-gray-500 font-bold text-center">
					Books
				</div>
			</PageLayout>
		</>
	);
};

export default BooksPage;
