
type Params = {
	[x: string]: string | string[];
};

export enum MultiStepFormEnum {
	WELCOME = 1,
	SELECT_DATE = 2,
	SUBMIT_DETAILS = 3,
}
export type PageProps = {
	params?: Promise<Params>;
	searchParams?: Promise<{ [x: string]: string | string[] | undefined }>;
};

export type AwaitedPageProps = {
	params?: Awaited<PageProps["params"]>;
	searchParams?: Awaited<PageProps["searchParams"]>;
};

export interface Favourites {
	ids: number[];
}
