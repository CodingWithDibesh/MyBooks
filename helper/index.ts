export const replacePublic = (item: string, url: string) => {
	return item.replaceAll("/public/", url);
};
