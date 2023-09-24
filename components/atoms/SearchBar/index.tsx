import { Icon } from "@iconify/react";
import { Dispatch, SetStateAction } from "react";

interface ISearchBar {
	handelSubmit?: (e: any) => void;
	text: string;
	setText: Dispatch<SetStateAction<string>>;
	onClear?: (e: any) => void;
}

export const SearchBar = ({
	handelSubmit = (e) => {
		e.preventDefault();
	},
	text,
	setText,
	onClear,
}: ISearchBar) => {
	return (
		<>
			<div className="my-7">
				<form onSubmit={handelSubmit} className="flex items-center">
					<label htmlFor="simple-search" className="sr-only">
						Search
					</label>
					<div className="w-full relative">
						<input
							type="text"
							id="simple-search"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Search"
							onChange={(e) => setText(e.target.value)}
							value={text}
						/>
						{text && (
							<Icon
								onClick={onClear}
								icon="flat-color-icons:clear-filters"
								className="absolute right-3 top-3 cursor-pointer"
							/>
						)}
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
		</>
	);
};
