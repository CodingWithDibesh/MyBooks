import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number): T {
	const [debounce, setDebounce] = useState<T>(value);
	useEffect(() => {
		const timeOut = setTimeout(() => {
			setDebounce(value);
		}, delay);
		return () => {
			clearTimeout(timeOut);
		};
	}, [delay, value]);
	return debounce;
}
