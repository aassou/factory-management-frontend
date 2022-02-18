import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUsers, getCurrentUser } from '../../../functions/UserApi';
import TableBody from './Table';
import { HTTP_STATUS_CODE } from '../../../utils/utils';

import 'react-confirm-alert/src/react-confirm-alert.css';
import '../../../assets/style/user.scss';
import '../../../assets/style/table.scss';

const UserList = () => {
    const token = localStorage.getItem('token');
    const [userList, setUserList] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(async () => {
        const response1 = await getUsers(token);
        const response2 = await getCurrentUser(token);

        if (response1.status === HTTP_STATUS_CODE.SUCESS.OK) {
            setUserList(response1.data["hydra:member"]);
        }

        if (response2.status === HTTP_STATUS_CODE.SUCESS.OK) {
            setCurrentUser(response2.data.user);
        }
    }, []);

    const renderHelper = () => {
        return userList && userList.map(user => (
            <TableBody
                key={user.username} 
                user={user}
                currentUser={currentUser ? currentUser : null}
                userList={userList}
                setUserList={setUserList}
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