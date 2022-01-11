import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import { getUsers, deleteUser } from '../../../functions/UserApi';
import UsermanagerCard from './UsermanagerCard';
import Table from './table';

import 'react-confirm-alert/src/react-confirm-alert.css';
import '../../../assets/style/user.scss';

export default function UserManagment() {
    const [users, setUsers] = useState(null);

    useEffect(async () => {
        const token = localStorage.getItem('token');

        const res = await getUsers(token);
        setUsers(res.data);
    }, []);

  const DeleteUser = (id, username) => {
    confirmAlert({
      title: "Confirmer la suppression de l'utilisateur",
      message: `Êtes-vous sûr de vouloir supprimer l'utilisateur ${username}.`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => deleteUser(
            id,
            localStorage.getItem('token')
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
            const usersList = users["hydra:member"];

            return usersList.map((user) => (
                <Table key={user.username} DeleteUser={DeleteUser} user={user} />
            ));
        }
    };

    return (
        <div className="mytable">
            <div className="text-end bg-light">
                <Link className="btn bg-light-blue text-white m-4" to="/settings/users/add">
                  Ajouter Un Utilisateur
                </Link>
            </div>
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
        </div>
    );
}
