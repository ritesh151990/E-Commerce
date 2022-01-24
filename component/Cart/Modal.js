import { Fragment } from 'react';
import React from 'react-dom'

const ModalOverlay = props => {
    return (
        <div>
            <div>{props.children}</div>
        </div>
    );
};

const createPortal = document.getElementById('overlay');

const Modal = props => {
    return (
        <Fragment>
            {React.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>, createPortal
            )}
        </Fragment>
    );
};

export default Modal;