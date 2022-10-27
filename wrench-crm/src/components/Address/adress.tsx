import "./adress.css";
function Address() {
  return (
    <div className="address">
      <h3 className="address__heading">Поиск адресов</h3>
      <p className="address__underHeading">Введите интересующий вас адрес</p>
      <form className="address__form">
        <input
          className="address__input"
          type="text"
          placeholder="Введите интересующий вас адрес"
        ></input>
        <button className="address__button" type="submit">
          Поиск
        </button>
      </form>
    </div>
  );
}

export default Address;
