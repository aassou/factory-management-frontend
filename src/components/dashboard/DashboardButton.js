import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import '../../assets/style/cards.scss';

const DashboardButton = (props) => {
  const {title, subinfo, cardText, cardClass, iconClass, link} = props;
  const linkCardClassName = classNames(cardClass, 'linkcard');
  const iconClassName = classNames(iconClass, 'card-icon');

  return (
    <Link className="col-12 col-sm-6 col-md-4 col-xl-3 mb-3" to={link}>
      <div className={linkCardClassName}>
        <i className={iconClassName} />
        <div>
          <h1 className="pt-2 fw-bold">{title}</h1>
          <span>{subinfo}</span>
          <p>
            {cardText}
            {' '}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DashboardButton;
