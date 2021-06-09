import React from 'react';
import './Header.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({black}) => {
    return (
        <header className={black ? 'black': ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://pngimg.com/uploads/netflix/netflix_PNG11.png" alt="Netflix"/>
                </a>
            </div>

            <div className="header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/User_with_smile.svg/1200px-User_with_smile.svg.png" alt="Usuário"/>
                </a>
            </div>

        </header>
    )
}
