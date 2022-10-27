import { ChangeEvent, FormEvent, useState } from "react";
import "./adress.css";
// import { getAddress } from "../../variables";
// import { data } from "../../variables";


const apiKey: string = '36d89efe767f2deaca538d72ad3a1633f3704ad0';
const url: string = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
interface IRepo {
  unrestricted_value: string;
value: string;
}

function Address() {
const [inputFlag, setInputFlag] = useState(false)
const [data, setData] = useState<IRepo[]>([])
// let data: IRepo[] = [];
function getAddress(query: string){
fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + apiKey
    },
    body: JSON.stringify({query: query, count: 20})
})
.then(response => response.text())
.then(result => setData(JSON.parse(result).suggestions))
.catch(error => console.log("error", error));
}


  function consoleButton(e: FormEvent){
    e.preventDefault()
 
    if(query.length > 2){
      console.log('form submit')
      console.log(query)
      getAddress(query)
      setInputFlag(false)

    }
   else{
     console.log('else')
setInputFlag(true);
   }
  }


  const [query, setQuery] = useState('');
function changeQuery(event: ChangeEvent<HTMLInputElement>){
  console.log(event.target.value)
setQuery(event.target.value)
}

  return (
    <div className="address">
      <h3 className="address__heading">Поиск адресов</h3>
      <p className="address__underHeading">Введите интересующий вас адрес</p>
      <form className="address__form" onSubmit={consoleButton}>
        <input
          className="address__input"
          type="text"
          placeholder="Введите интересующий вас адрес"
          onChange={changeQuery}
        ></input>
        <button className="address__button">
          Поиск
        </button>
      </form>
      {inputFlag && <span>Не менее 3х символов</span>}

      {data.length !== 0 && 
      <div className="address__list">
        <h4 className="address__subHeading">Адреса</h4>
        {data.map(item => (
          <p className="address__item" key={item.value}>{item.unrestricted_value}</p>
        ))}
        </div>}
    </div>
  );
}

export default Address;
