import { useState } from "react";
import "./MenuItem.css";
import { NavLink } from "react-router-dom";

export interface IMenuItem {
  name: string;
  url: string;
  id: number;
  pathName: string;
}

function MenuItem({ name, url, id, pathName }: IMenuItem) {
  const [current, setCurrent] = useState<number>(1);
  const [openSet, setOpen] = useState<boolean>(false);

  function changeCurrent(currentId: number) {
    setCurrent(currentId);
    if (currentId === 7) {
      setOpen(!openSet);
    }
  }

  return (
    <NavLink
      to={pathName}
      exact
      className="menu__item-navLink"
      activeClassName="menu__item-active"
    >
      <li className="menu__item" onClick={() => changeCurrent(id)}>
        <img src={url} alt={name} />
        <h3>{name}</h3>

        {openSet && (
          <ul className="menu__inner-list">
            <li className="menu__inner-item">
              <img src="./images/profil.svg" alt="profile" />
              <h3>Настройки профиля</h3>
            </li>
            <li className="menu__inner-item">
              <img src="/images/finance.svg" alt="finance" />
              <h3>Управление финансами</h3>
            </li>
          </ul>
        )}
      </li>
    </NavLink>
  );
}

export default MenuItem;
