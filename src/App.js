import React, {useEffect, useState} from 'react';
import './App.css';

import Tmdb from './Tmdb';

import MovieRow from './components/MovieRow/MovieRow'
import FeaturedMovie from "./components/FeaturedMovie/FeaturedMovie";
import Header from "./components/Header/Header";

function App() {
    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(() => {
        const loadAll = async () => {
            // Pegando a lista toda
            let list = await Tmdb.getHomeList();
            setMovieList(list);

            // Pegando o Featured
            let originals = list.filter(element => element.slug === 'originals');
            let ramdomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[ramdomChosen];

            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
            setFeaturedData(chosenInfo);
        }

        loadAll();
    }, []);

    useEffect(() => {
        const scrollListener = () => {
            if (window.pageYOffset > 30) {
                setBlackHeader(true);
            } else {
                setBlackHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, []);

    return (
        <div className="page">
            <Header black={blackHeader}/>

            {featuredData &&
            <FeaturedMovie item={featuredData}/>
            }

            <section className="lists">
                {movieList.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items}/>
                ))}
            </section>

            <footer>
                Feito com <span role="img" aria-label="coração">&#9829;</span> por Filipe Firmino Lemos<br/>
                Direitos de imagem para Netflix<br/>
                Dados coletados do site <a href="https://www.themoviedb.org/">themoviedb.org</a><br/>
            </footer>

            {movieList.length <= 0 &&
                <div className="loading">
                    <img src="https://4.bp.blogspot.com/-S2Jkpc2e_F0/UmFp_nujwbI/AAAAAAAAB20/wUhYlN-Mrgo/s1600/loading.gif"
                         alt="Carregando"/>
                </div>
            }
        </div>
    );
}

export default App;
