import { useState } from "react";

import "../../../../assets/style/modalbox.scss"

const DeleteModalBox = ({ formClass, closeDeleteModalBox, onClickDeleteUser, name, id, token }) => {

    return (
        <div className={formClass}>
            <div className="modalbox-content">
                <div className="modalbox-header">
                    <h4>Supprimer Utilisateur</h4>
                    <button onClick={() => { closeDeleteModalBox() }} className="close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modalbox-body">
                    <p>Êtes-vous sûr de vouloir supprimer l'utilisateur <strong>{name}</strong></p>
                </div>
                <div className="modalbox-footer">
                    <button type="button" className="btn btn-cancel" onClick={() => closeDeleteModalBox()}>
                        Non
                    </button>
                    <button type="button" className="btn btn-danger" onClick={() => onClickDeleteUser(id, token)}>
                        Oui
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModalBox;