import React from 'react';

// import profileAvatar from '../images/profile-avatar.jpg';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({
  onEditAvatar,
  onAddPlace,
  onEditProfile,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
}) {
  //   const { onEditAvatar, onAddPlace, onEditProfile, onCardClick } = props;
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            className="profile__avatar"
            src={`${currentUser.avatar}`}
            alt="Аватар профиля"
          />
          <div onClick={onEditAvatar} className="profile__avatar-edit"></div>
        </div>

        <div className="profile__info">
          <div className="profile__wrap">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              onClick={onEditProfile}
              type="button"
              aria-label="Редактировать профиль"
              className="profile__edit-btn btn"
            ></button>
          </div>

          <p className="profile__subtitle">{currentUser.about} </p>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          aria-label="Добавить картинку"
          className="profile__add-btn btn"
        ></button>
      </section>

      <section>
        <ul className="elements">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
