import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.css';
export default function NavItem({ to, children, icon, exact, text }) {
  return (
    <li className={'nav-item ' + styles.navItemSidebar}>
      <NavLink
        className={'nav-link ' + styles.navLinkSidebar}
        to={to}
        activeClassName={styles.selected}
        exact={exact}
      >
        {icon && <span>{icon}</span>}
        <span className="d-none d-sm-inline-block ml-2">{text}</span>
      </NavLink>
    </li>
  );
}
