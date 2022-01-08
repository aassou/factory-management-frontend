import { Redirect, useLocation } from 'react-router-dom';
import { useState } from 'react';
import SidebarLink from './SidebarLink';
import { CheckToken } from '../functions/Api';

const SideBar = () => {
  const MENU_ELEMENTS = [
    { title: 'Accueil', link: '/', icon: 'fas fa-home' },
    { title: 'Produits', link: '/products', icon: 'fa fa-barcode' },
    { title: 'Ventes', link: '/sales', icon: 'fa fa-shopping-cart' },
    { title: 'Fournisseurs', link: '/suppliers', icon: 'fa fa-truck' },
    { title: 'Stock', link: '/warehouse', icon: 'fa fa-cubes' },
    { title: 'Découpage', link: '/cutting', icon: 'fa fa-cut' },
    { title: 'Peinture', link: '/painting', icon: 'fa fa-paint-brush' },
    { title: 'Bricolage', link: '/crafts', icon: 'fa fa-gavel' },
    { title: 'Employées', link: '/employees', icon: 'fa fa-users' },
    { title: 'Classement Clients', link: '/clients-ranking', icon: 'fa fa-star' },
    { title: 'États', link: '/reports', icon: 'far fa-copy' },
    { title: 'Caisse', link: '/cash', icon: 'fa fa-credit-card' },
    { title: 'Paramètrages', link: '/settings', icon: 'fa fa-cogs' },
  ];

  const location = useLocation();
  const [Redirect_to_login, setRedirectToLogin] = useState(false);

  if (!localStorage.getItem('token')) {
    return <Redirect to={{ pathname: '/login' }} />;
  }

  CheckToken(localStorage.getItem('token')).catch(() => {
    localStorage.removeItem('token');
    setRedirectToLogin(true);
  });

  if (Redirect_to_login) {
    return <Redirect to={{ pathname: '/login' }} />;
  }

  const renderLinks = (arr) => {
    const res = arr.map((link) => (
      <SidebarLink
        key={link.title}
        linkName={link.title}
        linkTo={link.link}
        iconClass={link.icon}
        active={link.link === location.pathname}
      />
    ));

    return res;
  };

  return (
    <div className="col-lg-2 text-light p-0 pe-2 flex-column bg-blue justify-content-between">
      {renderLinks(MENU_ELEMENTS)}
    </div>
  );
};

export default SideBar;
