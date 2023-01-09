import { Card } from "flowbite-react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "../../../components/atoms";
import { PageLayout } from "../../../components/organisms";
import {
	fetchAllAuthorsName,
	fetchAuthorByName,
	TAuthor,
} from "../../../services";

type TAuthorPage = {
	author: TAuthor | null;
};

const AuthorPage = ({ author }: TAuthorPage) => {
	console.log(author);

	return (
		<>
			<Head>
				<title>{author?.name} | My Books</title>
			</Head>
			<PageLayout>
				<div className="m-5 lg:m-20">
					<Card>
						<div className="flex justify-center">
							<Breadcrumb
								itemName={author?.name}
								category={{ name: "Authors", url: "/authors" }}
							/>
						</div>
						<div className="grid md:grid-cols-2 md:gap-0">
							{author?.image && (
								<div className="p-5">
									<Image
										src={author.image}
										alt={author.name}
										width={400}
										height={200}
										className="rounded-lg"
									/>
								</div>
							)}
							<div className="mt-5 mr-10">
								<div className="grid md:grid-col-1">
									<div>
										<h3 className="text-3xl mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
											{author?.name}
										</h3>
										<p className="font-normal indent-8 text-gray-700 text-justify dark:text-gray-400 text-clip overflow-hidden">
											{author?.bio[0]}
										</p>
										{author?.bio[1] && (
											<p className="font-normal text-gray-700 text-justify dark:text-gray-400 text-clip overflow-hidden">
												{author?.bio[1]}
											</p>
										)}
									</div>
									<div className="mt-2 hidden md:block">
										<h3 className="mb-3 text-md font-semibold">
											Best Sellers
										</h3>
										{author?.bestSeller.map((item) => {
											return (
												<span
													key={item}
													className="text-sm font-semibold cursor-default p-2 m-1 bg-blue-600 rounded-lg text-white"
												>
													{item}
												</span>
											);
										})}
									</div>
									<div className="w-full mt-2">
										<h3 className="mb-3 text-md font-semibold">
											Books from same author
										</h3>
										<div className="md:mt-4 grid grid-flow-col overflow-y-auto">
											{author?.authorsBooks.map(
												(item) => {
													return (
														<Link
															href={`/books/${item.title}`}
															key={item.id}
														>
															<Image
																src={item.image}
																alt={item.title}
																className="m-2"
																width={100}
																height={100}
															/>
														</Link>
													);
												}
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</Card>
				</div>
			</PageLayout>
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	//  This Fetches Details from the Server and Maps to dynamic route
	// thus dynamic route param and paths prarms needs to be same
	const paths = await fetchAllAuthorsName();
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
	const author = await fetchAuthorByName(params.name);
	return {
		props: {
			author,
		},
	};
};

export default AuthorPage;
