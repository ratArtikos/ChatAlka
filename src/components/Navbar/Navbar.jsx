import s from './Navbar.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';



const Nav = () => {
  return <nav className={s.Nav}>
    <div className={`${s.item} ${s.active}`}>
      <NavLink to='/profile' activeClassName={s.active}> Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/dialogs' activeClassName={s.active}> Messages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/news' activeClassName={s.active}> News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/music' activeClassName={s.active}> Mucic</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/settings' activeClassName={s.active}> Settings</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/users' activeClassName={s.active}> Users</NavLink>
    </div>
  </nav>
}

export default Nav;