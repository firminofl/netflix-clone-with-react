import React from 'react';
import './FeaturedMovie.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({item}) => {
    let firstDate = new Date(item.first_air_date);

    let genres = [];
    let overview = '';

    for (let index in item.genres) {
        genres.push(item.genres[index].name)
    }

    item.overview.length > 320 ? overview = item.overview.substring(0, 319) + '...' : overview = item.overview;

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' :''}</div>
                    </div>
                    <div className="featured--description">{overview}</div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--watch-button">► Assistir</a>
                        <a href={`/list/add/${item.id}`} className="featured--my-list-button">+ Minha Lista</a>
                    </div>
                   <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
                </div>
            </div>

        </section>
    )
}
