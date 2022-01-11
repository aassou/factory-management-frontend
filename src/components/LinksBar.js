import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const LinksBar = () => {
    const location = useLocation();

    const icons = {
        '': { title: '', icon: '', link: '' },
        'products': { title: 'Produits', icon: 'fa fa-barcode', link: '/products' },
        'sales': { title: 'Ventes', icon: 'fa fa-shopping-cart', link: '/sales' },
        'suppliers': { title: 'Fournisseurs', icon: 'fa fa-truck', link: '/suppliers' },
        'customers': { title: 'Clients', icon: 'fa fa-users', link: '/customers' },
        'warehouse': { title: 'Stock', icon: 'fa fa-cubes', link: '/warehouse' },
        'cutting': { title: 'Découpage', icon: 'fa fa-cut', link: '/cutting' },
        'painting': { title: 'Peinture', icon: 'fa fa-paint-brush', link: '/painting' },
        'crafts': { title: 'Bricolage', icon: 'fa fa-gavel', link: '/crafts' },
        'employees': { title: 'Employées', icon: 'fa fa-user', link: '/employees' },
        'reports': { title: 'États', icon: 'far fa-copy', link: '/reports' },
        'cash': { title: 'Caisse', icon: 'fa fa-credit-card', link: '/cash' },
        // settings
        'settings': { title: 'Paramètrages', icon: 'fa fa-cogs', link: '/settings' },
        'categories': { title: 'Catégories', icon: 'fa fa-sitemap', link: '/settings/categories' },
        'users': { title: 'Utilisateurs', icon: 'fa fa-users', link: '/settings/users' },
    };

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
      
        if (newBar.length >= 1) {
            return newBar.map((e, index) => {
                return (
                    <span key={index}> 
                        {' / '}
                        <i className={icons[e].icon}></i>
                        <Link to={icons[e].link} key={index}>
                            {' '}
                            {icons[e].title}
                        </Link>
                    </span>
                )  
            })
        }
    };

    return (
        <div className="bg-white mb-3 p-3 text-capitalize rounded text-darkblue">
            <i className="fas fa-home" />
            {' '}
            <Link to='/'>Accueil &nbsp;</Link>
            {linkBar()}
        </div>
    );
};

export default LinksBar;
