import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import { getAllUsers } from '../../functions/Api';
import UsermanagerCard from './UsermanagerCard';
import { deleteUser } from '../../functions/Api';

import 'react-confirm-alert/src/react-confirm-alert.css';
import '../../assets/style/usermanager.scss';

export default function UserManagment() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getAllUsers(localStorage.getItem('token')).then((res) => {
      setUsers(res.data.users);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  const DeleteUser = (id, username) => {
    confirmAlert({
      title: "Confirmer la suppression de l'utilisateur",
      message: `Êtes-vous sûr de vouloir supprimer l'utilisateur ${username}.`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => deleteUser(
            localStorage.getItem('token'),
            id,
          ).then(() => {
            const newusers = users.filter((user) => user.id !== id);
            setUsers(newusers);
          }).catch((e) => {
            console.log(e);
          }),

        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  };

  const renderHelper = (users) => {
    if (users) {
      const res = users.map((user) => (<UsermanagerCard key={user.username} DeleteUser={DeleteUser} user={user} />));
      return res;
    }
  };

  return (
    <div className="mytable">
      <table>
        <tr>
          <th>Login</th>
          <th>Profile</th>
          <th>Date of creation</th>
          <th>Status</th>
          <th>Changer Status</th>
          <th>Actions</th>
        </tr>
        {renderHelper(users)}
      </table>
      <div className="text-end bg-light">
        <Link className="btn bg-light-blue text-white m-4" to="/configuration/users/adduser">Ajouter Un Utilisateur</Link>
      </div>
    </div>
  );
}
