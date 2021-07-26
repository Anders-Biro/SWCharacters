import React from 'react'
import styles from './Pagination.module.css';

export const Pagination = ({charsPerPage, totalChars, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalChars / charsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={styles.pagination_layout}>
            <ul className="pagination">
                {pageNumbers.map(num => (
                    <li key={num} className="page-item">
                        <a onClick={() => paginate(num)} href="!#" className="page-link">
                            {num}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
