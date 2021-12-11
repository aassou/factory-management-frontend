import StaticsCards from './StaticsCards';

export default function Statistics() {
  return (
    <div>
      <div className="bg-white my-3 p-3 fs-5 rounded text-darkblue">
        Bilans et Statistiques de la semaine
      </div>

      <div className="cards">
        <StaticsCards />
      </div>
    </div>
  );
}
