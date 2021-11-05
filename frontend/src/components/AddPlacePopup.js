import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
      name: name,
      link: link,
    });
  }

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeLink(evt) {
    setLink(evt.target.value);
  }

  return (
    <PopupWithForm
      name="popup-add-img"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      handleSubmit={handleSubmit}
    >
      <fieldset className="popup__input-container">
        <label className="popup__input-label">
          <input
            value={name || ''}
            type="text"
            id="img-name"
            className="popup__item popup__item_type_img-name"
            name="name"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
            onChange={handleChangeName}
          />
          <span className="popup__item-error img-name-error"></span>
        </label>

        <label className="popup__input-label">
          <input
            value={link || ''}
            type="url"
            id="img-link"
            className="popup__item popup__item_type_img-link"
            name="link"
            placeholder="Ссылка на картинку"
            required
            onChange={handleChangeLink}
          />
          <span className="popup__item-error img-link-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
