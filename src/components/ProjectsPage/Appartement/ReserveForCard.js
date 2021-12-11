import React from 'react';

const ReserveForCard = ({
  onBlur,
  handleStateChange,
  reservedFor,
  oldName,
  closeForm,
}) => (
  <div className="profileForm">
    <div className="card center w-50">
      <button
        onClick={() => {
          closeForm();
        }}
        className="closebtn btn-danger rounded"
      >
        x
      </button>
      <div className="card-header p-3">
        <h1>
          {' '}
          Changer le client
          {oldName}
        </h1>
      </div>
      <div className="card-body p-3">
        <h4>
          Êtes-vous sûr de vouloir changer le nom du client
          {oldName}
          {' '}
          ?
        </h4>
        <label>Réservé par</label>
        <input
          required
          className="w-100 border-0 bg-light"
          onBlur={(e) => {
            onBlur(e);
          }}
          type="text"
          value={reservedFor}
          name="forClient"
          onChange={(e) => {
            handleStateChange(e);
          }}
        />
      </div>
    </div>
  </div>
);

export default ReserveForCard;
