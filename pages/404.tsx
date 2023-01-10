import Head from "next/head";
import { Inter } from "@next/font/google";
import { PageLayout } from "../components/organisms";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

export default function PageNotFound() {
	return (
		<>
			<Head>
				<title>404 | My Books</title>
			</Head>
			<PageLayout isBottom>
				<div className="m-5">
					<div className="flex justify-center">
						<Image
							src="/images/carousel/spiderman_carousel_1.jpg"
							alt="Carousel image"
							width={500}
							height={500}
							style={{ width: "auto" }}
						/>
					</div>
					<h3 className="text-center font-bold text-xl text-gray-600 mt-4">
						Oops! Page Not found
					</h3>
					<div className="flex justify-center mt-2">
						<Link href="/">
							<Button color="gray" className="m-2">
								Back to Home
								<Icon
									icon="ic:round-home"
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
