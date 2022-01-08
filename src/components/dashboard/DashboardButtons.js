import DashboardButton from './DashboardButton';

const DashboardButtons = () => {
  const tiles = [
    {
      name: 'Produits',
      link: 'products', 
      color: 'navy-card', 
      icon: 'far fa-barcode', 
      description: 'Bilan des entrées et sorties de la caisse de la société.',
    },
    {
      name: 'Ventes', 
      link: 'sales', 
      color: 'blue-card', 
      icon: 'fa fa-shopping-cart', 
      description: 'Gestion, préparation et vérification des commandes externes.',
    },
    {
      name: 'Fournisseurs', 
      link: 'suppliers', 
      color: 'aqua-card', 
      icon: 'fa fa-truck', 
      description: 'Gestion, vérification et stockage des commandes internes.',
    },
    {
      name: 'Stock', 
      link: 'warehouse', 
      color: 'bg-c-blue', 
      icon: 'fa fa-cubes', 
      description: 'Gestion et suivi des produits en stock.',
    },
    {
      name: 'Découpage', 
      link: 'cutting', 
      color: 'teal-card', 
      icon: 'fa fa-cut', 
      description: 'Gestion de Plan, Design, Découpage et Brossage.',
    },
    {
      name: 'Peinture', 
      link: 'painting', 
      color: 'lime-card', 
      icon: 'fa fa-paint-brush', 
      description: 'Rayonnage Entrée, Traitement surface, Peinture Epoxy et Four Epoxy.',
    },
    {
      name: 'Bricolage', 
      link: 'crafts', 
      color: 'olive-card', 
      icon: 'far fa-gavel', 
      description: 'Gestion de Plan, Design, Préparation et Montage.',
    },
    {
      name: 'Employées', 
      link: 'employees', 
      color: 'green-card', 
      icon: 'fa fa-users', 
      description: 'Gestion des employés de la société.',
    },
    {
      name: 'Classement Client', 
      link: 'clients-ranking', 
      color: 'bg-instagram', 
      icon: 'fa fa-star', 
      description: 'Classement des clients selon respect des limites des réglements.',
    },
    {
      name: 'États', 
      link: 'reports', 
      color: 'orange-card', 
      icon: 'far fa-copy', 
      description: 'Les états résumant les infos des projets, clients et société.',
    },
    {
      name: 'Caisse', 
      link: 'cash', 
      color: 'red-card', 
      icon: 'fa fa-credit-card', 
      description: 'Bilan des entrées et sorties de la caisse de la société.',
    },
    {
      name: 'Paramètrages', 
      link: 'settings', 
      color: 'maroon-card', 
      icon: 'fas fa-cogs', 
      description: 'Paramètrages globales de l\'application.',
    }
  ];

  const renderCards = (arr) => {
    const res = arr.map((card) => (
      <DashboardButton
        key={card.name}
        title={card.name}
        link={card.link}
        cardText={card.description}
        iconClass={card.icon}
        cardClass={card.color}
      />
    ));

    return res;
  };

  return (
    <div className="pb-5 row border-bottom border-2 ">
      {renderCards(tiles)}
    </div>
  );
};

export default DashboardButtons;
