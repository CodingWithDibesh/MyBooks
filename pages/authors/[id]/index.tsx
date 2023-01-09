import { Icon } from "@iconify/react";
import { Button, Card } from "flowbite-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "../../../components/atoms";
import { PageLayout } from "../../../components/organisms";
import { lenSlice } from "../../../helper";

const AuthorPage = () => {
	return (
		<>
			<Head>
				<title>Robert T. Kiyosaki | My Books</title>
			</Head>
			<PageLayout>
				<div className="m-5 lg:m-20">
					<Card>
						<div className="flex justify-center">
							<Breadcrumb
								itemName={"Stan Lee"}
								category={{ name: "Authors", url: "/authors" }}
							/>
						</div>
						<div className="grid md:grid-cols-2 md:gap-0">
							<div className="p-5">
								<Image
									src="/images/authors/Stan_Lee/Stan_Lee.jpeg"
									alt="Stan_Lee"
									width={400}
									height={200}
									className="rounded-lg"
								/>
							</div>
							<div className="mt-5 mr-10">
								<div className="grid md:grid-col-1">
									<div>
										<h3 className="text-3xl mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
											Stan Lee
										</h3>
										<p className="font-normal indent-8 text-gray-700 text-justify dark:text-gray-400 text-clip overflow-hidden">
											Stan Lee was a legendary comic book
											writer and editor, and the former
											president and chairman of Marvel
											Comics.
										</p>
										<p className="font-normal text-gray-700 text-justify dark:text-gray-400 text-clip overflow-hidden">
											He is best known for co-creating
											many of the most popular superheroes
											in the Marvel Universe, including
											Spider-Man, the X-Men, the Avengers,
											and the Fantastic Four. Lee was born
											in New York City in 1922, and he
											began working in the comic book
											industry in 1939. He worked on many
											popular comics throughout the 1940s
											and 1950s, and in the 1960s he
											helped to revitalize Marvel Comics
											with a series of groundbreaking
											titles that introduced complex
											characters and storylines. Lee
											continued to work in the comic book
											industry until his death in 2018,
											and his contributions to the medium
											have been recognized with numerous
											awards and accolades.
										</p>
									</div>
									<div className="mt-2 hidden md:block">
										<h3 className="mb-3 text-md font-semibold">
											Best Sellers
										</h3>
										{[1, 2, 3, 4].map((item) => {
											return (
												<span
													key={item}
													className="text-sm font-semibold cursor-default p-2 m-1 bg-blue-600 rounded-lg text-white"
												>
													Spider-Man
												</span>
											);
										})}
									</div>
									<div className="w-full mt-2">
										<h3 className="mb-3 text-md font-semibold">
											Books from same author
										</h3>
										<div className="md:mt-4 grid grid-flow-col overflow-y-auto">
											{[1, 2, 3, 4].map((item) => {
												return (
													<Link href="/" key={item}>
														<Image
															src="/images/authors/Stan_Lee/The_Avengers.jpg"
															alt="The_Avengers"
															className="m-2"
															width={150}
															height={150}
														/>
													</Link>
												);
											})}
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

export default AuthorPage;
