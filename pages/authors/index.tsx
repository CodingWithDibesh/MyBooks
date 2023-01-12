import { Icon } from "@iconify/react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import {
	dehydrate,
	DehydratedState,
	QueryClient,
	useQuery,
	UseQueryResult,
} from "react-query";
import { ListItem, SearchBar } from "../../components/atoms";
import { PageLayout } from "../../components/organisms";
import { useDebounce } from "../../hooks";
import {
	fetchAuthors,
	rqAuthorByName,
	TAuthor,
	TAuthors,
} from "../../services";
import { TSuccessResponse } from "../../services/helper";

const AuthorsPage = () => {
	// Caching Data using Hydration Method Using ReactQuery
	const authorRq: UseQueryResult<
		TSuccessResponse<TAuthors>,
		Error
	> = useQuery<TSuccessResponse<TAuthors>, Error>(
		"AllAuthors",
		fetchAuthors,
		{
			staleTime: 5e5,
			refetchOnMount: false,
			refetchOnWindowFocus: false,
		}
	);

	const [authorsList, setAuthorsList] = useState<TAuthors>();
	const [searchAuthor, setSearchAuthor] = useState("");
	const onClear = async (e: any) => {
		setAuthorsList(authorRq.data?.data);
		setSearchAuthor("");
	};
	const debounceSearch = useDebounce(searchAuthor, 6e2);
	const { data } = useQuery<TSuccessResponse<TAuthors>>(
		"Fetch_Author_" + debounceSearch,
		rqAuthorByName.bind(this, debounceSearch),
		{
			enabled: Boolean(debounceSearch),
			staleTime: 5e5,
			refetchOnMount: false,
			refetchOnWindowFocus: false,
		}
	);

	useEffect(() => {
		if (data) setAuthorsList(data.data);
		else setAuthorsList(authorRq.data?.data);
	}, [authorRq.data, data]);

	return (
		<>
			<Head>
				<title>Authors | My Books</title>
				<meta
					property="og:url"
					content={`https://mybooks-itsubedibesh.vercel.app/authors`}
				/>
				<meta
					name="description"
					content="Know your favorite authors and their stories, you are just a click away from their magnificent stories."
				/>

				<meta
					property="og:description"
					content="Know your favorite authors and their stories, you are just a click away from their magnificent stories."
				/>
				<meta name="keywords" content={"Authors, Books, Info"} />
				<meta
					property="og:image"
					content={`https://mybooks-itsubedibesh.vercel.app/images/authors/Stan_Lee/Stan_Lee.jpeg`}
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:image"
					content={`https://mybooks-itsubedibesh.vercel.app/images/authors/Stan_Lee/Stan_Lee.jpeg`}
				/>
			</Head>
			<PageLayout isBottom={authorsList && authorsList?.length < 3}>
				<div className="m-5">
					<SearchBar
						onClear={onClear}
						text={searchAuthor}
						setText={setSearchAuthor}
					/>
					{authorsList && authorsList.length > 0 ? (
						<div className="grid md:grid-cols-2 gap-4 m-10">
							{authorsList.map((author: TAuthor) => {
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
					) : (
						<div className="flex justify-center text-xl text-gray-600 font-bold">
							<div>
								<Icon
									icon="material-symbols:note-alt-outline"
									width={30}
								/>
							</div>
							Authors not found
						</div>
					)}
				</div>
			</PageLayout>
		</>
	);
};

// export const getStaticProps: GetStaticProps = async (): Promise<{
// 	props: TAuthorPageProps;
// }> => {
// 	// Fetch All Authors and Send It on Data SO that It can be iterated
// 	const authors = await fetchAllAuthors();
// 	return {
// 		props: {
// 			authors,
// 		},
// 	};
// };

export const getServerSideProps: GetServerSideProps = async (): Promise<{
	props: { dehydratedState: DehydratedState };
}> => {
	// Fetch All Authors and Send It on Data SO that It can be iterated
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery("AllAuthors", fetchAuthors);
	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

export default AuthorsPage;
