import { Icon } from "@iconify/react";
import { Navbar } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";

export const NavBar = () => {
	const { pathname } = useRouter();
	const isPathMatch = (path: string) => (path ? path === pathname : false);
	return (
		<>
			<Navbar>
				<Navbar.Brand href="/">
					<Icon
						icon="twemoji:books"
						width={28}
						className="mr-3 h-6 sm:h-9"
					/>
					<span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
						My Books
					</span>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Link
						href="/"
						className={
							isPathMatch("/") ? "text-blue-600" : "text-gray"
						}
					>
						Home
					</Link>
					<Link
						href="/authors"
						className={
							isPathMatch("/authors")
								? "text-blue-600"
								: "text-gray"
						}
					>
						Authors
					</Link>
					<Link
						href="/books"
						className={
							isPathMatch("/books")
								? "text-blue-600"
								: "text-gray"
						}
					>
						Books
					</Link>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};
