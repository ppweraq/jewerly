import React from 'react';
import './items.css'

const PaginationItems = () => {
    return (
        <div className='pagination-container'>
            <ul className="pagination">
                <li className="pagination__item">
                    <svg className="pagination__link" xmlns="http://www.w3.org/2000/svg" width="0.44em" height="1em" viewBox="0 0 7 16"><path fill="currentColor" d="M5.5 13a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71l4.5-4.49c.2-.2.51-.2.71 0c.2.2.2.51 0 .71L1.71 8l4.15 4.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"/></svg>
                </li>
                <li className="pagination__item">
                    <span className="pagination__link">1</span>
                </li>
                <li className="pagination__item">
                    <a className="pagination__link pagination__link-a" href="#!">2</a>
                </li>
                <li className="pagination__item">
                    <a className="pagination__link pagination__link-a" href="#!">3</a>
                </li>
                <li className="pagination__item">
                    <span className="pagination__link" >...</span>
                </li>
                <li className="pagination__item">
                    <a className="pagination__link pagination__link-a" href="#!">10</a>
                </li>
                <li className="pagination__item">
                    <svg className="pagination__link" xmlns="http://www.w3.org/2000/svg" width="0.44em" height="1em" viewBox="0 0 7 16"><path fill="currentColor" d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15"/></svg>
                </li>
                <li className="pagination__item">
                    <svg className="pagination__link" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M8.646 4.147a.5.5 0 0 1 .707-.001l5.484 5.465a.55.55 0 0 1 0 .779l-5.484 5.465a.5.5 0 0 1-.706-.708L13.812 10L8.647 4.854a.5.5 0 0 1-.001-.707m-4 0a.5.5 0 0 1 .707-.001l5.484 5.465a.55.55 0 0 1 0 .779l-5.484 5.465a.5.5 0 0 1-.706-.708L9.812 10L4.647 4.854a.5.5 0 0 1-.001-.707"/></svg>
                </li>
            </ul>
        </div>
    );
};

export default PaginationItems;