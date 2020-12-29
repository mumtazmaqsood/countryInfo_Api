
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [apiData, setApiData] = useState([{}])
  /*useEffect( ()=>{
   fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) =>{
    console.log(json);
    setApiData(json);
  });
  }, [])
  //-return data----------- 
      <p>{apiData.id}</p>
      <p>{apiData.title}</p>
  */

/*below code will fetch api from github */ 
  /*useEffect( ()=>{
    async function fetchData(){
    const responseApi =await fetch('https://api.github.com/users/mumtazmaqsood/repos')
    const data = await responseApi.json()
    console.log(data);
    setApiData(data)
    }
    fetchData();
  }, [])

  return (
    <div className="App">
      <h1>Fetch Repos</h1>
      <ul>
        {apiData.map( (repoObj, ind) => {
          return(<li key={ind}>{repoObj.name}</li>)
        })}
      </ul>
    </div>
  );
}*/
//---------------------------------------------------------------------


let [isFetching, setFetching] = useState(false);
let [getFlag, setFlag] = useState([])

useEffect( ()=>{
  async function fetchData(){
  setFetching(true)
  const responseApi =await fetch('https://restcountries.eu/rest/v2/all')
  let data = await responseApi.json()
  console.log(data);

 
  //setFlag(flagData)
  setApiData(data)
  setFetching(false)
  }
  fetchData();
}, [])

if(isFetching){
  return <div>Api Fetching Data ...</div>
}

return (
  <div className="App">
    <h1>Country Information</h1>
    <ul>
    {apiData.map( (countryObj, ind) => {
      return(
      <li key={ind}>
        {countryObj.name}
        {countryObj.nativeName}
        {countryObj.region}
        {countryObj.population}
        {countryObj.timezones}
        <img src={countryObj.flag} width="20" height="20" />
      </li>)
    })}
    </ul>
  </div>
);
}

export default App;
