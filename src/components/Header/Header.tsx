import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img
                src="https://fikiwiki.com/uploads/posts/2022-02/1645039733_10-fikiwiki-com-p-kartinki-logotipov-10.jpg"
                alt="Logo"/>
        </header>
    );
};

export default Header;