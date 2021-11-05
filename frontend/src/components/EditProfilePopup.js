import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      name="popup-profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      handleSubmit={handleSubmit}
    >
      <fieldset className="popup__input-container">
        <label className="popup__input-label">
          <input
            value={name || ''}
            type="text"
            id="name-item"
            className="popup__item popup__item_type_user-name"
            name="username"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
            onChange={handleChangeName}
          />
          <span className="popup__item-error name-item-error"></span>
        </label>

        <label className="popup__input-label">
          <input
            value={description || ''}
            type="text"
            id="user-job"
            className="popup__item popup__item_type_user-job"
            name="job"
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            required
            onChange={handleChangeDescription}
          />
          <span className="popup__item-error user-job-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
