import StaticsCard from './StaticsCard';

const StaticsCards = () => (
  <div className="row">
    <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-3">
      <StaticsCard class_name="orange-card" />
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-3">
      <StaticsCard class_name="green-card " />
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-3">
      <StaticsCard class_name="pink-card" />
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-3">
      <StaticsCard class_name="blue-card" />
    </div>
  </div>
);

export default StaticsCards;
