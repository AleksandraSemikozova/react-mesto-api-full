import React from 'react';

function PopupWithForm(props) {
  return (
    <section
      className={`popup popup_content_${props.name} ${
        props.isOpen && 'popup_opened'
      }`}
    >
      <div className="popup__container">
        <button
          type="button"
          aria-label="Закрыть"
          className="popup__close-icon btn"
          onClick={props.onClose}
        ></button>
        <form
          action="#"
          name="popup"
          className={`popup__form popup__form_${props.name}`}
          onSubmit={props.handleSubmit}
        >
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button
            type="submit"
            aria-label="Сохранить изменения"
            className="popup__btn btn"
          >
            {props.buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
