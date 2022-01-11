import DashboardButton from '../dashboard/DashboardButton';

const ConfigPage = () => {
    const configlinks = [
        {
            name: 'Categories', 
            link: '/settings/categories', 
            color: 'blue-card', 
            icon: 'fa fa-sitemap', 
            description: 'Gestion des categories.',
        },
        {
            name: 'Utilisateurs', 
            link: '/settings/users', 
            color: 'darkblue-card', 
            icon: 'fa fa-user', 
            description: 'Gestion des comptes des utilisateurs du system.',
        },
        {
            name: 'Type charges', link: '/configuration/charges-type', color: 'green-card', icon: 'fa fa-list-alt', description: 'Ajout des types charges utilisé par les charges.',
        },
        {
            name: 'Type charges communs', link: '/configuration/charges-types-commons', color: 'olive-card', icon: 'fas fa-chart-bar', description: 'Ajout des types charges utilisé par les charges communs.',
        },
        {
            name: 'Employés', link: '/configuration/employees', color: 'pink-card', icon: 'fa fa-male', description: 'Gestion des informations des employés de la société.',
        },
        {
            name: 'Fournisseurs', link: '/configuration/providers', color: 'pink-two-card', icon: 'fa fa-truck', description: 'Gestion des données personnels des fournisseurs.',
        },
        {
            name: 'Clients', link: '/configuration/clients', color: 'orange-card', icon: 'fa fa-users', description: 'Gestion des données personnels des clients.',
        },
        {
            name: 'Compte bancaire', link: '/configuration/bank-account', color: 'lightred-card', icon: 'fas fa-university', description: 'Gestion des comptes bancaires de la société.',
        },
        {
            name: 'Type Produit', link: '/configuration/product-type', color: 'red-card', icon: 'fa fa-barcode', description: 'Gestion Types Produits utilisé dans l\'Étude de projet.',
        },
        {
            name: 'Type Charges', link: '/configuration/charges-type', color: 'green-card', icon: 'fa fa-minus-square', description: 'Gestion Types Charges utilisé dans l\'Étude de projet',
        },
        {
            name: 'Historique', link: '/configuration/history', color: 'darkblue-card', icon: 'fa fa-history', description: 'Historique de toutes les opérations effectuées.',
        },
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
    <div className="pb-5 row">
      {renderCards(configlinks)}
    </div>
  );
};
export default ConfigPage;
