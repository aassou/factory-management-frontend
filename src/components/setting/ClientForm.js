import { useState, useEffect } from 'react';

const ClientForm = (props) => {
  // ?errors
  const [nomErrorClassName, setNomErrorClassName] = useState('');
  const [nomArabeErrorClassName, setNomArabeErrorClassName] = useState('');
  const [adressErrorClassName, setAdressErrorClassName] = useState('');
  const [adressArabeErrorClassName, setAdressArabeErrorClassName] = useState('');
  const [cinErrorClassName, setCinErrorClassName] = useState('');
  const [emailErrorClassName, setEmailErrorClassName] = useState('');
  const [codeErrorClassName, setCodeErrorClassName] = useState('');
  const [tel1ErrorClassName, setTel1ErrorClassName] = useState('');
  // ? error messages
  const [nomErrorMsg, setNomErrorMsg] = useState('');
  const [nomArabeErrorMsg, setNomArabeErrorMsg] = useState('');
  const [adressErrorMsg, setAdressErrorMsg] = useState('');
  const [adressArabeErrorMsg, setAdressArabeErrorMsg] = useState('');
  const [cinErrorMsg, setCinErrorMsg] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [codeErrorMsg, setCodeErrorMsg] = useState('');
  const [tel1ErrorMsg, setTel1ErrorMsg] = useState('');
  // ? success msg
  const [successMsg, setSuccessMsg] = useState('');

  // ? fields

  const [nom, setNom] = useState('');
  const [nomArabe, setNomArabe] = useState('');
  const [adress, setAdress] = useState('');
  const [adressArabe, setAdressArabe] = useState('');
  const [cin, setCin] = useState('');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [tel1, setTel1] = useState('');
  const [tel2, setTel2] = useState('');

  useEffect(() => {
    if (props.client) {
      setNom(props.client.nom);
      setNomArabe(props.client.nomArabe);
      setAdress(props.client.adresse);
      setAdressArabe(props.client.adresseArabe);
      setCin(props.client.cin);
      setEmail(props.client.email);
      setCode(props.client.code);
      setTel1(props.client.telephone1);
      if (props.client.telephone2) { setTel2(props.client.telephone1); }
    }
  }, [props.client]);

  const handlesubmit = (e) => {
    e.preventDefault();
    setNomErrorClassName('');
    setNomArabeErrorClassName('');
    setAdressErrorClassName('');
    setAdressArabeErrorClassName('');
    setCinErrorClassName('');
    setEmailErrorClassName('');
    setCodeErrorClassName('');
    setTel1ErrorClassName('');

    setNomErrorMsg('');
    setNomArabeErrorMsg('');
    setAdressErrorMsg('');
    setAdressArabeErrorMsg('');
    setCinErrorMsg('');
    setEmailErrorMsg('');
    setCodeErrorMsg('');
    setTel1ErrorMsg('');

    setSuccessMsg('');

    if (!nom) {
      setNomErrorMsg('Nom is rquired!');
      setNomErrorClassName('alert-danger');
    }
    if (!nomArabe) {
      setNomArabeErrorMsg('NomArabe is rquired!');
      setNomArabeErrorClassName('alert-danger');
    }
    if (!adress) {
      setAdressErrorMsg('Adress is rquired!');
      setAdressErrorClassName('alert-danger');
    }
    if (!adressArabe) {
      setAdressArabeErrorMsg('AdressArabe is rquired!');
      setAdressArabeErrorClassName('alert-danger');
    }
    if (!cin) {
      setCinErrorMsg('Cin is rquired!');
      setCinErrorClassName('alert-danger');
    }
    if (!email) {
      setEmailErrorMsg('Email is rquired!');
      setEmailErrorClassName('alert-danger');
    }
    if (!code) {
      setCodeErrorMsg('Code is rquired!');
      setCodeErrorClassName('alert-danger');
    }
    if (!tel1) {
      setTel1ErrorMsg('Tel1 is rquired!');
      setTel1ErrorClassName('alert-danger');
    }
    if (
      nom
           && nomArabe
           && adress
           && adressArabe
           && cin
           && email
           && code
           && tel1) {
      const id = props.client ? props.client.id : null;
      const client = {
        id,
        nom,
        nomArabe,
        adresse: adress,
        adresseArabe: adressArabe,
        cin,
        email,
        code,
        telephone1: tel1,
        telephone2: tel2,
      };
      props.ActionMethod(client, localStorage.getItem('token')).then((res) => {
        setSuccessMsg('client saved');
      }).catch((e) => {
        console.log(e);
      });
    }
  };

  const showSuccess = (msg) => {
    if (msg) {
      return <p className="alert alert-success">{msg}</p>;
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
        {props.ActionBtn}
        {' '}
        Client
      </h1>
      { showSuccess(successMsg)}
      <form onSubmit={handlesubmit} className="bg-light border border-lightblue">
        <div className="p-5">
          <div className="d-flex justify-content-between">
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

            <div className="mb-3 text-end">
              <label className="form-label">* الاسم</label>
              <div className="input-wrapper">
                <input
                  onChange={(e) => { setNomArabe(e.target.value); }}
                  value={nomArabe}
                  className={`form-control text-end ${nomArabeErrorClassName}`}
                  type="text"
                />
              </div>
              {showError(nomArabeErrorMsg)}
            </div>
          </div>
          <div className="d-flex justify-content-between">
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

            <div className="mb-3 text-end">
              <label className="form-label">* العنوان</label>
              <div className="input-wrapper">
                <input
                  onChange={(e) => { setAdressArabe(e.target.value); }}
                  value={adressArabe}
                  className={`form-control text-end  ${adressArabeErrorClassName}`}
                  type="text"
                />
              </div>
              {showError(adressArabeErrorMsg)}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">CIN *</label>
            <div className="input-wrapper">
              <input
                onChange={(e) => { setCin(e.target.value); }}
                value={cin}
                className={`form-control ${cinErrorClassName}`}
                type="text"
              />
            </div>
            {showError(cinErrorMsg)}
          </div>

          <div className="mb-3">
            <label className="form-label">Tel1 *</label>
            <div className="input-wrapper">
              <input
                onChange={(e) => { setTel1(e.target.value); }}
                value={tel1}
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
                value={tel2}
                className="form-control"
                type="text"
              />
            </div>
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
          <input className="btn bg-light-blue text-white" type="submit" value={props.ActionBtn} />
        </div>
      </form>
    </div>
  );
};

export default ClientForm;
