import React from 'react';

const ReadOnlyRow = ({ personne, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{personne.identite_nationale}</td>
            <td>{personne.nom}</td>
            <td>{personne.date_de_naissance}</td>
            <td>{personne.pays_de_naissance}</td>
            <td>{personne.pays_de_residence}</td>
            <td>{personne.sexe}</td>
            <td>{personne.etat_civil}</td>
            <td>{personne.langue}</td>
            <td>
                <button type="button" onClick={(event)=>{handleEditClick(event,personne)}} >Edit</button>
                <button type="button" onClick={(event)=>{handleDeleteClick(personne.id)}} >Delete</button>
            </td>
        </tr>
    )
}

export default ReadOnlyRow;