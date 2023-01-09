import Head from "next/head";
import { ListItem, SearchBar } from "../../components/atoms";
import { PageLayout } from "../../components/organisms";

const BooksPage = () => {
	return (
		<>
			<Head>
				<title>Books | My Books</title>
			</Head>
			<PageLayout>
				<div className="m-5">
					<SearchBar />
					<div className="grid md:grid-cols-2 gap-4 m-10">
						<ListItem
							// key={item}
							imgSrc="/images/authors/Stan_Lee/The_Avengers.jpg"
							title="The Avengers"
							link="/books/avengers"
							description="The Avengers are a team of superheroes created by writer Stan Lee and artist Jack Kirby. They first appeared in The Avengers #1 in 1963. The Avengers are a diverse group of superheroes who join forces to protect the world from threats that no single hero could handle alone."
						/>
					</div>
				</div>
			</PageLayout>
		</>
	);
};

export default BooksPage;
