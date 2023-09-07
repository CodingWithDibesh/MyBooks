import { Footer as FT } from "flowbite-react";
import Link from "next/link";

export const Footer = () => {
	return (
		<>
			<FT container={true}>
				<div className="w-full">
					<div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
						<div>
							<FT.Brand
								href="/"
								src="/favicon.svg"
								alt="My Book Logo"
								name="My Books"
							/>
							<div>
								Learning never ends
							</div>
						</div>
						<div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
							<div>
								<FT.Title title="Site Map" />
								<FT.LinkGroup col={true}>
									<Link href="/authors">Authors</Link>
									<Link href="/books">Books</Link>
								</FT.LinkGroup>
							</div>
							<div>
								<FT.Title title="Follow me" />
								<FT.LinkGroup col={true}>
									<FT.Link
										href="https://github.com/itSubeDibesh/MyBooks"
										target="_blank"
										rel="noreferrer"
									>
										Github
									</FT.Link>
									<FT.Link
										href="https://www.linkedin.com/in/itsubedibesh/"
										target="_blank"
										rel="noreferrer"
									>
										LinkedIn
									</FT.Link>
								</FT.LinkGroup>
							</div>
							<div>
								<FT.Title title="My Articles" />
								<FT.LinkGroup col={true}>
									<FT.Link
										href="https://medium.com/@itsubedibesh"
										target="_blank"
										rel="noreferrer"
									>
										Medium
									</FT.Link>
								</FT.LinkGroup>
							</div>
						</div>
					</div>
					<FT.Copyright
						className="cursor-default"
						by="My Books"
						year={new Date().getFullYear()}
					/>
				</div>
			</FT>
		</>
	);
};
