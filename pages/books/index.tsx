import { Icon } from "@iconify/react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ListItem, SearchBar } from "../../components/atoms";
import { PageLayout } from "../../components/organisms";
import { useDebounce } from "../../hooks";
import { fetchAllBooks, reFetchBookByName, TBooks } from "../../services";
import { TSuccessResponse } from "../../services/helper";

type TBooksPage = {
	books: TBooks;
};

const BooksPage = ({ books }: TBooksPage) => {
	const [booksList, setBooksList] = useState<TBooks>();
	const [searchBooks, setSearchBooks] = useState("");
	const onClear = async (e: any) => {
		setBooksList(books);
		setSearchBooks("");
	};
	const debounceSearch = useDebounce(searchBooks, 6e2);
	const { data } = useQuery<TSuccessResponse<TBooks>>(
		"Fetch_Book_" + debounceSearch,
		reFetchBookByName.bind(this, debounceSearch),
		{
			enabled: Boolean(debounceSearch),
			staleTime: 5e3,
			refetchOnMount: false,
			refetchOnWindowFocus: false,
		}
	);

	useEffect(() => {
		if (data) setBooksList(data.data);
		else setBooksList(books);
	}, [books, data]);
	return (
		<>
			<Head>
				<title>Books | My Books</title>
			</Head>
			<PageLayout isBottom={booksList && booksList?.length < 3}>
				<div className="m-5">
					<SearchBar
						setText={setSearchBooks}
						onClear={onClear}
						text={searchBooks}
					/>
					{booksList && booksList.length > 0 ? (
						<div className="grid md:grid-cols-2 gap-4 m-10">
							{booksList.map((book) => {
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
					) : (
						<div className="flex justify-center text-xl text-gray-600 font-bold">
							<div>
								<Icon icon="fxemoji:books" width={30} />
							</div>
							Books not found
						</div>
					)}
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
