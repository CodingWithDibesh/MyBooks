import { GetServerSideProps } from "next";
import Head from "next/head";
import { ListItem, SearchBar } from "../../components/atoms";
import { PageLayout } from "../../components/organisms";
import { fetchAllBooks, TBooks } from "../../services/books";

type TBooksPage = {
	books: TBooks;
};

const BooksPage = ({ books }: TBooksPage) => {
	return (
		<>
			<Head>
				<title>Books | My Books</title>
			</Head>
			<PageLayout>
				<div className="m-5">
					<SearchBar />
					<div className="grid md:grid-cols-2 gap-4 m-10">
						{books.map((book) => {
							return (
								<ListItem
									key={book.id}
									imgSrc={book.image}
									title={book.title}
									link={`/books/${book.title}`}
									description={book.summary}
								/>
							);
						})}
					</div>
				</div>
			</PageLayout>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (): Promise<{
	props: { books: TBooks };
}> => {
	const books = await fetchAllBooks();
	return {
		props: {
			books,
		},
	};
};

export default BooksPage;
