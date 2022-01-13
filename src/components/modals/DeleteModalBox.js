import { confirmAlert } from 'react-confirm-alert';

const DeleteModalBox = (deleteFunction, elementId, elementName, elements, title, message) => {
    const CONFIRM_OPTIONS = {'confirm': 'Oui', 'cancel': 'Non'};

    confirmAlert({
        title,
        message: `${message} ${elementName}.`,
        buttons: [
            {
                label: CONFIRM_OPTIONS.confirm,
                onClick: () => deleteFunction(
                    elementId,
                    token
                ).then(() => {
                    const newElements = elements.filter((element) => element.id !== elementId);
                    
                    return newElements;
                }).catch((e) => {
                    console.log(e);
                }),
            },
            {
                label: CONFIRM_OPTIONS.cancel,
                onClick: () => {},
            },
        ],
    });
};

export default DeleteModalBox;