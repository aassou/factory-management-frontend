import { useState, useEffect } from 'react';

const ProjectForm = (props) => {
  // ?errors
  const [nameErrorClassName, setNameErrorClassName] = useState('');
  const [arabicNameErrorClassName, setArabicNameErrorClassName] = useState('');
  const [landTitleErrorClassName, setLandTitleErrorClassName] = useState('');
  const [addressErrorClassName, setAddressErrorClassName] = useState('');
  const [arabicAddressErrorClassName, setArabicAddressErrorClassName] = useState('');
  const [surfaceErrorClassName, setSurfaceErrorClassName] = useState('');
  const [descriptionErrorClassName, setDescriptionErrorClassName] = useState('');
  const [budgetErrorClassName, setBudgetErrorClassName] = useState('');
  const [lotNumberErrorClassName, setLotNumberErrorClassName] = useState('');
  const [authorizationNumberErrorClassName, setAuthorizationNumberErrorClassName] = useState('');
  const [authorizationDateErrorClassName, setAuthorizationDateErrorClassName] = useState('');
  const [numberFloorsErrorClassName, setNumberFloorsErrorClassName] = useState('');
  const [basementErrorClassName, setBasementErrorClassName] = useState('');
  const [groundFloorErrorClassName, setGroundFloorErrorClassName] = useState('');
  const [mezzaninErrorClassName, setMezzaninErrorClassName] = useState('');
  const [stairwellCageErrorClassName, setStairwellCageErrorClassName] = useState('');

  const [terraceErrorClassName, setTerraceErrorClassName] = useState('');
  const [floorSurfaceErrorClassName, setFloorSurfaceErrorClassName] = useState('');
  const [deadlineErrorClassName, setDeadlineErrorClassName] = useState('');
  const [priceMeterInclVatErrorClassName, setPriceMeterInclVatErrorClassName] = useState('');
  const [priceMeterExclVatErrorClassName, setPriceMeterExclVatErrorClassName] = useState('');

  const [VATErrorClassName, setVATErrorClassName] = useState('');
  const [architectErrorClassName, setArchitectErrorClassName] = useState('');
  const [reinforcedCementErrorClassName, setReinforcedCementErrorClassName] = useState('');
  // ? error messages
  const [nameErrorMsg, setNameErrorMsg] = useState('');
  const [arabicNameErrorMsg, setArabicNameErrorMsg] = useState('');
  const [landTitleErrorMsg, setLandTitleErrorMsg] = useState('');
  const [addressErrorMsg, setAddressErrorMsg] = useState('');
  const [arabicAddressErrorMsg, setArabicAddressErrorMsg] = useState('');
  const [surfaceErrorMsg, setSurfaceErrorMsg] = useState('');
  const [descriptionErrorMsg, setDescriptionErrorMsg] = useState('');
  const [budgetErrorMsg, setBudgetErrorMsg] = useState('');
  const [lotNumberErrorMsg, setLotNumberErrorMsg] = useState('');
  const [authorizationNumberErrorMsg, setAuthorizationNumberErrorMsg] = useState('');
  const [authorizationDateErrorMsg, setAuthorizationDateErrorMsg] = useState('');
  const [numberFloorsErrorMsg, setNumberFloorsErrorMsg] = useState('');
  const [basementErrorMsg, setBasementErrorMsg] = useState('');
  const [groundFloorErrorMsg, setGroundFloorErrorMsg] = useState('');
  const [mezzaninErrorMsg, setMezzaninErrorMsg] = useState('');
  const [stairwellCageErrorMsg, setStairwellCageErrorMsg] = useState('');

  const [terraceErrorMsg, setTerraceErrorMsg] = useState('');
  const [floorSurfaceErrorMsg, setFloorSurfaceErrorMsg] = useState('');
  const [deadlineErrorMsg, setDeadlineErrorMsg] = useState('');
  const [priceMeterInclVatErrorMsg, setPriceMeterInclVatErrorMsg] = useState('');
  const [priceMeterExclVatErrorMsg, setPriceMeterExclVatErrorMsg] = useState('');

  const [VATErrorMsg, setVATErrorMsg] = useState('');
  const [architectErrorMsg, setArchitectErrorMsg] = useState('');
  const [reinforcedCementErrorMsg, setReinforcedCementErrorMsg] = useState('');
  // ? success msg
  const [successMsg, setSuccessMsg] = useState('');

  // ? fields

  const [name, setName] = useState('');
  const [arabicName, setArabicName] = useState('');
  const [landTitle, setLandTitle] = useState('');
  const [address, setAddress] = useState('');
  const [arabicAddress, setArabicAddress] = useState('');
  const [surface, setSurface] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [lotNumber, setLotNumber] = useState('');
  const [authorizationNumber, setAuthorizationNumber] = useState('');
  const [authorizationDate, setAuthorizationDate] = useState('');
  const [numberFloors, setNumberFloors] = useState('');
  const [basement, setBasement] = useState('');
  const [groundFloor, setGroundFloor] = useState('');
  const [mezzanin, setMezzanin] = useState('');
  const [stairwellCage, setStairwellCage] = useState('');

  const [terrace, setTerrace] = useState('');
  const [floorSurface, setFloorSurface] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priceMeterInclVat, setPriceMeterInclVat] = useState('');
  const [priceMeterExclVat, setPriceMeterExclVat] = useState('');

  const [VAT, setVAT] = useState('');
  const [architect, setArchitect] = useState('');
  const [reinforcedCement, setReinforcedCement] = useState('');
  const [status, setStatus] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (props.project) {
      const { project } = props;
      setName(project.name);
      setArabicName(project.arabicName);
      setLandTitle(project.landTitle);
      setAddress(project.address);
      setArabicAddress(project.arabicAddress);
      setSurface(project.surface);
      setDescription(project.description);
      setBudget(project.budget);
      setLotNumber(project.lotNumber);
      setAuthorizationNumber(project.authorizationNumber);
      setAuthorizationDate(project.authorizationDate);
      setNumberFloors(project.numberFloors);
      setBasement(project.basement);
      setGroundFloor(project.groundFloor);
      setMezzanin(project.mezzanin);
      setStairwellCage(project.stairwellCage);

      setTerrace(project.terrace);
      setFloorSurface(project.floorSurface);
      setDeadline(project.deadline);
      setPriceMeterInclVat(project.priceMeterInclVat);
      setPriceMeterExclVat(project.priceMeterExclVat);

      setVAT(project.VAT);
      setArchitect(project.architect);
      setReinforcedCement(project.reinforcedCement);
      setStatus(project.status === 1);
      setClosed(project.closed === 1);
    }
  }, [props.project]);

  const handlesubmit = (e) => {
    e.preventDefault();

    setSuccessMsg('');
    setNameErrorMsg('');
    setNameErrorClassName('');

    setArabicNameErrorMsg('');
    setArabicNameErrorClassName('');

    setLandTitleErrorMsg('');
    setLandTitleErrorClassName('');

    setAddressErrorMsg('');
    setAddressErrorClassName('');

    setArabicAddressErrorMsg('');
    setArabicAddressErrorClassName('');

    setSurfaceErrorMsg('');
    setSurfaceErrorClassName('');

    setDescriptionErrorMsg('');
    setDescriptionErrorClassName('');

    setBudgetErrorMsg('');
    setBudgetErrorClassName('');

    setLotNumberErrorMsg('');
    setLotNumberErrorClassName('');

    setAuthorizationNumberErrorMsg('');
    setAuthorizationNumberErrorClassName('');

    setAuthorizationDateErrorMsg('');
    setAuthorizationDateErrorClassName('');

    setNumberFloorsErrorMsg('');
    setNumberFloorsErrorClassName('');

    setBasementErrorMsg('');
    setBasementErrorClassName('');

    setGroundFloorErrorMsg('');
    setGroundFloorErrorClassName('');

    setMezzaninErrorMsg('');
    setMezzaninErrorClassName('');

    setStairwellCageErrorMsg('');
    setStairwellCageErrorClassName('');

    setTerraceErrorMsg('');
    setTerraceErrorClassName('');

    setFloorSurfaceErrorMsg('');
    setFloorSurfaceErrorClassName('');

    setDeadlineErrorMsg('');
    setDeadlineErrorClassName('');

    setPriceMeterInclVatErrorMsg('');
    setPriceMeterInclVatErrorClassName('');

    setPriceMeterExclVatErrorMsg('');
    setPriceMeterExclVatErrorClassName('');

    setVATErrorMsg('');
    setVATErrorClassName('');

    setArchitectErrorMsg('');
    setArchitectErrorClassName('');

    setReinforcedCementErrorMsg('');
    setReinforcedCementErrorClassName('');

    if (!name) {
      setNameErrorMsg('Name is rquired!');
      setNameErrorClassName('alert-danger');
    }
    if (!arabicName) {
      setArabicNameErrorMsg('ArabicName is rquired!');
      setArabicNameErrorClassName('alert-danger');
    }
    if (!landTitle) {
      setLandTitleErrorMsg('LandTitle is rquired!');
      setLandTitleErrorClassName('alert-danger');
    }
    if (!address) {
      setAddressErrorMsg('Address is rquired!');
      setAddressErrorClassName('alert-danger');
    }
    if (!arabicAddress) {
      setArabicAddressErrorMsg('Arabic Address is required!');
      setArabicAddressErrorClassName('alert-danger');
    }
    if (!surface) {
      setSurfaceErrorMsg('Surface is rquired!');
      setSurfaceErrorClassName('alert-danger');
    }
    if (!description) {
      setDescriptionErrorMsg('Description is required');
      setDescriptionErrorClassName('alert-danger');
    }
    if (!budget) {
      setBudgetErrorMsg('Budget is required');
      setBudgetErrorClassName('alert-danger');
    }
    if (!lotNumber) {
      setLotNumberErrorMsg('Lot Number is required');
      setLotNumberErrorClassName('alert-danger');
    }
    if (!authorizationNumber) {
      setAuthorizationNumberErrorMsg('Authorization Number is required');
      setAuthorizationNumberErrorClassName('alert-danger');
    }
    if (!authorizationDate) {
      setAuthorizationDateErrorMsg('Authorization Date is required');
      setAuthorizationDateErrorClassName('alert-danger');
    }
    if (!numberFloors) {
      setNumberFloorsErrorMsg('Number Floors is required');
      setNumberFloorsErrorClassName('alert-danger');
    }
    if (!basement) {
      setBasementErrorMsg('Basement is required');
      setBasementErrorClassName('alert-danger');
    }
    if (!groundFloor) {
      setGroundFloorErrorMsg('GroundFloor is required');
      setGroundFloorErrorClassName('alert-danger');
    }
    if (!mezzanin) {
      setMezzaninErrorMsg('Mezzanin is required');
      setMezzaninErrorClassName('alert-danger');
    }
    if (!stairwellCage) {
      setStairwellCageErrorMsg('StairwellCage is required');
      setStairwellCageErrorClassName('alert-danger');
    }

    if (!terrace) {
      setTerraceErrorMsg('Terrace is required');
      setTerraceErrorClassName('alert-danger');
    }
    if (!floorSurface) {
      setFloorSurfaceErrorMsg('FloorSurface is required');
      setFloorSurfaceErrorClassName('alert-danger');
    }
    if (!deadline) {
      setDeadlineErrorMsg('Deadline is required');
      setDeadlineErrorClassName('alert-danger');
    }
    if (!priceMeterInclVat) {
      setPriceMeterInclVatErrorMsg('Prix/m² HT is required');
      setPriceMeterInclVatErrorClassName('alert-danger');
    }
    if (!priceMeterExclVat) {
      setPriceMeterExclVatErrorMsg('Prix/m² TTC is required');
      setPriceMeterExclVatErrorClassName('alert-danger');
    }

    if (!VAT) {
      setVATErrorMsg('VAT is required');
      setVATErrorClassName('alert-danger');
    }
    if (!architect) {
      setArchitectErrorMsg('Architect is required');
      setArchitectErrorClassName('alert-danger');
    }
    if (!reinforcedCement) {
      setReinforcedCementErrorMsg('ReinforcedCement is required');
      setReinforcedCementErrorClassName('alert-danger');
    }

    if (
      name,
      arabicName,
      landTitle,
      address,
      arabicAddress,
      surface,
      description,
      budget,
      lotNumber,
      authorizationNumber,
      authorizationDate,
      numberFloors,
      basement,
      groundFloor,
      mezzanin,
      stairwellCage,
      terrace,
      floorSurface,
      deadline,
      priceMeterInclVat,
      priceMeterExclVat,
      VAT,
      architect,
      reinforcedCement
    ) {
      const id = props.project ? props.project.id : null;
      const project = {
        id,
        name,
        arabicName,
        landTitle,
        address,
        arabicAddress,
        surface,
        description,
        budget,
        lotNumber,
        authorizationNumber,
        authorizationDate,
        numberFloors,
        basement,
        groundFloor,
        mezzanin,
        stairwellCage,
        terrace,
        floorSurface,
        deadline,
        priceMeterInclVat,
        priceMeterExclVat,
        VAT,
        architect,
        reinforcedCement,
        status: status === true ? 1 : 0,
        closed: closed === true ? 1 : 0,
      };
      props.ActionMethod(project, localStorage.getItem('token')).then((res) => {
        setSuccessMsg('Project saved successfully');
      }).catch((err) => {
        console.log(err);
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
    <div className="bg-white">
      <h1 className="text-center p-3">
        {props.ActionBtn}
        {' '}
        Project
      </h1>
      {showSuccess(successMsg)}
      <form onSubmit={handlesubmit} className="bg-light border border-lightblue">
        <div className="p-5">
          {/* block 1 */}
          <div className="grid-four">
            <div className="mb-3 px-2">
              <label className="form-label">Nom *</label>
              <div className="input-wrapper">
                <input
                  onChange={(e) => { setName(e.target.value); }}
                  value={name}
                  className={`form-control ${nameErrorClassName}`}
                  type="text"
                />
              </div>
              {showError(nameErrorMsg)}
            </div>

            <div className="mb-3 text-end">
              <label className="form-label">* اسم المشروع</label>
              <div className="input-wrapper">
                <input
                  onChange={(e) => { setArabicName(e.target.value); }}
                  value={arabicName}
                  className={`form-control text-end ${arabicNameErrorClassName}`}
                  type="text"
                />
              </div>
              {showError(arabicNameErrorMsg)}
            </div>

            <div className="mb-3 px-2">
              <label className="form-label">Address *</label>
              <div className="input-wrapper">
                <input
                  onChange={(e) => { setAddress(e.target.value); }}
                  value={address}
                  className={`form-control ${addressErrorClassName}`}
                  type="text"
                />
              </div>
              {showError(addressErrorMsg)}
            </div>

            <div className="mb-3 text-end">
              <label className="form-label">* عنوان المشروع</label>
              <div className="input-wrapper">
                <input
                  onChange={(e) => { setArabicAddress(e.target.value); }}
                  value={arabicAddress}
                  className={`form-control ${arabicAddressErrorClassName}`}
                  type="text"
                />
              </div>
              {showError(arabicAddressErrorMsg)}
            </div>
          </div>

          {/* block 2 */}
          <div className="grid-four">
            <div className="mb-3 px-2">
              <label className="form-label">Superficie *</label>
              <div className="input-wrapper">
                <input
                  onChange={(e) => { setSurface(e.target.value); }}
                  value={surface}
                  className={`form-control ${surfaceErrorClassName}`}
                  type="number"
                />
              </div>
              {showError(surfaceErrorMsg)}
            </div>

            <div className="mb-3 px-2">
              <label className="form-label">Budget *</label>
              <div className="input-wrapper">
                <input
                  onChange={(e) => { setBudget(e.target.value); }}
                  value={budget}
                  className={`form-control ${budgetErrorClassName}`}
                  type="number"
                />
              </div>
              {showError(budgetErrorMsg)}
            </div>

            <div className="mb-3 px-2">
              <label className="form-label">Numero Lot *</label>
              <div className="input-wrapper">
                <input
                  onChange={(e) => { setLotNumber(e.target.value); }}
                  value={lotNumber}
                  className={`form-control ${lotNumberErrorClassName}`}
                  type="text"
                />
              </div>
              {showError(lotNumberErrorMsg)}
            </div>

            <div className="mb-3 px-2">
              <label className="form-label">Numero Autorisation *</label>
              <div className="input-wrapper">
                <input
                  onChange={(e) => { setAuthorizationNumber(e.target.value); }}
                  value={authorizationNumber}
                  className={`form-control ${authorizationNumberErrorClassName}`}
                  type="text"
                />
              </div>
              {showError(authorizationNumberErrorMsg)}
            </div>

          </div>

          {/* block 3 */}
          <div className="grid-four">
            <div className="mb-3 px-2">
              <label className="form-label">Titre *</label>
              <div className="input-wrapper">
                <input
                  onChange={(e) => { setLandTitle(e.target.value); }}
                  value={landTitle}
                  className={`form-control ${landTitleErrorClassName}`}
                  type="text"
                />
              </div>
              {showError(landTitleErrorMsg)}
            </div>

            <div className="mb-3 px-2">
              <label className="form-label">Nombre Etages *</label>
              <div className="input-wrapper">
                <input
                  onChange={(e) => { setNumberFloors(e.target.value); }}
                  value={numberFloors}
                  className={`form-control ${numberFloorsErrorClassName}`}
                  type="number"
                />
              </div>
              {showError(numberFloorsErrorMsg)}
            </div>

            <div className="mb-3 px-2">
              <label className="form-label">Surface sous-sol *</label>
              <div className="input-wrapper">
                <input
                  onChange={(e) => { setBasement(e.target.value); }}
                  value={basement}
                  className={`form-control ${basementErrorClassName}`}
                  type="number"
                />
              </div>
              {showError(basementErrorMsg)}
            </div>

            <div className="mb-3 px-2">
              <label className="form-label">Surface Rez De Chausser *</label>
              <div className="input-wrapper">
                <input
                  onChange={(e) => { setGroundFloor(e.target.value); }}
                  value={groundFloor}
                  className={`form-control ${groundFloorErrorClassName}`}
                  type="number"
                />
              </div>
              {showError(groundFloorErrorMsg)}
            </div>

          </div>

          {/* block 4 */}
          <div className="grid-four">

            <div className="mb-3 px-2">
              <label className="form-label">Surface Mezzanin *</label>
              <div className="input-wrapper">
                <input
                  onChange={(e) => { setMezzanin(e.target.value); }}
                  value={mezzanin}
                  className={`form-control ${mezzaninErrorClassName}`}
                  type="number"
                />
              </div>
              {showError(mezzaninErrorMsg)}
            </div>

            <div className="mb-3 px-2">
              <label className="form-label">Surface Cage Escalier *</label>
              <div className="input-wrapper">
                <input
                  onChange={(e) => { setStairwellCage(e.target.value); }}
                  value={stairwellCage}
                  className={`form-control ${stairwellCageErrorClassName}`}
                  type="number"
                />
              </div>
              {showError(stairwellCageErrorMsg)}
            </div>

            <div className="mb-3 px-2">
              <label className="form-label">Surface Terrace *</label>
              <div className="input-wrapper">
                <input
                  onChange={(e) => { setTerrace(e.target.value); }}
                  value={terrace}
                  className={`form-control ${terraceErrorClassName}`}
                  type="number"
                />
              </div>
              {showError(terraceErrorMsg)}
            </div>

            <div className="mb-3 px-2">
              <label className="form-label">Surface 1er-Néme Etage *</label>
              <div className="input-wrapper">
                <input
                  onChange={(e) => { setFloorSurface(e.target.value); }}
                  value={floorSurface}
                  className={`form-control ${floorSurfaceErrorClassName}`}
                  type="number"
                />
              </div>
              {showError(floorSurfaceErrorMsg)}
            </div>

          </div>
          {/* block 5 */}
          <div className="grid-four">

            <div className="mb-3 px-2">
              <label className="form-label">Delai/Mois *</label>
              <div className="input-wrapper">
                <input
                  onChange={(e) => { setDeadline(e.target.value); }}
                  value={deadline}
                  className={`form-control ${deadlineErrorClassName}`}
                  type="number"
                />
              </div>
              {showError(deadlineErrorMsg)}
            </div>

            <div className="mb-3 px-2">
              <label className="form-label">Prix/m² HT *</label>
              <div className="input-wrapper">
                <input
                  onChange={(e) => { setPriceMeterInclVat(e.target.value); }}
                  value={priceMeterInclVat}
                  className={`form-control ${priceMeterInclVatErrorClassName}`}
                  type="number"
                />
              </div>
              {showError(priceMeterInclVatErrorMsg)}
            </div>

            <div className="mb-3 px-2">
              <label className="form-label">VAT *</label>
              <div className="input-wrapper">
                <input
                  onChange={(e) => { setVAT(e.target.value); }}
                  value={VAT}
                  className={`form-control ${VATErrorClassName}`}
                  type="number"
                />
              </div>
              {showError(VATErrorMsg)}
            </div>

            <div className="mb-3 px-2">
              <label className="form-label">Prix/m² TTC *</label>
              <div className="input-wrapper">
                <input
                  onChange={(e) => { setPriceMeterExclVat(e.target.value); }}
                  value={priceMeterExclVat}
                  className={`form-control ${priceMeterExclVatErrorClassName}`}
                  type="number"
                />
              </div>
              {showError(priceMeterExclVatErrorMsg)}
            </div>

          </div>
          {/*  block 6 */}
          <div className="grid-four">
            <div className="mb-3 px-2">
              <label className="form-label">Description *</label>
              <div className="input-wrapper">
                <textarea
                  onChange={(e) => { setDescription(e.target.value); }}
                  value={description}
                  className={`form-control ${descriptionErrorClassName}`}
                />
              </div>
              {showError(descriptionErrorMsg)}
            </div>

            <div className="mb-3 px-2">
              <label className="form-label">Architect *</label>
              <div className="input-wrapper">
                <textarea
                  onChange={(e) => { setArchitect(e.target.value); }}
                  value={architect}
                  className={`form-control ${architectErrorClassName}`}
                />
              </div>
              {showError(architectErrorMsg)}
            </div>

            <div className="mb-3 px-2">
              <label className="form-label">bet *</label>
              <div className="input-wrapper">
                <textarea
                  className={`form-control ${reinforcedCementErrorClassName}`}
                  onChange={(e) => { setReinforcedCement(e.target.value); }}
                  value={reinforcedCement}
                  type="checkbox"
                />
              </div>
              {showError(reinforcedCementErrorMsg)}
            </div>

            <div className="mb-3 px-2">
              <label className="form-label">Date d'Autorisation *</label>
              <div className="input-wrapper">
                <input
                  onChange={(e) => { setAuthorizationDate(e.target.value); }}
                  value={authorizationDate}
                  className={`form-control ${authorizationDateErrorClassName}`}
                  type="date"
                />
              </div>
              {showError(authorizationDateErrorMsg)}
            </div>
          </div>
          {/* block 7 */}
          <div>
            <div className="mb-3 px-2">
              <div className="input-wrapper form-check">
                <input
                  className="form-check-input"
                  checked={status}
                  onChange={(e) => { setStatus(e.target.checked); }}
                  type="checkbox"
                />
                <label className="form-label m-0">Active</label>
              </div>
            </div>
            <div className="mb-3 px-2">
              <div className="input-wrapper form-check">
                <input
                  className="form-check-input"
                  checked={closed}
                  onChange={(e) => { setClosed(e.target.checked); }}
                  type="checkbox"
                />
                <label className="form-label m-0">Fermé</label>
              </div>
            </div>
          </div>
        </div>
        <div className="submit-wraper px-5 py-2 text-end">
          <input className="btn bg-light-blue text-white" type="submit" value={`${props.ActionBtn} Project`} />
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
