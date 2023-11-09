import { Link } from "react-router-dom";

import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <Link className={style.link} to="/">Все пользователи</Link>
            <Link className={style.link}  to="/user">Один пользователь</Link>
        </header>
    )
}

export default Header;