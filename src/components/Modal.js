import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    const onClickOutSide = (e) => {
        e.stopPropagation();

        if (e.target === e.currentTarget) {
            props.onDissmis();
        }
    };

    return ReactDOM.createPortal(
        <div onClick={onClickOutSide} className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">
                <div className="header">{props.title}</div>
                <div className="content"><p>{props.content}</p></div>
                <div className="actions">{props.actions}</div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;