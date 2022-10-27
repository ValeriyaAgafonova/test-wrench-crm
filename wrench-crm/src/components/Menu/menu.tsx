import "./Menu.css";
import MenuItem from "../MenuItem/MenuItem";
import { useState } from "react";

type TList = {
  name: string;
  url: string;
  id: number;
  path: string;
};
const menuList: TList[] = [
  {
    name: "Главная",
    url: "images/ic_main.svg",
    id: 1,
    path: "/",
  },
  {
    name: "Поиск Адресов",
    url: "images/search.svg",
    id: 2,
    path: "/address",
  },
  {
    name: "Таблицы",
    url: "images/tables.svg",
    id: 3,
    path: "/tables",
  },
  {
    name: "Календарь",
    url: "images/calendar.svg",
    id: 4,
    path: "/calendar",
  },
  {
    name: "Карты",
    url: "images/map.svg",
    id: 5,
    path: "/cards",
  },
  {
    name: "Виджеты",
    url: "images/vidgets.svg",
    id: 6,
    path: "/vidgets",
  },
  {
    name: "Настройки",
    url: "images/settings.svg",
    id: 7,
    path: "/settings",
  },
  {
    name: "Выход",
    url: "images/exit.svg",
    id: 8,
    path: "/exit",
  },
];

function Menu() {
  const [isOpen, setOpen] = useState(false);

  function openMenu() {
    setOpen(true);
  }
  function closeMenu() {
    setOpen(false)
  }

  return (
    <aside className={`menu ${isOpen ? "menu_open" : ""}`}>
      <button className="menu__button" onClick={openMenu}>
        Меню
      </button>
      <h2 className="menu__heading">Меню</h2>
      <ul className="menu__list">
        {menuList.map((item) => (
          <MenuItem
            name={item.name}
            url={item.url}
            key={item.id}
            id={item.id}
            pathName={item.path}
            closeMenu={closeMenu}
          />
        ))}
      </ul>
    </aside>
  );
}

export default Menu;
