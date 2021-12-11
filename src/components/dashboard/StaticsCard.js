import React from 'react';

export default function StaticsCard(props) {
  const getRandomHeight = () => Math.floor(Math.random() * 15) + 5;

  return (
    <div className={`${props.class_name} rounded text-light`}>
      <div className="p-3 d-flex align-items-center justify-content-between">
        <div>
          <p className="fs-4 m-0"> + 0 </p>
          <span>text here</span>
        </div>
        <div className="d-flex align-items-end">
          <div className="mx-1" style={{ backgroundColor: 'white', height: `${getRandomHeight()}px`, width: '10px' }} />
          <div className="mx-1" style={{ backgroundColor: 'white', height: `${getRandomHeight()}px`, width: '10px' }} />
          <div className="mx-1" style={{ backgroundColor: 'white', height: `${getRandomHeight()}px`, width: '10px' }} />
          <div className="mx-1" style={{ backgroundColor: 'white', height: `${getRandomHeight()}px`, width: '10px' }} />
        </div>
      </div>
      <div className="border-top p-3">
        <i className="far fa-clock" />
        <span className="ps-1"> Mise à jour : 21:00</span>
      </div>
    </div>
  );
}
