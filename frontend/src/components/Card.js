import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
// import { useEffect } from 'react';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner === currentUser._id;

  const cardDeleteButtonClassName = `element__remove-btn ${
    isOwn ? 'element__remove-btn' : 'element__remove-btn_hidden'
  }`;

  const isLiked = card.likes.some((item) => item === currentUser._id);

  const cardLikeButtonClassName = `element__like-btn ${
    isLiked ? 'element__like-btn_active' : ''
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleCardLike() {
    onCardLike(card);
  }

  function handleCardDelete() {
    onCardDelete(card);
  }

  return (
    <li className="element">
      <img
        src={card.link}
        alt={card.name}
        className="element__img"
        onClick={handleClick}
      />
      <button
        type="button"
        aria-label="Удалить"
        className={cardDeleteButtonClassName}
        onClick={handleCardDelete}
      ></button>
      <div className="element__description">
        <h2 className="element__text">{card.name}</h2>
       <div className="element__like-group">
          <button
            type="button"
            aria-label="Нравится"
            className={cardLikeButtonClassName}
            onClick={handleCardLike}
          ></button>
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
