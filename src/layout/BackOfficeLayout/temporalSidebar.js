import React from 'react';
import { NavLink } from 'react-router-dom';

function NavItem({ to, children }) {
  return (
    <li class="nav-item">
      <NavLink className="nav-link active" to={to}>
        {children}
      </NavLink>
    </li>
  );
}

export default function TemporalSidebar() {
  return (
    <div
      id="sidebar"
      style={{ background: 'white', borderBottom: '1px solid blue' }}
    >
      BackOffice (temporal header/sidebar)
      <ul class="nav">
        <NavItem to="/back-office/testimonials">Testimonios</NavItem>
        <NavItem to="/back-office/news">Novedades</NavItem>
        <NavItem to="/back-office/activity">Actividades</NavItem>
        <NavItem to="/back-office/organization">Organizacion</NavItem>
        <NavItem to="/logout">Logout</NavItem>
      </ul>
    </div>
  );
}
