import { GetStaticProps } from "next";
import Head from "next/head";
import { ListItem, SearchBar } from "../../components/atoms";
import { PageLayout } from "../../components/organisms";
import { fetchAllAuthors, TAuthors } from "../../services";

type TAuthorPageProps = {
	authors: TAuthors;
};

const AuthorsPage = ({ authors }: TAuthorPageProps) => {
	return (
		<>
			<Head>
				<title>Authors | My Books</title>
			</Head>
			<PageLayout>
				<div className="m-5">
					<SearchBar />
					<div className="grid md:grid-cols-2 gap-4 m-10">
						{authors.map((author) => {
							return (
								<ListItem
									key={author.id}
									imgSrc={author.image}
									title={author.name}
									link={`/authors/${author.name}`}
									description={author.bio[0]}
								/>
							);
						})}
					</div>
				</div>
			</PageLayout>
		</>
	);
};

export const getStaticProps: GetStaticProps = async (): Promise<{
	props: TAuthorPageProps;
}> => {
	// Fetch All Authors and Send It on Data SO that It can be iterated
	const authors = await fetchAllAuthors();
	return {
		props: {
			authors,
		},
	};
};

export default AuthorsPage;
