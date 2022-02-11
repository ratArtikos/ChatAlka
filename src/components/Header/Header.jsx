import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import logo from '../../logotip.jpg';

const Header = (props) => {
    return <header className={s.Header}>

        <div className={s.loginBlock}>
            {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div> : <NavLink to={'/login'}>Login</NavLink>}
        </div>

        <div className='logo'>
            <img src={logo} />
        </div>


    </header>
}

export default Header;