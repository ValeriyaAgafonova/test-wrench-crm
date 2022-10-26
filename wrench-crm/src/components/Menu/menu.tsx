import './menu.css';
import MenuItem from '../MenuItem/MenuItem';
function Menu() {
    const menuList = [
        {
            name: 'Главная',
            url: 'images/main.svg'
        },
        {
            name: 'Поиск Адресов',
            url: 'images/search.svg'
        },
        {
            name: 'Таблицы',
            url: 'images/tables.svg'
        },
        {
            name: 'Календарь',
            url: 'images/calendar.svg'
        },
        {
            name: 'Карты',
            url: 'images/map.svg'
        },
        {
            name: 'Виджеты',
            url: 'images/vidget.svg'
        },
        {
            name: 'Настройки',
            url: 'images/settings.svg'
        },
        {
            name: 'Выход',
            url: 'images/exit.svg'
        }
    ]
    return (
      <aside className="menu">
          <h2>Меню</h2>
          {menuList.forEach(item => {
              <MenuItem name={item.name} url={item.url}/>
          })}
      </aside>
    );
  }
  
  export default Menu;
  