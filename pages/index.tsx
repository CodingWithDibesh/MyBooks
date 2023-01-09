import Head from "next/head";
import { Inter } from "@next/font/google";
import { PageLayout } from "../components/organisms";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>My Books | By Dibesh Raj Subedi</title>
			</Head>
			<PageLayout>Welcome to My Page</PageLayout>
		</>
	);
}
