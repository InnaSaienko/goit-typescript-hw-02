interface FetchPhotoParams {
    query: string;
    page: string;
    photosPerPage: string;
    signal?: AbortSignal;
}

interface User {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: string;
    links: {
        self: string;
        html: string;
        photos: string;
        likes: string;
        portfolio: string;
    };
}
interface Photo {
    id: string;
    slug: string;
    alternative_slugs: { [key: string]: string };
    created_at: string;
    updated_at: string;
    promoted_at: string;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: string;
    alt_description: string;
    urls: { [key: string]: string };
    user: User;
}
