export interface IResponse<T> {
	success: boolean;
	status: number;
	length?: number;
	data: T[];
}

export const replacePublic = (item: string, url: string) => {
	return item.replaceAll("/public/", url);
};

export const responseHandler = (response: any, statusCode: number = 200) => {
	return response.length > 1
		? {
				success: statusCode < 300 && statusCode >= 200,
				status: statusCode,
				length: response.length,
				data: response,
		  }
		: {
				success: statusCode < 300 && statusCode >= 200,
				status: statusCode,
				data: response,
		  };
};

export const lenSlice = (str: string, len: number = 210): string =>
	str.slice(0, len) + "...";
