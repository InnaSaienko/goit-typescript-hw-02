interface FetchPhotoParams {
    query: string;
    page: string;
    photosPerPage: string;
    signal?: AbortSignal;
}