import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Card from './card';
import { getAppartements } from '../../../functions/Api';
import AddApartment from './AddApartment';

const Index = () => {
  const [appartements, setAppartements] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    getAppartements(localStorage.getItem('token'), id)
      .then((res) => {
        setAppartements(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const AddnewAppartmentToList = (apprt) => {
    const new_appartements = appartements;
    new_appartements.push(apprt);
    setAppartements(null);
    setAppartements(new_appartements);
  };
  const renderHelper = (appartements) => {
    if (appartements) {
      const res = appartements.map((aprt) => <Card key={aprt.id} appartement={aprt} />);
      return res;
    }
  };
  const switchBtnForm = () => {
    setShowForm(!showForm);
  };
  const showAddAppartBtn = () => {
    if (!showForm) {
      return (
        <div className="text-end bg-light my-2 ">
          <button onClick={switchBtnForm} className="btn btn-info text-light">
            Add Appartment
          </button>
        </div>
      );
    }
  };
  const showAddAppartForm = () => {
    if (showForm) {
      return (
        <AddApartment
          switchBtnForm={switchBtnForm}
          AddnewAppartmentToList={AddnewAppartmentToList}
          projectId={id}
        />
      );
    }
  };
  return (
    <div className="mytable">
      <table>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Superficie</th>
            <th>Prix</th>
            <th>Prix déclaré</th>
            <th>Avance sur prix déclaré</th>
            <th className="max-w-50">Niveau</th>
            <th className="max-w-50">Facade</th>
            <th>Nbr.Pièces</th>
            <th>cave</th>
            <th>status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {renderHelper(appartements)}
          {showAddAppartForm()}
        </tbody>
      </table>
      {showAddAppartBtn()}
    </div>
  );
};

export default Index;
