import { Icon } from "@iconify/react";
import { Button, Card, Carousel, Rating } from "flowbite-react";
import Head from "next/head";
import Link from "next/link";
import { PageLayout } from "../../components/organisms";
import { lenSlice } from "../../helper";

const AuthorsPage = () => {
	return (
		<>
			<Head>
				<title>Authors | My Books</title>
			</Head>
			<PageLayout>
				<div className="m-5">
					<div className="m-7">
						<form className="flex items-center">
							<label htmlFor="simple-search" className="sr-only">
								Search Authors
							</label>
							<div className="w-full">
								<input
									type="text"
									id="simple-search"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Search"
									required
								/>
							</div>
							<button
								type="submit"
								className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								<Icon
									icon="ic:round-search"
									width={30}
									className="font-bold w-5 h-5"
								/>
								<span className="sr-only">Search</span>
							</button>
						</form>
					</div>
					<div className="grid md:grid-cols-2 gap-4 m-10">
						{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
							return (
								<div key={item}>
									<Card
										imgSrc="/images/authors/Stan_Lee/Stan_Lee.jpeg"
										horizontal={true}
									>
										<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
											Stan Lee
										</h5>
										<p className="font-normal text-gray-700 dark:text-gray-400 text-clip overflow-hidden">
											{lenSlice(
												"Stan Lee was a legendary comic book writer and editor, and the former president and chairman of Marvel Comics."
											)}
										</p>
										<div className="inline-flex justify-center">
											<Link href="/authors/stan_lee">
												<Button
													color="gray"
													className="m-2"
												>
													Read More
													<Icon
														icon="la:readme"
														className="ml-2"
														width={20}
													/>
												</Button>
											</Link>
										</div>
									</Card>
								</div>
							);
						})}
					</div>
				</div>
			</PageLayout>
		</>
	);
};

export default AuthorsPage;
