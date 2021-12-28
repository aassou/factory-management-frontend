import { useEffect, useState } from 'react';

const Form = ({ provider, ActionMethod, ActionBtn }) => {
  
  // ?errors
  const [nomErrorClassName, setNomErrorClassName] = useState('');
  const [adressErrorClassName, setAdressErrorClassName] = useState('');
  const [emailErrorClassName, setEmailErrorClassName] = useState('');
  const [codeErrorClassName, setCodeErrorClassName] = useState('');
  const [tel1ErrorClassName, setTel1ErrorClassName] = useState('');
  const [faxErrorClassName, setFaxErrorClassName] = useState('');
  
  // ? error messages
  const [nomErrorMsg, setNomErrorMsg] = useState('');
  const [adressErrorMsg, setAdressErrorMsg] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [codeErrorMsg, setCodeErrorMsg] = useState('');
  const [tel1ErrorMsg, setTel1ErrorMsg] = useState('');
  const [faxErrorMsg, setFaxErrorMsg] = useState('');
  
  // ? success msg
  const [successMsg, setSuccessMsg] = useState('');
  
  // ? fields
  const [nom, setNom] = useState('');
  const [adress, setAdress] = useState('');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [telephone1, setTel1] = useState('');
  const [telephone2, setTel2] = useState('');
  const [fax, setFax] = useState('');

  useEffect(() => {
    if (provider) {
      setNom(provider.nom);
      setAdress(provider.adresse);
      setEmail(provider.email);
      setCode(provider.code);
      setTel1(provider.telephone1);
      setFax(provider.fax);
      if (provider.telephone2) { setTel2(provider.telephone1); }
    }
  }, [provider]);

  const handlesubmit = (e) => {
    e.preventDefault();
    setNomErrorClassName('');
    setAdressErrorClassName('');
    setEmailErrorClassName('');
    setCodeErrorClassName('');
    setTel1ErrorClassName('');
    setFaxErrorClassName('');

    setNomErrorMsg('');
    setAdressErrorMsg('');
    setEmailErrorMsg('');
    setCodeErrorMsg('');
    setTel1ErrorMsg('');
    setFaxErrorMsg('');

    setSuccessMsg('');

    if (!nom) {
      setNomErrorMsg('Nom is rquired!');
      setNomErrorClassName('alert-danger');
    }
    if (!adress) {
      setAdressErrorMsg('Adress is rquired!');
      setAdressErrorClassName('alert-danger');
    }
    if (!fax) {
      setFaxErrorMsg('Fax is rquired!');
      setFaxErrorClassName('alert-danger');
    }
    if (!email) {
      setEmailErrorMsg('Email is rquired!');
      setEmailErrorClassName('alert-danger');
    }
    if (!code) {
      setCodeErrorMsg('Code is rquired!');
      setCodeErrorClassName('alert-danger');
    }
    if (!telephone1) {
      setTel1ErrorMsg('Tel1 is rquired!');
      setTel1ErrorClassName('alert-danger');
    }
    if (nom && adress && fax && email && code && telephone1) {
      const id = provider ? provider.id : null;
      const providerData = {
        id,
        nom,
        adresse: adress,
        fax,
        email,
        code,
        telephone1,
        telephone2,
      };

      ActionMethod(providerData, localStorage.getItem('token')).then(() => {
        setSuccessMsg('Le Fournisseur a été enregistré');
      }).catch((e) => {
        console.log(e);
      });
    }
  };

  const showSuccess = (message) => {
    if (message) {
      return <p className="alert alert-success">{message}</p>;
    }
  };

  const showError = (err) => {
    if (err) {
      return <p className="text-danger">{err}</p>;
    }
  };

  return (
    <div className="add-user-form bg-white">
      <h1 className="text-center p-3">
        {ActionBtn}
        {' '}
        Fournisseurs
      </h1>
      { showSuccess(successMsg) }
      <form onSubmit={handlesubmit} className="bg-light border border-lightblue">
        <div className="p-5">
          <div className="mb-3">
            <label className="form-label">Nom *</label>
            <div className="input-wrapper">
              <input
                onChange={(e) => { setNom(e.target.value); }}
                value={nom}
                className={`form-control ${nomErrorClassName}`}
                type="text"
              />
            </div>
            {showError(nomErrorMsg)}
          </div>

          <div className="mb-3">
            <label className="form-label">Adresse *</label>
            <div className="input-wrapper">
              <input
                onChange={(e) => { setAdress(e.target.value); }}
                value={adress}
                className={`form-control ${adressErrorClassName}`}
                type="text"
              />
            </div>
            {showError(adressErrorMsg)}
          </div>

          <div className="mb-3">
            <label className="form-label">Email *</label>
            <div className="input-wrapper">
              <input
                onChange={(e) => { setEmail(e.target.value); }}
                value={email}
                className={`form-control ${emailErrorClassName}`}
                type="email"
              />
            </div>
            {showError(emailErrorMsg)}
          </div>

          <div className="mb-3">
            <label className="form-label">Tel1 *</label>
            <div className="input-wrapper">
              <input
                onChange={(e) => { setTel1(e.target.value); }}
                value={telephone1}
                className={`form-control ${tel1ErrorClassName}`}
                type="text"
              />
            </div>
            {showError(tel1ErrorMsg)}
          </div>

          <div className="mb-3">
            <label className="form-label">Tel2</label>
            <div className="input-wrapper">
              <input
                onChange={(e) => { setTel2(e.target.value); }}
                value={telephone2}
                className="form-control"
                type="text"
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Fax *</label>
            <div className="input-wrapper">
              <input
                onChange={(e) => { setFax(e.target.value); }}
                value={fax}
                className={`form-control ${faxErrorClassName}`}
                type="text"
              />
            </div>
            {showError(faxErrorMsg)}
          </div>

          <div className="mb-3">
            <label className="form-label">Code *</label>
            <div className="input-wrapper">
              <input
                onChange={(e) => { setCode(e.target.value); }}
                value={code}
                className={`form-control ${codeErrorClassName}`}
                type="text"
              />
            </div>
            {showError(codeErrorMsg)}
          </div>
        </div>
        <div className="submit-wraper px-5 py-2 text-end">
          <input className="btn bg-light-blue text-white" type="submit" value={ActionBtn} />
        </div>
      </form>
    </div>
  );
};

export default Form;
