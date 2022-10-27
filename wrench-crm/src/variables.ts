
const apiKey: string = '36d89efe767f2deaca538d72ad3a1633f3704ad0';
const url: string = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";

 
  interface IRepo {
    unrestricted_value: string;
 value: string;
  }
export let data: IRepo[] = [];
export function getAddress(query: string){
fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + apiKey
    },
    body: JSON.stringify({query: query})
})
.then(response => response.text())
.then(result => data = JSON.parse(result).suggestions)
.catch(error => console.log("error", error));
}