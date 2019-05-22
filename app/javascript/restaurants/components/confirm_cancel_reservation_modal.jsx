import React from 'react';
import dogSigh from 'images/dog_sigh.png';

const ConfirmCancelReservationModal = ({ closeModal, cancelReservation }) => {
  return (
    <div className="modal-container">
      <div className="cancel-reservation-container">
        <img className="cancel-reservation-image" src={dogSigh} alt="cancel-reservation-dog" />
        <div className="cancel-reservation-message">are you sure you want to cancel your reservation?</div>
      </div>
      <button className="form-submit" type="button" onClick={cancelReservation}>cancel reservation</button>
      <button className="form-cancel" type="button" onClick={closeModal}>nevermind</button>
    </div>
  );
};

export default ConfirmCancelReservationModal;
