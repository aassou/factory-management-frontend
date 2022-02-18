import classNames from 'classnames';
import { useState } from 'react';
import { putUser, deleteUser } from '../../../functions/UserApi';
import UpdateModalBox from './modals/UpdateModalBox';
import DeleteModalBox from './modals/DeleteModalBox';
import { HTTP_STATUS_CODE } from '../../../utils/utils';

const TableBody = ({ user, currentUser, userList, setUserList }) => {
    const USER_STATUS = {'active': 1, 'inactive': 0};
    const token = localStorage.getItem('token');
    const [status, setStatus] = useState(user.status);
    const [profil, setProfil] = useState(user.profil);
    const [updateModalBoxClass, setUpdateModalBoxClass] = useState('none');
    const [deleteModalBoxClass, setDeleteModalBoxClass] = useState('none');

    const closeUpdateModalBox = () => {
        setUpdateModalBoxClass('none');
    };

    const closeDeleteModalBox = () => {
        setDeleteModalBoxClass('none');
    };

    const updateProfile = (newprofil) => {
        putUser(
            { status, profil: newprofil, id: user.id }, 
            token
        ).catch((err) => {
            console.log(err);
        });

        setProfil(newprofil);
        closeUpdateModalBox();
    };

    const updateStatus = () => {
        const newStatus = 
            status === USER_STATUS.inactive ? USER_STATUS.active : USER_STATUS.inactive;
        setStatus(newStatus);
        putUser(
            { status: newStatus, profil: user.profil, id: user.id }, 
            localStorage.getItem('token')
        )
        .catch((err) => {
            console.log(err);
        });
    };

    const onClickDeleteUser = async (userId, token) => {
        const response = await deleteUser(userId, token);
        
        response.status === HTTP_STATUS_CODE.SUCESS.NO_CONTENT 
            && setUserList(userList.filter(user => user.id !== userId));
    };

    // display date in dd/mm/yyyy
    const handleDate = (mydate) => {
        if (mydate) {
            let date = mydate.slice(0, 10);
            date = `${date.slice(8, 10)}/${date.slice(5, 7)}/${date.slice(0, 4)}`;

            return date;
        }
    };

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
        );
    };

    const showUserStatusButton = () => {
        const statusClass = classNames(
            {'bg-secondary bg-gradient': status === USER_STATUS.active},
            {'bg-light-blue': status === USER_STATUS.inactive}, 
            'btn text-white'
        );

        return (
            currentUser && currentUser.id !== user.id &&
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
                    onClick={() => { setUpdateModalBoxClass('modalbox') }} 
                    className="btn me-2 text-white bg-success"
                >
                    <i className="fas fa-sync" />
                </button>
                {
                    currentUser && currentUser.id !== user.id &&
                    <button
                        onClick={() => { setDeleteModalBoxClass('modalbox') }}
                        className="btn text-white bg-red"
                    >
                        <i className="fas fa-trash-alt" />
                    </button>
                }
                <UpdateModalBox
                    formClass={updateModalBoxClass}
                    closeUpdateModalBox={closeUpdateModalBox}
                    oldprofile={profil}
                    updateProfile={updateProfile}
                    name={user.username}
                />
                <DeleteModalBox
                    formClass={deleteModalBoxClass}
                    closeDeleteModalBox={closeDeleteModalBox}
                    onClickDeleteUser={onClickDeleteUser}
                    name={user.username}
                    id={user.id}
                    token={token}
                />
            </td>
        </tr>
    );
}

export default TableBody;