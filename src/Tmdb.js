const API_KEY_PARAMETER = 'api_key=a7e7edaf2bb9d59dbfbb2a12b60fe6b8';
const API_BASE = 'https://api.themoviedb.org/3';
const LANGUAGE_PARAMETER = 'language=pt-BR';

/*
    - originais da Netflix
    - Recomendados (Trending)
    - Em Alta (Top Rated)
    - Tipos:
        - ação
        - comédia
        - terror
        - romance
        - documentários
 */

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    return await req.json()
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&${LANGUAGE_PARAMETER}&${API_KEY_PARAMETER}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados Para Você',
                items: await basicFetch(`/trending/all/week?${LANGUAGE_PARAMETER}&${API_KEY_PARAMETER}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?${LANGUAGE_PARAMETER}&${API_KEY_PARAMETER}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?${LANGUAGE_PARAMETER}&${API_KEY_PARAMETER}&with_genres=28`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?${LANGUAGE_PARAMETER}&${API_KEY_PARAMETER}&with_genres=35`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?${LANGUAGE_PARAMETER}&${API_KEY_PARAMETER}&with_genres=27`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?${LANGUAGE_PARAMETER}&${API_KEY_PARAMETER}&with_genres=10749`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?${LANGUAGE_PARAMETER}&${API_KEY_PARAMETER}&with_genres=99`)
            }
        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?${LANGUAGE_PARAMETER}&${API_KEY_PARAMETER}`);
                    break;

                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?${LANGUAGE_PARAMETER}&${API_KEY_PARAMETER}`);
                    break;

                default:
                    info = null;
                    break;
            }
        }
        return info;
    }
}
