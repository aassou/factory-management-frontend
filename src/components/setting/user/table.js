import classNames from 'classnames';
import { useState } from 'react';
import { putUser } from '../../../functions/UserApi';
import ProfileForm from './ProfileForm';

const TableBody = ({ user, deleteUserModalBox }) => {
    const USER_STATUS = {'active': 1, 'inactive': 0};
    const token = localStorage.getItem('token');
    const [status, setStatus] = useState(user.status);
    const [profil, setProfil] = useState(user.profil);
    const [profilFormClass, setProfilFormClass] = useState('none');

    // update user profile in the server
    const updateProfile = (newprofil) => {
        putUser(
            { status, profil: newprofil, id: user.id }, 
            token
        ).catch((err) => {
            console.log(err);
        });

        setProfil(newprofil);
        closeForm();
    };

    // close the profile form
    const closeForm = () => {
        setProfilFormClass('none');
    };

    // display date in dd/mm/yyyy
    const handleDate = (mydate) => {
        if (mydate) {
            let date = mydate.slice(0, 10);
            date = `${date.slice(8, 10)}/${date.slice(5, 7)}/${date.slice(0, 4)}`;

            return date;
        }
    };

    // update user status in the server
    const updateStatus = () => {
        const newStatus = 
            status === USER_STATUS.inactive ? USER_STATUS.active : USER_STATUS.inactive;
        setStatus(newStatus);
        putUser({ status: newStatus, profil: user.profil, id: user.id }, localStorage.getItem('token')).catch((err) => {
          console.log(err);
        });
    };

    // display Active or inactive based on user status (0 or 1)
    const showUserStatus = () => {
        const statusClass = classNames(
            'label label-lg',
            {'label-inverse': status === USER_STATUS.inactive},
            {'label-primary': status === USER_STATUS.active}
        );

        return (
            <div className="label-main">
                <label className={statusClass}>
                    {status === USER_STATUS.inactive ? 'Inactif' : 'Actif'}
                </label>
            </div>
            // <button className={statusClass}>
            //     {status === USER_STATUS.inactive ? 'inActif' : 'Actif'}
            // </button>
        );
    };

    const showUserStatusButton = () => {
        const statusClass = classNames(
            {'bg-secondary bg-gradient': status === USER_STATUS.active},
            {'bg-light-blue': status === USER_STATUS.inactive}, 
            'btn text-white'
        );

        return (
            <button onClick={updateStatus} className={statusClass}>
                {status === USER_STATUS.active ? 'Désactiver' : 'Activer'}
            </button>
        );
    };

    return (
        <tr key={user.id}>
            <td>{user.username}</td>
            <td>{profil}</td>
            <td>{handleDate(user.created)}{' '}</td>
            <td>{showUserStatus()}{' '}</td>
            <td>{showUserStatusButton()}</td>
            <td>
                <button 
                    onClick={() => { setProfilFormClass('modalbox') }} 
                    className="btn me-2 text-white bg-success"
                >
                    <i className="fas fa-sync" />
                </button>
                <button
                    onClick={() => { deleteUserModalBox(user.id, user.username) }}
                    className="btn text-white bg-red"
                >
                    <i className="fas fa-trash-alt" />
                </button>
                <ProfileForm
                    formClass={profilFormClass}
                    closeForm={closeForm}
                    oldprofile={profil}
                    updateProfile={updateProfile}
                    name={user.username}
                />
            </td>
        </tr>
    );
}

export default TableBody;