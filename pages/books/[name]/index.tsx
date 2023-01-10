import { Card } from "flowbite-react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "../../../components/atoms";
import { PageLayout } from "../../../components/organisms";
import { fetchBookByName, TBook } from "../../../services";

type TBookPage = {
	book: TBook | null;
};

const BookPage = ({ book }: TBookPage) => {
	return (
		<>
			<Head>
				<title>{book?.title} | My Books</title>
			</Head>
			<PageLayout>
				<div className="m-5 lg:m-20">
					<Card>
						<div className="flex justify-center">
							<Breadcrumb
								itemName={book?.title}
								category={{ name: "Books", url: "/books" }}
							/>
						</div>
						<div className="grid md:grid-cols-2 md:gap-0">
							{book?.image && (
								<div className="p-5">
									<Image
										src={book.image}
										alt={book.title}
										width={350}
										height={300}
										className="rounded-lg"
										style={{
											width: "auto",
										}}
										priority
									/>
								</div>
							)}
							<div className="mt-5 mr-10">
								<div className="grid md:grid-col-1">
									<div>
										<h3 className="text-3xl mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
											{book?.title}
										</h3>
										<p className="font-normal indent-8 text-gray-700 text-justify dark:text-gray-400 text-clip overflow-hidden">
											{book?.summary}
										</p>
									</div>
									<div className="mt-4 border-t-2 pt-2 ">
										<h3 className="mb-3 text-lg font-semibold">
											More Details
										</h3>
										<div>
											<span className="mr-2 font-bold">
												Author:
											</span>
											<Link
												href={`/authors/${book?.author.name}`}
											>
												<button className="text-sm font-semibold cursor-pointer p-1 m-1 bg-blue-600 rounded-lg text-white">
													{book?.author.name}
												</button>
											</Link>
										</div>
										<div>
											<span className="mr-2 font-bold">
												Genera:
											</span>
											<div className="mt-2">
												{book?.genera.map((item) => {
													return (
														<span
															key={item}
															className="text-sm font-semibold cursor-default p-1 m-1 bg-green-500 rounded-lg text-white"
														>
															{item}
														</span>
													);
												})}
											</div>
										</div>
										<div className="mt-2">
											<span className="mr-2 font-bold">
												Publication:
											</span>
											<span className="mr-2 font-semibold">
												{book?.publication}
											</span>
										</div>
										<div className="mt-2">
											<span className="mr-2 font-bold">
												Published year:
											</span>
											<span className="mr-2 font-semibold">
												{book?.year}
											</span>
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

export const getServerSideProps: GetServerSideProps = async ({
	params,
}: any): Promise<{ props: TBookPage }> => {
	const book = await fetchBookByName(params.name);
	return {
		props: {
			book,
		},
	};
};

export default BookPage;
