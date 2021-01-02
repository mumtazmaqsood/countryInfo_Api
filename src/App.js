
import NavBar from './components/NavBar';



function App() {


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




  return (
    
    <div className="App">
      <NavBar />
      {/* <DataPanel /> */}
    </div>
    
  );
}

export default App;
