import "react-confirm-alert/src/react-confirm-alert.css";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useEffect, useRef, useState } from "react";
import { installationPrompt, manualPrompt } from "../components/organisms/Layouts/Elements";
import { APP_INSTALLED, BEFORE_INSTALL_PROMPT, INSTALLATION_MESSAGE, INSTALLATION_STATUS, getDeviceInfo } from "../helper";
import { UAParser } from "ua-parser-js";

export default function App({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(() => new QueryClient());
	
	const { device, pwa } = getDeviceInfo(new UAParser())
	const deferredPrompt = useRef<Event | null>(null)

	const appInstalled = () => {
		localStorage.setItem(INSTALLATION_STATUS, INSTALLATION_MESSAGE)
		deferredPrompt.current = null
	}
	const doNotShowAgain = (close: () => void) => {
		appInstalled()
		close()
	}
	const alreadyInstalled = doNotShowAgain
	const onInstall = (close: () => void) => {
		if (deferredPrompt.current) {
			// @ts-ignore
			deferredPrompt?.current.prompt();
			// Wait for the user to respond to the prompt
			let status = false
			// @ts-ignore
			deferredPrompt.current.userChoice.then((choiceResult) => {
				status = choiceResult.outcome === 'accepted'
			})
			if (status) {
				appInstalled()
				deferredPrompt.current = null;
			}
			close()
		}
	}

	useEffect(() => {
		window.addEventListener(BEFORE_INSTALL_PROMPT, (e) => {
			e.preventDefault()
			deferredPrompt.current = e
		})
		window.addEventListener(APP_INSTALLED, appInstalled)
	}, [])

	useEffect(() => {
		// Trigger PWA installation prompt on mobile devices only
		const isInstallable = device.isMobile || device.isMobile && !pwa.isStandalone(window)
		const isInstalled = localStorage.getItem(INSTALLATION_STATUS)
		setTimeout(() => {
			if (isInstallable && !isInstalled)
				if (deferredPrompt.current) {
					installationPrompt({
						doNotShowAgain,
						onInstall
					})
				} else {
					manualPrompt({
						doNotShowAgain,
						alreadyInstalled,
						isIOS: device.isIOS,
						isAndroid: device.isAndroid
					})
				}
		}, 1e3)
	}, [device.isAndroid, device.isIOS, deferredPrompt.current])

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
