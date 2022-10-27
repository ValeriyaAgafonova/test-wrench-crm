import { useState } from 'react';
import './MenuItem.css';


export interface IMenuItem {
name: string,
url: string,
id: number
}

function MenuItem({name, url, id}: IMenuItem) {
     const [current, setCurrent] = useState(1)
     function changeCurrent(currentId: number){
          setCurrent(currentId)
     }
    return (
<li className='menu__item' onClick={() => changeCurrent(id)}>
     <img src={url} alt={name}/>
    <h3>{name}</h3>
         </li> 
    );
  }
  
  export default MenuItem;