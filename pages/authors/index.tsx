import Head from "next/head";
import { PageLayout } from "../../components/organisms";

const AuthorsPage = () => {
	return (
		<>
			<Head>
				<title>Authors | My Books</title>
			</Head>
			<PageLayout>
				<div className="font-xl text-gray-500 font-bold text-center">
					Authors
				</div>
			</PageLayout>
		</>
	);
};

export default AuthorsPage;
