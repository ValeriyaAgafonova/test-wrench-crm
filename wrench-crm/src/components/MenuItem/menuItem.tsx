import './menuItem.css';

function MenuItem(props) {

    return (
     <div className='menu__item'>
<object type="image/svg+xml" data={props.url} title="person-icon"></object>
<h3>{props.name}</h3>
     </div>
    );
  }
  
  export default MenuItem;