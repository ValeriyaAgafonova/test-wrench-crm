import "./Menu.css";
import MenuItem from "../MenuItem/MenuItem";

type TList = {
  name: string;
  url: string;
  id: number;
};
const menuList: TList[] = [
  {
    name: "Главная",
    url: "images/ic_main.svg",
    id: 1,
  },
  {
    name: "Поиск Адресов",
    url: "images/search.svg",
    id: 2,
  },
  {
    name: "Таблицы",
    url: "images/tables.svg",
    id: 3,
  },
  {
    name: "Календарь",
    url: "images/calendar.svg",
    id: 4,
  },
  {
    name: "Карты",
    url: "images/map.svg",
    id: 5,
  },
  {
    name: "Виджеты",
    url: "images/vidgets.svg",
    id: 6,
  },
  {
    name: "Настройки",
    url: "images/settings.svg",
    id: 7,
  },
  {
    name: "Выход",
    url: "images/exit.svg",
    id: 8,
  },
];



function Menu() {  

  return (
    <aside className="menu">
      <h2 className="menu__heading">Меню</h2>
      <ul className="menu__list">
          {menuList.map((item) => (
    <MenuItem name={item.name} url={item.url} key={item.id} id={item.id}/>
))}
  </ul>
    </aside>
  );
};

export default Menu;
