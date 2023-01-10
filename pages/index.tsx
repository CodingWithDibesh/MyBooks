import Head from "next/head";
import { Inter } from "@next/font/google";
import { PageLayout } from "../components/organisms";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>My Books | By Dibesh Raj Subedi</title>
			</Head>
			<PageLayout isBottom>
				<div className="m-5">
					<div className="flex justify-center">
						<Image
							src="/images/flash/spiderman.jpg"
							alt="flash image"
							width={500}
							height={500}
							style={{ width: "auto" }}
						/>
					</div>
					<h3 className="text-center font-bold text-lg text-gray-600">
						Learn With Your Imagination
					</h3>
					<div className="flex justify-center">
						<Link href="/books">
							<Button color="gray" className="m-2">
								Find your books
								<Icon
									icon="fxemoji:books"
									className="ml-2"
									width={20}
								/>
							</Button>
						</Link>
					</div>
				</div>
			</PageLayout>
		</>
	);
}
