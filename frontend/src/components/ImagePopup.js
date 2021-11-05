import React from 'react';

function ImagePopup({ card, onClose, isOpen }) {
  return (
    <section className={`popup popup_content_img ${isOpen && 'popup_opened'}`}>
      <div className="popup__img-container">
        <button className="popup__close-icon btn" onClick={onClose}></button>
        <img src={`${card.link}`} alt={card.name} className="popup__img" />
        <h2 className="popup__img-title">{card.name}</h2>
      </div>
    </section>
  );
}

export default ImagePopup;
