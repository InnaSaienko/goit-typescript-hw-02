import axios from 'axios';

const accessKey = "zGdrmCXN7cTiKLUPYyDHIt-5Mi6bHP-uk2sW_YEaHfQ;"
const pathSearch = "/search/photos";

export const fetchPhotos = async ({query, page, perPage, signal}: FetchPhotoParams): Promise<Photo[]> => {
    const url = new URL(pathSearch, 'https://api.unsplash.com');

    if (query) {
        url.searchParams.set("orientation", "landscape");
        url.searchParams.set("query", query);
    }
    url.searchParams.set("per_page",perPage.toString());
    url.searchParams.set("page", page.toString());
    const response = await axios.get(url.toString(), {
        headers: {
            Authorization: `Client-ID ${accessKey}`,
            "Accept-Version": `v1`,
        },
        signal,
    });
    return response.data.results;
}
