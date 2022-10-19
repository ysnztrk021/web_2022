import React from 'react';

const EditTableRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
    return (
        <tr>
            <td>
                <input 
                type="number" 
                required="required" 
                placeholder='Enter a national identity' 
                name="identite_nationale" 
                value={editFormData.identite_nationale} 
                onChange={handleEditFormChange} />
            </td>
            <td>
                <input 
                type="text" 
                required="required" 
                placeholder='Enter a name' 
                name="nom" 
                value={editFormData.nom} 
                onChange={handleEditFormChange} />
            </td>
            <td>
                <input 
                type="date" 
                required="required" 
                placeholder='Enter a birth date' 
                name="date_de_naissance" 
                value={editFormData.date_de_naissance} 
                onChange={handleEditFormChange} />
            </td>
            <td>
                <input 
                type="text" 
                required="required" 
                placeholder='Enter a birth place' 
                name="pays_de_naissance" 
                value={editFormData.pays_de_naissance}
                onChange={handleEditFormChange} />
            </td>
            <td>
                <input 
                type="text" 
                required="required" 
                placeholder='Enter a country' 
                name="pays_de_residence" 
                value={editFormData.pays_de_residence}
                onChange={handleEditFormChange} />
            </td>
            <td>
                <input 
                type="sexe" 
                required="required" 
                placeholder='Enter a sexe' 
                name="sexe" 
                value={editFormData.sexe} 
                onChange={handleEditFormChange} />
            </td>
            <td>
                <input 
                type="text" 
                required="required" 
                placeholder='Enter a marital status' 
                name="etat_civil" 
                value={editFormData.etat_civil} 
                onChange={handleEditFormChange} />
            </td>
            <td>
                <input 
                type="text" 
                required="required"
                placeholder='Enter a language' 
                name="langue" 
                value={editFormData.langue} 
                onChange={handleEditFormChange} 
                readOnly="false"/>
            </td>
            <td>
                <button type='submit'>Save</button>
                <button type='submit' onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    )
}

export default EditTableRow;