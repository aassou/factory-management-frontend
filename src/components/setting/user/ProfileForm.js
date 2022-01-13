const ProfileForm = ({ formClass, oldprofile, updateProfile, closeForm,}) => {
    return (
        <div className={formClass}>
            <div className="w-50 my-4 mx-auto form">
              <button onClick={() => { closeForm(); }} className="closebtn">x</button>
              <div className="pt-3 p-2 border-bottom">
                  <h1>Modifier le Profil Utilisateur</h1>
              </div>
              <div className="p-3">
                  <p>Êtes-vous sûr de vouloir midifier le profil de <strong>Name</strong></p>
                  <label className="d-block py-2">Profil</label>
                  <select
                      value={oldprofile}
                      onChange={(e) => { updateProfile(e.target.value); }}
                      className="form-select w-50"
                  >
                      <option value="Manager">Manager</option>
                      <option value="Utilisateur">Utilisateur</option>
                      <option value="Consultant">Consultant</option>
                      <option value="Administrateur">Administrateur</option>
                  </select>
              </div>
            </div>
        </div>
    );
}

export default ProfileForm;