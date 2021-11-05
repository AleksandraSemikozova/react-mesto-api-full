class Api {
  constructor({ address, headers }) {
    this._address = address;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(`${this._address}/cards`, {
      headers: this._headers,
    }).then(this._checkResponse);
  } // Загружаем картинки с сервера

  getUserInfo() {
    return fetch(`${this._address}/users/me`, {
      headers: this._headers,
    }).then(this._checkResponse);
  } // Загружаем информацию о пользователе с сервера

  editUserInfo(name, about) {
    return fetch(`${this._address}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._checkResponse);
  } // Отправляем обновленную информацию о пользователе

  addCard(name, link) {
    return fetch(`${this._address}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(this._checkResponse);
  } // Отправляем новую картинку(информацию о добавляемой картинке)

  editUserAvatar(url) {
    return fetch(`${this._address}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: url,
      }),
    }).then(this._checkResponse);
  } // Отправляем новый аватар ползователя

  likeCard(cardId) {
    return fetch(`${this._address}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
    }).then(this._checkResponse);
  } // Информация о лайках

  dislikeCard(cardId) {
    return fetch(`${this._address}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkResponse);
  } // Снимаем лайк

  changeLikeCardStatus(cardId, isLiked) {
    if (isLiked) {
      return this.dislikeCard(cardId);
    } else {
      return this.likeCard(cardId);
    }
  }

  removeCard(cardId) {
    return fetch(`${this._address}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkResponse);
  } // Удаляем картинку с определенным ID

  _checkResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка ${res.status}`);
    }
    return res.json();
  }

  updateHeaders() {
    this._headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    }
  }
}

const api = new Api({
  address: 'https://api.mesto.semikozova.nomoredomains.rocks',
  headers: {
    authorization: `Bearer ${localStorage.getItem('jwt')}`,
    'Content-type': 'application/json',
  },
});

export default api;
