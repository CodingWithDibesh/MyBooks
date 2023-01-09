import Head from "next/head";
import { PageLayout } from "../../../components/organisms";

const AuthorPage = () => {
	return (
		<>
			<Head>
				<title>Robert T. Kiyosaki | My Books</title>
			</Head>
			<PageLayout>
				<div className="font-xl text-gray-500 font-bold text-center">
					Robert T. Kiyosaki
				</div>
			</PageLayout>
		</>
	);
};

export default AuthorPage;
