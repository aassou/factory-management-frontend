import DashboardButton from '../dashboard/DashboardButton';

const SettingDashboard = () => {
    const configlinks = [
        {
            name: 'Catégories', 
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
            name: 'Historique', 
            link: '/configuration/history', 
            color: 'olive-card', 
            icon: 'fa fa-history', 
            description: 'Historique de toutes les opérations effectuées.',
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

export default SettingDashboard;
