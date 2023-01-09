export type TSuccessResponse<T> = {
	success: boolean;
	status: number;
	data: T;
};
