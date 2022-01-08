import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const LinksBar = () => {
  const location = useLocation();

  const icons = {
    '': { title: '', icon: '' },
    'products': { title: 'Produits', icon: 'fa fa-barcode' },
    'sales': { title: 'Ventes', icon: 'fa fa-shopping-cart' },
    'suppliers': { title: 'Fournisseurs', icon: 'fa fa-truck', link: '/suppliers' },
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

  const removeItems = (array, itemsToRemove) => {
    return array.filter(v => {
      return !itemsToRemove.includes(v);
    }).filter(v => {
      return isNaN(v)
    });
  }

  const bar = location.pathname.split('/');
  const linkBar = () => {
    const newBar = removeItems(bar, ['update', 'add', 'delete']);
    console.log(bar[1]);
    if (newBar.length > 2) {
      return (
        <span>
          /
          {newBar.slice(2).join(' / ').replaceAll('-', ' ')}
        </span>
      );
    }
  };

  return (
    <div className="bg-white mb-3 p-3 text-capitalize rounded text-darkblue">
      <i className="fas fa-home" />{' '}
      <Link to='/'>Accueil</Link> / &nbsp;
      <i className={icons[bar[1]].icon} />
      <Link to={icons[bar[1]].link}>
        {' '}
        &nbsp;
        {icons[bar[1]].title}
        {' '}
        &nbsp;
        {linkBar()}
      </Link>
    </div>
  );
};

export default LinksBar;
