import { useState } from "react";

import "../../../assets/style/modalbox.scss"

const ProfileForm = ({ formClass, oldprofile, updateProfile, closeForm, name}) => {
    const [selectValue, setSelectValue] = useState(oldprofile);

    return (
        <div className={formClass}>
            <div className="modalbox-content">
                <div className="modalbox-header">
                    <h4>Modifier Profil Utilisateur</h4>
                    <button onClick={() => { closeForm() }} className="close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modalbox-body">
                    <p>Êtes-vous sûr de vouloir modifier le profil de <strong>{name}</strong></p>
                    <div className="flex">
                        <label className="d-block py-2 pr-10 fw-500">Profil</label>
                        <select
                            value={selectValue}
                            onChange={(e) => { setSelectValue(e.target.value); }}
                            className="form-select w-50"
                        >
                            <option value="Manager">Manager</option>
                            <option value="Utilisateur">Utilisateur</option>
                            <option value="Consultant">Consultant</option>
                            <option value="Administrateur">Administrateur</option>
                        </select>
                    </div>
                </div>
                <div className="modalbox-footer">
                    <button type="button" className="btn btn-cancel" onClick={() => closeForm()}>
                        Non
                    </button>
                    <button type="button" className="btn btn-danger" onClick={(e) => updateProfile(selectValue)}>
                        Oui
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfileForm;