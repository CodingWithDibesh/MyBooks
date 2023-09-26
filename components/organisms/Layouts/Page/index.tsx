import Head from "next/head";
import React from "react";
import { Footer, NavBar } from "../Elements";

interface IPageLayout {
	children: any;
	isBottom?: boolean;
}

export const PageLayout = ({ children, isBottom = false }: IPageLayout) => {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="A simple books app to understand NextJS, SSR, SSG, CSR and ReactQuery for SSR and SSG"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="w-full h-screen">
				<div className={`${!isBottom ? "fixed top-0" :"top-0"} left-0 w-full pt-1 bg-white border-2 z-10`}>
					<NavBar />
				</div>
				<main className={` ${!isBottom?"mt-20":""} container`}>{children}</main>
				<div className={isBottom ? "fixed bottom-0 left-0 w-full" : "bottom-0"}>
					<Footer />
				</div>
			</div>
		</>
	);
};
