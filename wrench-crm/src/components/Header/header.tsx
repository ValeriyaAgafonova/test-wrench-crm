import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__logo-image" src="images/ic_logo.svg" alt="logo" />
        <p>Wrench CRM</p>
      </div>
      <div className="header__client-name">
        <object className="header__client-image" type="image/svg+xml" data="images/ic_person.svg" title="person-icon"></object>
        <p>Имя Фамилия</p>
      </div>
    </header>
  );
}

export default Header;
