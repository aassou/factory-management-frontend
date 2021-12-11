import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const LinksBar = () => {
  const location = useLocation();

  const icons = {
    '': { title: '', icon: '' },
    'products': { title: 'Produits', icon: 'fa fa-barcode' },
    'sales': { title: 'Ventes', icon: 'fa fa-shopping-cart' },
    'providers': { title: 'Fournisseurs', icon: 'fa fa-truck' },
    'warehouse': { title: 'Stock', icon: 'fa fa-cubes' },
    'cutting': { title: 'Découpage', icon: 'fa fa-cut' },
    'painting': { title: 'Peinture', icon: 'fa fa-paint-brush' },
    'crafts': { title: 'Bricolage', icon: 'fa fa-gavel' },
    'employees': { title: 'Employées', icon: 'fa fa-users' },
    'clients-ranking': { title: 'Classement Client', icon: 'fa fa-star' },
    'reports': { title: 'États', icon: 'far fa-copy' },
    'cash': { title: 'Caisse', icon: 'fa fa-credit-card' },
    'settings': { title: 'Paramètrages', icon: 'fa fa-cogs' },
  };
  // ? this is a temporry solution so the app don't crash
  // ? will get replaced after we get new links for configpage

  const bar = location.pathname.split('/');
  const linkBar = () => {
    if (bar.length > 2) {
      return (
        <span>
          /
          {bar.slice(2).join(' / ').replaceAll('-', ' ')}
        </span>
      );
    }
  };

  return (
    <div className="bg-white mb-3 p-3 text-capitalize rounded text-darkblue">
      <i className="fas fa-home" />{' '}
      <Link to='/'>Accueil</Link> / &nbsp;
      <i className={icons[bar[1]].icon} />
      {' '}
      &nbsp;
      {icons[bar[1]].title}
      {' '}
      &nbsp;
      {linkBar()}
    </div>
  );
};

export default LinksBar;
