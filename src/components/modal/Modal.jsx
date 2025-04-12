// src/components/Modal.jsx
import React from 'react';
import Button from '../button/Button';
import './Modal.scss';

/**
 * Simple modal component to display messages
 * @param {Object} props
 * @param {boolean} props.isOpen - Indicates if the modal is visible
 * @param {Function} props.onClose - Function called when closing the modal
 * @param {string} props.message - Message to display
 * @param {boolean} [props.isError] - Indicates if the message is an error
 * @returns {JSX.Element|null}
 */
const Modal = ({ isOpen, onClose, message, isError = false }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className={`modal-message ${isError ? 'error' : 'success'}`}>
          {message}
        </p>
        <Button text={isError ? 'OK' : 'Close'} onClick={onClose} />
      </div>
    </div>
  );
};

export default Modal;