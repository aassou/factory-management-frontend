import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import { getUsers, deleteUser, getUser } from '../../../functions/UserApi';
import TableBody from './table';
import DeleteModalBox from '../../modals/DeleteModalBox';
import { HTTP_STATUS_CODE } from '../../../utils/utils';

import 'react-confirm-alert/src/react-confirm-alert.css';
import '../../../assets/style/user.scss';
import '../../../assets/style/table.scss';

const UserList = () => {
    const token = localStorage.getItem('token');
    const [users, setUsers] = useState(null);
    const [userList, setUserList] = useState([]);
    const DELETE_MODALBOX_LABELS = {'confirm': 'Oui', 'cancel': 'Non'};

    useEffect(async () => {
        const response = await getUsers(token);
        setUsers(response.data);

        if (response.status === HTTP_STATUS_CODE.SUCESS.OK) {
            setUserList(response.data["hydra:member"]);
        }
    }, []);

    const onClickDeleteUser = async (userId, token) => {
        const response = await deleteUser(userId, token);
        
        response.status === HTTP_STATUS_CODE.SUCESS.NO_CONTENT 
            && setUserList(userList.filter(user => user.id !== userId));
    };

    const deleteUserModalBox = (id, username) => {
        confirmAlert({
            title: "Confirmer la suppression de l'utilisateur",
            message: `Êtes-vous sûr de vouloir supprimer l'utilisateur ${username}.`,
            buttons: [
                {
                    label: DELETE_MODALBOX_LABELS.confirm,
                    onClick: () => onClickDeleteUser(id, token)
                },
                {
                    label: DELETE_MODALBOX_LABELS.cancel,
                    onClick: () => {},
                },
            ],
        });
    };

    const renderHelper = () => {
        return userList && userList.map((user) => (
            <TableBody 
                key={user.username} 
                deleteUserModalBox={deleteUserModalBox} 
                user={user} 
            />
        ));
    };

    return (
        <div className="mytable">
            <div className="text-end bg-light">
                <Link className="btn bg-light-blue text-white m-4" to="/settings/users/add">
                  Ajouter Utilisateur
                </Link>
            </div>
            <h1>Liste des utilisateurs</h1>
            <table>
                <thead className='table-header-inversed'>
                    <tr>
                        <th>Login</th>
                        <th>Profile</th>
                        <th>Date de création</th>
                        <th>Status</th>
                        <th>Changer Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {renderHelper()}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;