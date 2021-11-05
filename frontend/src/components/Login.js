import React from 'react';

function Login({ authorization }) {
  const [valueEmail, setValueEmail] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');

  function handleChangeEmail(evt) {
    setValueEmail(evt.target.value);
  }

  function handleChangePassword(evt) {
    setValuePassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const email = valueEmail;
    const password = valuePassword;

    authorization({ email, password });
  }

  return (
    <section className="popup popup_content_login">
      <div className="popup__container popup__container_dark-theme">
        <form
          action="#"
          name="popup-login"
          className="popup__form popup__form_dark-theme"
          onSubmit={handleSubmit}
        >
          <h2 className="popup__title">Вход</h2>
          <fieldset className="popup__input-container">
            <label className="popup__input-label">
              <input
                value={valueEmail}
                type="email"
                className="popup__item popup__item_dark-theme"
                name="email"
                placeholder="Email"
                onChange={handleChangeEmail}
              />
              <span className="popup__item-error email-item-error"></span>
            </label>

            <label className="popup__input-label">
              <input
                value={valuePassword}
                type="password"
                className="popup__item popup__item_dark-theme"
                name="password"
                placeholder="Пароль"
                onChange={handleChangePassword}
              />
              <span className="popup__item-error password-error"></span>
            </label>
          </fieldset>
          <button
            type="submit"
            aria-label="Сохранить изменения"
            className="popup__btn popup__btn_dark-theme btn"
          >
            Войти
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
