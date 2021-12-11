import React from 'react';

const SoldToCard = ({ client, price, closeForm }) => (
  <div className="profileForm">
    <div className="card center w-50">
      <button
        onClick={() => {
          closeForm();
        }}
        className="closebtn"
      >
        x
      </button>
      <div className="card-header p-3">
        <h2>Appartement Pour Client</h2>
      </div>
      <div className="card-body p-3">
        <div className="d-flex justifce-content-between">
          <label> Client :</label>
          {' '}
          <span>
            {' '}
            {client}
          </span>
        </div>
        <div className="d-flex justifce-content-between">
          <label> Prix : </label>
          {' '}
          <span>
            {' '}
            {price}
            {' '}
            DH
            {' '}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default SoldToCard;
