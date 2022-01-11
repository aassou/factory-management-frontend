import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getHistory } from '../../functions/HistoryApi';

const HistoryPage = () => {
  const [historyDates, setHistoryDates] = useState(null);

  useEffect(() => {
    getHistory(localStorage.getItem('token')).then((res) => {
      setHistoryDates(res.data);
    }).catch((e) => {
      console.log(e);
    });
  }, []);

  const renderHelper = (mydates) => {
    if (mydates) {
      const res = mydates.map((d) => (
        <tr key={`${d.month}-${d.year}`}>
          <td className="ps-2 p-2">
            <Link to={`/configuration/history/${d.month}/${d.year}`} className="p-1 bg-secondary rounded text-white">
              {d.month}
              {' '}
              /
              {' '}
              {d.year}
            </Link>
          </td>
        </tr>
      ));

      return res;
    }
  };

  return (
    <div>

      <h1>Historique des Actions</h1>
      <div className="mytable ">
        <table>
          <thead>
            <tr>
              <th className="bg-light">
                <h4>Mois/Année</h4>
                {' '}
              </th>
            </tr>
          </thead>
          <tbody>
            {renderHelper(historyDates)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryPage;
