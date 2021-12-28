import { useEffect, useState } from 'react';
import { getHistoryByMonth } from '../../functions/HistoryApi';

const MonthHistory = (props) => {
  const [historyData, setHistoryData] = useState(null);
  const param = props.match.params;
  useEffect(() => {
    getHistoryByMonth(param.month, param.year, localStorage.getItem('token')).then((res) => {
      setHistoryData(res.data);
    }).catch((e) => {
      console.log(e);
    });
  }, []);

  const displayDate = (date) => {
    const d = new Date(date);
    const month = `${d.getMonth() + 1}`;
    const day = `${d.getDate()}`;
    const year = d.getFullYear();
    const hr = d.getHours();
    const min = d.getMinutes();

    return `${day} / ${month} / ${year} - ${hr}h:${min}m`;
  };
  const renderHelper = (histories) => {
    if (histories) {
      const res = histories.map((h) => (
        <tr key={`${h.id}`}>
          <td>
            {' '}
            {h.target}
            {' '}
          </td>
          <td>
            {' '}
            {h.action}
            {' '}
          </td>
          <td>
            {' '}
            {displayDate(h.created)}
            {' '}
          </td>
          <td>
            {' '}
            {h.createdBy}
            {' '}
          </td>
          <td>
            {' '}
            {h.description}
            {' '}
          </td>
        </tr>
      ));

      return res;
    }
  };

  return (
    <div className="mytable">
      <table>
        <thead>
          <tr>
            <th>Cible</th>
            <th>Action</th>
            <th>Date d'action</th>
            <th>Réalisé par</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {renderHelper(historyData)}
        </tbody>
      </table>
    </div>
  );
};

export default MonthHistory;
