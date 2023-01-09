import { Card } from "flowbite-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "../../../components/atoms";
import { PageLayout } from "../../../components/organisms";

const BookPage = () => {
	return (
		<>
			<Head>
				<title>Rich Dad Poor Dad | My Books</title>
			</Head>
			<PageLayout>
				<div className="m-5 lg:m-20">
					<Card>
						<div className="flex justify-center">
							<Breadcrumb
								itemName={"Rich Dad Poor Dad"}
								category={{ name: "Books", url: "/books" }}
							/>
						</div>
						<div className="grid md:grid-cols-2 md:gap-0">
							<div className="p-5">
								<Image
									src="/images/authors/Robert_T_Kiyosaki/Rich-Dad-Poor-Dad.jpg"
									alt="Rich-Dad-Poor-Dad"
									width={350}
									height={300}
									className="rounded-lg"
								/>
							</div>
							<div className="mt-5 mr-10">
								<div className="grid md:grid-col-1">
									<div>
										<h3 className="text-3xl mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
											Rich Dad Poor Dad
										</h3>
										<p className="font-normal indent-8 text-gray-700 text-justify dark:text-gray-400 text-clip overflow-hidden">
											Rich Dad Poor Dad is a personal
											finance book that tells the story of
											the two fathers: his biological
											father, who was highly educated but
											financially unsuccessful, and his
											father, who was less educated but
											financially successful. Through this
											comparison, Kiyosaki discusses the
											importance of financial education
											and the role it plays in building
											wealth. The book has become a
											bestseller and has been translated
											into multiple languages.
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
											<Link href="/">
												<button className="text-sm font-semibold cursor-pointer p-1 m-1 bg-blue-600 rounded-lg text-white">
													Robert T. Kiyosaki
												</button>
											</Link>
										</div>
										<div>
											<span className="mr-2 font-bold">
												Genera:
											</span>
											<div className="mt-2">
												{[1, 2].map((item) => {
													return (
														<span
															key={item}
															className="text-sm font-semibold p-1 m-1 bg-green-500 rounded-lg text-white"
														>
															Robert T. Kiyosaki
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
												Warner Books
											</span>
										</div>
										<div className="mt-2">
											<span className="mr-2 font-bold">
												Published year:
											</span>
											<span className="mr-2 font-semibold">
												1997
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

export default BookPage;
