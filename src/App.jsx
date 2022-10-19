import React, { useState, Fragment } from 'react';
import './App.css';
import data from './mock-data.json';
import { nanoid } from 'nanoid';
import ReadOnlyRow from './components/ReadOnlyRow';
import EditTableRow from './components/EditTableRow';

function App() {
  const [peuples, setPeuple] = useState(data);
  const [AddFormData, setAddFormData] = useState({
    identite_nationale: '',
    nom: '',
    date_de_naissance: '',
    pays_de_naissance: '',
    pays_de_residence: '',
    sexe: '',
    etat_civil: '',
    langue: ''
  })
  const [editFormData, setEditFormData] = useState({
    identite_nationale: '',
    nom: '',
    date_de_naissance: '',
    pays_de_naissance: '',
    pays_de_residence: '',
    sexe: '',
    etat_civil: '',
    langue: ''
  });

  const [editPeupleId, setEditPeupleId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...AddFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData)
  }

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = {...editFormData};
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData)
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newPersonne = {
      id: nanoid(),
      identite_nationale: AddFormData.identite_nationale,
      nom: AddFormData.nom,
      date_de_naissance: AddFormData.date_de_naissance,
      pays_de_naissance: AddFormData.pays_de_naissance,
      pays_de_residence: AddFormData.pays_de_residence,
      sexe: AddFormData.sexe,
      etat_civil: AddFormData.etat_civil,
      langue: AddFormData.langue
    }
    const newPeuples = [...peuples, newPersonne];

    setPeuple(newPeuples);
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedPeuple = {
      identite_nationale: editFormData.identite_nationale,
      nom: editFormData.nom,
      date_de_naissance: editFormData.date_de_naissance,
      pays_de_naissance: editFormData.pays_de_naissance,
      pays_de_residence: editFormData.pays_de_residence,
      sexe: editFormData.sexe,
      etat_civil: editFormData.etat_civil,
      langue: editFormData.langue
    }
    const newPeuples = [...peuples];
    const index = peuples.findIndex((personne) => personne.id === editPeupleId);
    newPeuples[index] = editedPeuple;

    setPeuple(newPeuples);
    setEditPeupleId(null);
  }

  const handleEditClick = (event, peuples) => {
    event.preventDefault();
    setEditPeupleId(peuples.id)

    const formValues = {
      identite_nationale: peuples.identite_nationale,
      nom: peuples.nom,
      date_de_naissance: peuples.date_de_naissance,
      pays_de_naissance: peuples.pays_de_naissance,
      pays_de_residence: peuples.pays_de_residence,
      sexe: peuples.sexe,
      etat_civil: peuples.etat_civil,
      langue: peuples.langue
    }

    setEditFormData(formValues)
  }

  const handleCancelClick = () => {
    setEditPeupleId(null)
  }

  const handleDeleteClick = (peupleId) => {
    const newPeuples = [...peuples];
    const index = peuples.findIndex((personne) => personne.id === peupleId);
    newPeuples.splice(index, 1);
    setPeuple(newPeuples);
  }

  return (
    <>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Identité Nationale</th>
              <th>Nom</th>
              <th>Date de naissance</th>
              <th>Pays de naissance</th>
              <th>Pays de residence</th>
              <th>Sexe</th>
              <th>État Civil</th>
              <th>Langue</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {peuples.map((personne) => (
              <Fragment>
                {editPeupleId === personne.id ? (
                  <EditTableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    handleDeleteClick={handleDeleteClick}
                    personne={personne}
                    handleEditClick={handleEditClick} />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <form onSubmit={handleAddFormSubmit}>
        <h2>Add a person</h2>
        <ul>
          <li><input type="number" required="required" placeholder='Enter a national identity' name="identite_nationale" onChange={handleAddFormChange} /></li>
          <li><input type="text" required="required" placeholder='Enter a name' name="nom" onChange={handleAddFormChange} /></li>
          <li><input type="date" required="required" placeholder='Enter a birth date' name="date_de_naissance" onChange={handleAddFormChange} /></li>
          <li><input type="text" required="required" placeholder='Enter a birth place' name="pays_de_naissance" onChange={handleAddFormChange} /></li>
          <li><input type="text" required="required" placeholder='Enter a country' name="pays_de_residence" onChange={handleAddFormChange} /></li>
          <li><input type="text" required="required" placeholder='Enter a sexe' name="sexe" onChange={handleAddFormChange} /></li>
          <li><input type="text" required="required" placeholder='Enter a marital status' name="etat_civil" onChange={handleAddFormChange} /></li>
          <li><input type="text" required="required" placeholder='Enter a language' name="langue" onChange={handleAddFormChange} /></li>
          <li><button type='submit'>Add</button></li>
        </ul>
      </form>
    </>
  );
}

export default App;
