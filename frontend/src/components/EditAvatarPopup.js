import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarInput = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: avatarInput.current.value,
    });
  }

  return (
    <PopupWithForm
      name="popup-update-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      handleSubmit={handleSubmit}
    >
      <fieldset className="popup__input-container">
        <label className="popup__input-label">
          <input
            type="url"
            id="avatar-link"
            className="popup__item popup__item_type_avatar-link"
            name="link"
            placeholder="Ссылка на аватар"
            required
            ref={avatarInput}
          />
          <span className="popup__item-error avatar-link-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
