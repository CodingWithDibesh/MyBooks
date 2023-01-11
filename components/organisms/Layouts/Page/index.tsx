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
			<div className="fixed top-0 w-full pt-1 bg-white border-2 z-10">
				<NavBar />
			</div>
			<main className="container mt-20">{children}</main>
			{isBottom ? (
				<div className="fixed w-full bottom-0">
					<Footer />
				</div>
			) : (
				<div className="static bottom-0">
					<Footer />
				</div>
			)}
		</>
	);
};
