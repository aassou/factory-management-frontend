import { useState } from 'react';
import { addUser } from '../../../functions/UserApi';

const UserAdd = () => {
    // ?errors
    const [passwordConfErrorClassName, setPasswordConfErrorClassName] = useState('');
    const [passwordErrorClassName, setPasswordErrorClassName] = useState('');
    const [loginErrorClassName, setLoginErrorClassName] = useState('');
    
    // ? error messages
    const [passwordConfErrorMsg, setPasswordConfErrorMsg] = useState('');
    const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
    const [loginErrorMsg, setLoginErrorMsg] = useState('');
    
    // ? success msg
    const [successMsg, setSuccessMsg] = useState('');

    // ? fields
    const [login, setLogin] = useState('');
    const [profile, setProfile] = useState('Manager');
    const [status, setStatus] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();

        setLoginErrorMsg('');
        setPasswordErrorMsg('');
        setPasswordConfErrorMsg('');

        setPasswordConfErrorClassName('');
        setPasswordErrorClassName('');
        setLoginErrorClassName('');

        setSuccessMsg('');

        if (!login) {
			setLoginErrorMsg('login obligatoire!');
			setLoginErrorClassName('alert-danger');
        } else if (!password) {
			setPasswordErrorMsg('Mot de passe obligatoire!');
			setPasswordErrorClassName('alert-danger');
        } else if (!passwordConf) {
			setPasswordConfErrorMsg('Veuillez confirmer votre mot de passe!');
			setPasswordConfErrorClassName('alert-danger');
        } else if (password !== passwordConf) {
			setPasswordConfErrorMsg("Les mots de passe doivent être identiques!");
			setPasswordConfErrorClassName('alert-danger');
        } else if (!passwordConfErrorMsg && !passwordErrorMsg && !loginErrorMsg) {
			const mystatus = status ? 1 : 0;
			const newUser = {
				username: login,
				profil: profile,
				status: mystatus,
				password,
			};

			addUser(newUser, localStorage.getItem('token')).then((res) => {
				setSuccessMsg(res.data.message);
				clearinput();
			}).catch((err) => {
				setLoginErrorMsg(err.response.data.message);
				setLoginErrorClassName('alert-danger');
			});
        }
    };

    const clearinput = () => {
        setLogin('');
        setPassword('');
        setPasswordConf('');
    };

    const showError = (err) => {
        if (err) {
            return <p className="text-danger">{err}</p>;
        }
    };

    const showSuccess = (msg) => {
        if (msg) {
            return <p className="alert alert-success">{msg}</p>;
        }
    };

    return (
        <div className="add-user-form bg-white">
            <h1 className="text-center p-3">Ajouter Utilisateur</h1>
            {showSuccess(successMsg)}
            <form onSubmit={handlesubmit} className="bg-light border border-lightblue">
                <div className="p-5">
                    <div className="mb-3">
                        <label className="form-label">Login</label>
                        <div className="input-wrapper">
                            <input value={login} onChange={(e) => { setLogin(e.target.value); }} className={`form-control ${loginErrorClassName}`} type="text" />
                            <i className={`fas fa-user ${loginErrorClassName}`} />
                        </div>
                        {showError(loginErrorMsg)}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Profil</label>
                        <select onChange={(e) => { setProfile(e.target.value); }} className="form-select w-50">
                            <option value="Manager">
                                Manager
                            </option>
                            <option value="Utilisateur">
                                Utilisateur
                            </option>
                            <option value="Consultant">
                                Consultant
                            </option>
                            <option value="Administrateur">
                                Administrateur
                            </option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label d-block">Status</label>
                        <input onChange={(e) => { setStatus(e.target.value); }} type="checkbox" />
                        {' '}
                        <span>Actif</span>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">mot de passe</label>
                        <div className="input-wrapper">
                            <input value={password} onChange={(e) => { setPassword(e.target.value); }} className={`form-control ${passwordErrorClassName}`} type="password" />
                            <i className={`fas fa-lock ${passwordErrorClassName}`} />
                        </div>
                        {showError(passwordErrorMsg)}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Retaper mot de passe</label>
                        <div className="input-wrapper">
                            <input value={passwordConf} onChange={(e) => { setPasswordConf(e.target.value); }} className={`form-control ${passwordConfErrorClassName}`} type="password" />
                            <i className={`fas fa-check ${passwordConfErrorClassName}`} />
                        </div>
                        {showError(passwordConfErrorMsg)}
                    </div>
                </div>
                <div className="submit-wraper px-5 py-2 text-end">
                    <input className="btn bg-light-blue text-white" type="submit" value="Register" />
                </div>
            </form>
        </div>
    );
};

export default UserAdd;
