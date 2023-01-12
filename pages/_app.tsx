import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(() => new QueryClient());
	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<ReactQueryDevtools
					initialIsOpen={false}
					position="bottom-right"
				/>
				<Component {...pageProps} />
				<Analytics />
			</Hydrate>
		</QueryClientProvider>
	);
}
