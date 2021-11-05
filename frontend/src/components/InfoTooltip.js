import React from 'react';

function InfoTooltip({ onClose, isOpen, message }) {
  return (
    <section
      className={`popup popup_content_info-tooltip ${
        isOpen ? 'popup_opened' : ''
      }`}
    >
      <div className="popup__container">
        <button className="popup__close-icon btn" onClick={onClose}></button>
        <img
          src={message.iconPath}
          alt="Иконка результата"
          className="popup__result-icon"
        />
        <h2 className="popup__result-title">{message.text}</h2>
      </div>
    </section>
  );
}

export default InfoTooltip;
