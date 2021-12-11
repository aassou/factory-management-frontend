import classNames from 'classnames';
import { useState } from 'react';
import { UpdateUser } from '../../functions/Api';
import ProfileForm from '../ProfileForm';

export default function UsermanagerCard({ user, DeleteUser }) {
  const [status, setStatus] = useState(user.status);
  const [profil, setProfil] = useState(user.profil);
  const [profilFormClass, setProfilFormClass] = useState('none');

  // update user profile in the server
  const updateProfile = (newprofil) => {
    UpdateUser({ status, profil: newprofil, id: user.id }, localStorage.getItem('token')).catch((err) => {
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
  const handledate = (mydate) => {
    if (mydate) {
      let date = mydate.slice(0, 10);
      date = `${date.slice(8, 10)}/${date.slice(5, 7)}/${date.slice(0, 4)}`;
      return date;
    }
  };

  // update user status in the server
  const UpdateStatus = () => {
    const newstatus = status === 0 ? 1 : 0;
    setStatus(newstatus);
    UpdateUser({ status: newstatus, profil: user.profil, id: user.id }, localStorage.getItem('token')).catch((err) => {
      console.log(err);
    });
  };

  // display Active or inactive based on user status (0 or 1)
  const userStatus = () => {
    const classNa = status === 0 ? 'bg-secondary bg-gradient' : 'bg-light-blue';
    const statusClass = classNames(classNa, 'btn text-white');

    return (
      <button className={statusClass}>
        {status === 0 ? 'inActif' : 'Actif'}
      </button>
    );
  };

  // display Activer or Desactiver buttons based on user status (0 or 1)
  const userStatusBtn = () => {
    const classNa = status !== 0 ? 'bg-secondary bg-gradient' : 'bg-light-blue';
    const statusClass = classNames(classNa, 'btn text-white');

    return (
      <button onClick={UpdateStatus} className={statusClass}>
        {status !== 0 ? 'Désactiver' : 'Activer'}
      </button>
    );
  };

  return (
    <tr key={user.id}>

      <td>{user.username}</td>
      <td>{profil}</td>
      <td>
        {handledate(user.created.date)}
        {' '}
      </td>
      <td>
        {userStatus()}
        {' '}
      </td>
      <td>{userStatusBtn()}</td>

      <td>
        <button onClick={() => { setProfilFormClass('profileForm'); }} className="btn me-2 text-white bg-success">
          <i className="fas fa-sync" />
        </button>
        <button
          onClick={() => { DeleteUser(user.id, user.username); }}
          className="btn text-white bg-red"
        >
          <i className="fas fa-trash-alt" />
        </button>
        <ProfileForm
          formClass={profilFormClass}
          closeForm={closeForm}
          oldprofile={profil}
          updateProfile={updateProfile}
        />
      </td>
    </tr>
  );
}
